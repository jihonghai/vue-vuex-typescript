import request from './request'
import { Request } from '@/types'

export const login = (params: Request) => {
  return request('product/all', params)
}
