
/**
 * 分页数据请求成功
 * @param result 
 * @param param1 
 * @returns Recordable
 */
export function resultSuccess<T = any>(result: T, { message = 'ok' } = {}) {
  return {
    code: 0,
    result,
    message,
    type: 'success',
  }
}

export function resultPageSuccess<T = any>(
  pageIndex: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {}
) {
  const pageData = pagination(pageIndex, pageSize, list)

  return {
    ...resultSuccess({
      rows: pageData,
      total: list.length
    }),
    message
  }
}

export function pagination<T = any>(pageIndex: number, pageSize: number, array: T[]): T[] {
  const offset = (pageIndex - 1) * Number(pageSize)
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize))
  return ret
}

export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
 export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization
}
