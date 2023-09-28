import { message } from 'antd'
import type { AxiosError } from 'axios'
import axios from 'axios'

const codeMessage: Record<string, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

message.config({
  top: 100,
  duration: 3,
  maxCount: 1,
})
const service = axios.create({
  withCredentials: false,
})
// request interceptor
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// response interceptor
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error: AxiosError) => {
    if (error.code === 'ERR_NETWORK') {
      message.error('网络异常')
      return Promise.reject(error)
    }

    const { response } = error
    if (response) {
      message.error(codeMessage[response.status])
      if (response.status === 401) {
        localStorage.removeItem('access_token')
        window.location.href = '/login/'
      }
    }
    return Promise.reject(error)
  },
)
export default service
