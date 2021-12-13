/*
 * @Author: BGG
 * @Date: 2021-12-11 19:25:14
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-13 14:18:07
 * @Description:  应用配置
 */



// 当前环境变量
const env = process.env.NODE_ENV

/** 环境变量配置 */
const envConfig  = {
  /** 开发环境 */
  development: {
    baseURL: 'moka',
    timeout: 10000
  },
  /** 生产环境 */
  production: {
    baseURL: 'realApi',
    timeout: 20000
  }
}

export default {
  ...envConfig[env]
}
