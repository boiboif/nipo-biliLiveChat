import { NextResponse } from 'next/server'

const codeMessage = {
  200: '请求成功。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  500: '服务器发生错误，请检查服务器。',
}

const createResponse =
  (code: keyof typeof codeMessage) =>
  <T>(data?: T, msg?: string) => {
    const defalutMsg = codeMessage[code]

    return NextResponse.json({
      code,
      msg: msg ?? defalutMsg,
      data,
    } as BaseResData<T>)
  }

export const res200 = createResponse(200)
export const res401 = createResponse(401)
export const res404 = createResponse(404)
export const res500 = createResponse(500)
