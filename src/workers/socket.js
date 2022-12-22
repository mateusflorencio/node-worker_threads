//create a socket TCP server listening on port 1337
import { connect, createServer } from "node:net"


const con = connect(1337)
export { con }
