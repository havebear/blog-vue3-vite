/*
 * @Author: BGG
 * @Date: 2021-12-14 14:31:52
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-22 21:52:31
 * @Description:  
 */
import Mock from 'mockjs';
import { resultPageSuccess, resultSuccess } from '../util';

interface Article {
  id: number                // 自增id
  ctime: string             // 发布时间
  author?: string            // 作者
  title?: string             // 标题
  cover?: string             // 封面
  introduction?: string      // 简介
  content?: string           // 内容
}

interface Page {
  pageIndex: number
  pageSize: number
}

// 文章总数
const COUNT = 100
// IMG
// const IMG = 'https://images.pexels.com/photos/10163159/pexels-photo-10163159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// 文章基本内容
// const CONTENT = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'

/** 文章列表 */
const LIST: Array<Article> = new Array(COUNT).fill(0).map(item => Mock.mock({
  id: '@increment',
  ctime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
  author: '@first',
  title: '@title(8, 20)',
  cover: Mock.Random.dataImage('600x270', 'HaveBear'),
  introduction: '@csentence',
  content: '@cparagraph'
}));

export default [
  {
    url: '/article/list',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { pageIndex = 1, pageSize = 10 } = query || {};
      return resultPageSuccess(pageIndex, pageSize, LIST.slice(pageIndex - 1, pageSize));
    },
  },
  {
    url: '/article/detail',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { id } = query || {};
      return resultSuccess(LIST.find(item => item.id === id));
    },
  },
];


