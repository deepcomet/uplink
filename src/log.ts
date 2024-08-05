import { isDebug } from "./cfg"
import { fmt } from "./util"

export const debug = (tmpl: string, ...data: unknown[]) => {
  if (isDebug) console.debug(`[debug] ${fmt(tmpl, ...data)}`)
}

export const info = (tmpl: string, ...data: unknown[]) => console.log(`[info] ${fmt(tmpl, ...data)}`)

export const warn = (tmpl: string, ...data: unknown[]) => console.warn(`[warn] ${fmt(tmpl, ...data)}`)

export const error = (tmpl: string, ...data: unknown[]) => {
  const msg = fmt(tmpl, ...data)
  console.error(`[error] ${msg}`)
  throw new Error(msg)
}
