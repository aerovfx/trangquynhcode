export * from "./client.js"
export * from "./server.js"

import { createTrangquynhcodeClient } from "./client.js"
import { createTrangquynhcodeServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createTrangquynhcode(options?: ServerOptions) {
  const server = await createTrangquynhcodeServer({
    ...options,
  })

  const client = createTrangquynhcodeClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
