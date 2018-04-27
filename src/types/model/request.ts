export interface Request {
}

export interface LoginRequest extends Request {
  userName: string
  userPwd: string
  code?: string
}
