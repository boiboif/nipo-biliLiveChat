import service from './request'
import { message } from 'antd'
import type { AxiosRequestConfig, Method } from 'axios'
import { set, merge } from 'lodash-es'

interface CreateHandlerParams {
  /** @name 请求基准地址 */
  baseUrl?: string
  /**
   * @name http状态码正确的情况下，判断请求是否成功
   * @param resData 接口返回数据
   */
  adaptor: (resData: any) => { success: boolean; msg: string; code: number }
  /** @name 请求头 */
  headers?: (url: string) => Record<string, string>
  /**
   * adaptor中success为false时的错误处理
   * @param res 后端返回内容
   * @param config 当前请求的配置参数
   * @returns
   */
  errorHandler?: (res: any, config: AxiosRequestConfig) => void
}

type HandlerConfig = Omit<AxiosRequestConfig, 'url' | 'data'>

export const createHandler = (createHandlerParams: CreateHandlerParams) => {
  return <Res = any, Req = any>(url: string, method: Method = 'post', config?: HandlerConfig) =>
    async (data?: Req, innerConfig?: HandlerConfig) => {
      const { baseUrl = '', adaptor, headers, errorHandler } = createHandlerParams

      const requestOption: AxiosRequestConfig = {
        url: baseUrl + url,
        ...config,
        ...innerConfig,
        headers: merge(headers?.(url), config?.headers, innerConfig?.headers),
      }

      set(requestOption, 'method', method)
      set(requestOption, ['get', 'GET'].includes(method) ? 'params' : 'data', data)

      const response = await service.request<never, Res>(requestOption)

      const { success, msg, code } = adaptor(response ?? {})

      if (!success) {
        if (errorHandler) {
          errorHandler?.(response, requestOption)
        } else {
          message.error(msg)
        }
        throw new Error(`${code}: ${msg}`)
      }

      return response
    }
}
