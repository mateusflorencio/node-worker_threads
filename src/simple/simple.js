import { setTimeout } from "node:timers/promises"

const secondRequest = async () => await setTimeout(2000, "Second Request")

const firstRequest = async () => await setTimeout(5000, "First Request")

export {
  firstRequest,
  secondRequest,
}
