import axios from 'axios'
import qs from 'qs'
import { Request } from '@/types'

export default function request (url: string, params: Request | String, method: string = 'post') {
  method = method.toLowerCase()
  if (method === 'get') {
    return axios.get(url)
  }

  return axios.post(url, qs.stringify(params))
}
