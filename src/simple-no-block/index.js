import { createServer } from "node:http"
import { firstRequest, secondRequest } from "./simple.js"
import { con } from "./socket.js"
const date = new Date()
let counterRequest = 0
let counter = 0
const handle = (req, res) => {
  counter++
  counterRequest++
  if (counterRequest === 20){
    console.log('20 requests received')
  }
  if (counter === 1) {
    console.log(`Request #${counter} received`)
    firstRequest().then(() => {
      console.log(`Request #${counter} Resolved`)
      console.log(` ${new Date() - date}ms`)
      con.write(`${counterRequest}#Finished first request\n ${new Date() - date}ms`)
      counter = counter === 2 ? 0 : 1
    })
  } else {
    console.log(`Request #${counter} received`)
    secondRequest().then(() => {
      console.log(`Request #${counter} Resolved`)
      console.log(` ${new Date() - date}ms`)
      con.write(`#${counterRequest}#Finished first request\n ${new Date() - date}ms`)
      counter = 0
    })
  }
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello World")
}

createServer(handle).listen(3000, () => {
  console.log("Server listening on port 3000")
})
