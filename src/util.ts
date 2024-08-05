export const fmt = (tmpl: string, ...data: unknown[]): string =>
  data.reduce((acc: string, val: unknown) => acc.replace("{}", String(val)), tmpl)

export const delimValsToList = (vals?: string, delim = ",") =>
  !vals ? null : vals.split(delim).map((v) => v.trim()).filter((v) => v !== "")
