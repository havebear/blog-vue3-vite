/*
 * @Author: BGG
 * @Date: 2021-12-11 19:45:37
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-14 10:30:19
 * @Description:  请求拦截
 */


import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import appConfig from '@/config/app-config'

/** 请求基地址，超时时长 */
const { baseURL, timeout } = appConfig
/** 请求方法 */
const GET: string = 'GET'
const POST: string = 'POST'
const DELETE: string = 'DELETE'
const PUT: string = 'PUT'

/** 请求方法 */
const request = ({
  url: string,
  params: object,
  data: object,
  method = GET,
  options
}): Promise => {
  const axiosConfig = {
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

const getHttp = () => {}
const postHttp = () => {}
const delHttp = () => {}
const putHttp = () => {}

/** 创建axios实例 */
const request = axios.create({
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


