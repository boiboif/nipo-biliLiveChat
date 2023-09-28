import { createHandler } from './createHandler'

export const baseHandler = createHandler({
  adaptor: (res) => ({
    success: res.code === 200,
    code: res.code,
    msg: res.msg,
  }),
  headers: () => ({
    Authorization: 'Bearer ' + localStorage.getItem('access_token') ?? '',
  }),
})
