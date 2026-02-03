import type { McpServer } from "@agentclientprotocol/sdk"
import type { TrangquynhcodeClient } from "@trangquynhcode-ai/sdk/v2"

export interface ACPSessionState {
  id: string
  cwd: string
  mcpServers: McpServer[]
  createdAt: Date
  model?: {
    providerID: string
    modelID: string
  }
  modeId?: string
}

export interface ACPConfig {
  sdk: TrangquynhcodeClient
  defaultModel?: {
    providerID: string
    modelID: string
  }
}
