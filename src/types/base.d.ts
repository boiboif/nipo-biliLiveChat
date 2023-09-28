declare interface PageReq {
  /**
   * 页码
   * @default 1
   */
  page?: number
  /**
   * 每页条数
   * @default 10
   */
  size?: number
}

declare interface BaseResData<T = never> {
  code: number
  data: T
  msg: string
}

declare interface IPage<T = never> {
  page: number
  size: number
  total: number
  list: T[]
}

declare interface PageResData<T = never> extends BaseResData {
  data: IPage<T>
}
