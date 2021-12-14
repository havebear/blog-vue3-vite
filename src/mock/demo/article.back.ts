/*
 * @Author: BGG
 * @Date: 2021-12-13 17:42:36
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-14 15:03:14
 * @Description:  文章接口
 */

import Mock from 'mockjs'
import { resultPageSuccess } from '../util'

/** 图片地址 */
const IMAGE_URL = 'https://images.pexels.com/photos/3017049/pexels-photo-3017049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
/** 基本内容 */
const BASE_CONTENT = `<p>I am testing data, I am testing data.</p><p><img src="${IMAGE_URL}"></p>`

const list = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: '@increment',
      timestamp: +Mock.Random.date('T'),
      author: '@first',
      reviewer: '@first',
      title: '@title(5, 10)',
      content_short: 'mock data',
      content: BASE_CONTENT,
      forecast: '@float(0, 100, 2, 2)',
      importance: '@integer(1, 3)',
      'type|1': ['CN', 'US', 'JP', 'EU'],
      'status|1': ['published', 'draft'],
      display_time: '@datetime',
      comment_disabled: true,
      pageviews: '@integer(300, 5000)',
      image_uri: IMAGE_URL,
      platforms: ['a-platform']
    })
  }
  return result
})()

export default [
  {
    url: '/mock/article/list',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { pageIndex = 1, pageSize = 20 } = query
      return resultPageSuccess(pageIndex, pageSize, list)
    }
  }
]