import { parentPort } from "node:worker_threads"
import { setTimeout } from "node:timers/promises"
import { con } from "./socket.js"

const firstRequest = async () => await setTimeout(5000, "First Request")
const secondRequest = async () => await setTimeout(2000, "Second Request")

let counter = 0
parentPort.on("message", async () => {
  counter++
  if (counter === 1) {
    console.log(`Request #${counter} received`)
    await firstRequest()
    con.write("First Requestz\n")
    console.log(`Request #${counter} Resolved`)
  } else {
    console.log(`Request #${counter} received`)
    await secondRequest()
    con.write("Second Request\n")
    console.log(`Request #${counter} Resolved`)
    counter = 0
  }
})
