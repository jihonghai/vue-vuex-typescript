export interface Response {
  success: boolean
  data?: object[]
  msg?: string
}

export interface LoginResponse extends Response {
}
