export type Audio = {
  name: string
  artist?: string
  url: string
  cover?: string
  lrc?: string
}

export type Options = {
  fixed?: boolean
  audioes: Audio[]
}
