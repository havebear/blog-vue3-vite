/*
 * @Author: BGG
 * @Date: 2021-12-11 19:45:37
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-13 09:52:38
 * @Description:  请求拦截
 */


import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import appConfig from '@/config/app.config'

/** 请求基地址，超时时长 */
const { baseURL, timeout } = appConfig


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
