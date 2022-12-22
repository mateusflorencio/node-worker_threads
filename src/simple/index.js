import http from "node:http"
import { firstRequest, secondRequest } from "./simple.js"

let counter = 0
const handle = async (req, res) => {
  counter++
  if (counter === 1) {
    console.log(`Request #${counter} received`)
    await firstRequest()
    console.log(`Request #${counter} Resolved`)
  } else {
    console.log(`Request #${counter} received`)
    await secondRequest()
    console.log(`Request #${counter} Resolved`)
    counter = 0
  }
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello World")
}

const server = http.createServer(handle)
server.listen(3000, () => {
  console.log("Server listening on port 3000")
})
