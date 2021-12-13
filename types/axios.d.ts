/*
 * @Author: BGG
 * @Date: 2021-12-13 18:10:39
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-13 18:15:25
 * @Description:  axios接口
 */

/** 请求参数 */
export interface RequestOptions {
  // 
  formatData?: boolean
}

/** 返回结果 */
export interface Result<T = any> {
  code?: number
  type?: 'success' | 'error' | 'warning'
  message: string
  result: T
}

/** 上传文件参数 */
export interface UploadFileParams {
  data?: any
  name?: string
  file: File | Blob
  filename?: string,
  [key: string]: any
}
