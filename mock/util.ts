/*
 * @Author: BGG
 * @Date: 2021-12-13 18:01:36
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-13 18:04:10
 * @Description:  mock工具函数
 */

/**
 * 分页数据请求成功
 * @param result 
 * @param param1 
 * @returns Recordable
 */
export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
  return {
    code: 0,
    result,
    message,
    type: 'success',
  };
}
