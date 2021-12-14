/*
 * @Author: BGG
 * @Date: 2021-12-11 19:45:37
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-14 11:13:19
 * @Description:  请求拦截
 */

import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import axios from 'axios'
import appConfig from '@/config/app-config'

/** 请求基地址，超时时长 */
const { baseURL, timeout } = appConfig
/** 请求方法 */
const GET: string = 'GET'
const POST: string = 'POST'
const DELETE: string = 'DELETE'
const PUT: string = 'PUT'

type RequestParams = {
  url: string,
  params?: object,
  data?: object,
  method?: string,
  options?: object
}

/** 请求方法 */
const request = ({ url, params, data, method = GET, options }: RequestParams) => {
  const axiosConfig: RequestParams = {
    url,
    params,
    data,
    method,
    options
  }
  return axios(axiosConfig)
    .then(res => res)
    .catch(error => {
      // handleError(error)
    })
}

const getHttp = (url: string) => httpRequest({ url })
const postHttp = () => {}
const delHttp = () => {}
const putHttp = () => {}

/** 创建axios实例 */
const httpRequest = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json'
  }
})

/** 请求拦截器 */
request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

/** 响应拦截器 */
request.interceptors.response.use((response: AxiosResponse) => {
  return response.data
})

export {
  getHttp,
  postHttp,
  delHttp,
  putHttp
}


