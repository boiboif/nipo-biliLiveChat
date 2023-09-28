import { DanmuListReqBody } from '@/app/api/danmu/types'
import { baseHandler } from './handlers'

export const getDanmuList = baseHandler<
  PageResData<API.DanmuType>,
  DanmuListReqBody
>('/api/danmu', 'GET')
