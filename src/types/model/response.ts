export interface Response {
  success: boolean
  data?: object[]
  msg?: string
}

export interface LoginResponse extends Response {
}

export interface UserResponse extends Response {
  user?: object
}
