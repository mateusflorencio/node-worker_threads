import { createServer } from "node:net"

createServer((socket) => {
  socket.pipe(process.stdout)
}).listen(1337)
