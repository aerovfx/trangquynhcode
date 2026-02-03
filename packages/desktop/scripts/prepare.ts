#!/usr/bin/env bun
import { $ } from "bun"

import { copyBinaryToSidecarFolder, getCurrentSidecar, windowsify } from "./utils"

const sidecarConfig = getCurrentSidecar()

const dir = "src-tauri/target/trangquynhcode-binaries"

await $`mkdir -p ${dir}`
await $`gh run download ${Bun.env.GITHUB_RUN_ID} -n trangquynhcode-cli`.cwd(dir)

await copyBinaryToSidecarFolder(windowsify(`${dir}/${sidecarConfig.ocBinary}/bin/trangquynhcode`))
