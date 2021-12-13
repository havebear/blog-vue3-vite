/*
 * @Author: BGG
 * @Date: 2021-12-13 17:42:36
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-13 17:51:55
 * @Description:  文章接口
 */

import { MockMethod } from 'vite-plugin-mock'

const list = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      account: '@first',
      email: '@email',
      nickname: '@cname()',
      role: '@first',
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '1']
    })
  }
  return result
})()

export default [
  {
    url: '/basic-api/system/getAccountList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query
      return resultPageSuccess(page, pageSize, accountList)
    }
  }
] as MockMethod[]

// import { count } from "console"

// const Mock = require('mockjs')

// /** 文章数量 */
// const COUNT = 100
// /** 图片地址 */
// const IMAGE_URL = 'https://images.pexels.com/photos/3017049/pexels-photo-3017049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// /** 基本内容 */
// const BASE_CONTENT = `<p>I am testing data, I am testing data.</p><p><img src="${IMAGE_URL}"></p>`

// // 文章列表
// const list = []


// for (let i = 0; i < COUNT; i++) {
//   list.push(Mock.mock({
//     id: '@increment',
//     timestamp: +Mock.Random.date('T'),
//     author: '@first',
//     reviewer: '@first',
//     title: '@title(5, 10)',
//     content_short: 'mock data',
//     content: BASE_CONTENT,
//     forecast: '@float(0, 100, 2, 2)',
//     importance: '@integer(1, 3)',
//     'type|1': ['CN', 'US', 'JP', 'EU'],
//     'status|1': ['published', 'draft'],
//     display_time: '@datetime',
//     comment_disabled: true,
//     pageviews: '@integer(300, 5000)',
//     image_uri: IMAGE_URL,
//     platforms: ['a-platform']
//   }))
// }

// module.exports = {
  
// }
