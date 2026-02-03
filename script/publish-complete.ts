#!/usr/bin/env bun

import { Script } from "@trangquynhcode-ai/script"
import { $ } from "bun"

if (!Script.preview) {
  await $`gh release edit v${Script.version} --draft=false`
}

await $`bun install`

await $`gh release download --pattern "trangquynhcode-linux-*64.tar.gz" --pattern "trangquynhcode-darwin-*64.zip" -D dist`

await import(`../packages/trangquynhcode/script/publish-registries.ts`)
