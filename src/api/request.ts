import axios from 'axios'
import qs from 'qs'
import { Request } from '@/types'

export default function request (url: string, params: Request, method: string = 'post') {
  return axios[method.toLowerCase()](url, qs.stringify(params))
}
