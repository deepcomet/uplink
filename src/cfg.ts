export const isDebug: boolean = (process.env.DEBUG ?? "0") !== "0"

export const rpcUrl: URL | null = !process.env.RPC ? null : new URL(process.env.RPC)
