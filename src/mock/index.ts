import Mock from 'mockjs'
import article from './demo/article'
import appConfig from '@/config/app-config'

const baseURL = '/mock'

const mocks = [
  ...article
]

/** 注册接口 */
mocks.forEach(item => {
  console.log(`${baseURL}${item.url}`)
  Mock.mock(`${baseURL}${item.url}`, item.method, item.response)
})
