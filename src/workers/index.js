import http from "node:http"
import { Worker } from 'node:worker_threads'
import * as url from 'node:url'
import { join } from 'node:path'


const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const worker = new Worker(join(__dirname, 'workers.js'))

//const worker = new Worker()

const handle = async (req, res) => {
  worker.postMessage("Request")
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello World")
}

const server = http.createServer(handle)
server.listen(3000, () => {
  console.log("Server listening on port 3000")
})
