/*
 * @Author: BGG
 * @Date: 2021-12-10 17:11:45
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-10 17:15:27
 * @Description:  应用配置文件
 */

/**
 * 当前环境变量
 * development 开发环境
 * production  生产环境
 */
const env = process.env.NODE_ENV

/** 环境变量配置 */
const envConfig = {
  /** 开发环境 */
  development: {
    baseUrl: 'moka'
  },
  /** 生产环境 */
  production: {
    baseUrl: 'realApi'
  }
}

export default {
  ...envConfig[env]
}

