/*
 * @Author: BGG
 * @Date: 2021-12-14 10:00:07
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-22 21:52:53
 * @Description:  文章
 */

import axios from 'axios'

import { GetArticleList } from '@/config/api-config';

/**
 * 文章列表查询参数接口
 */
interface ArticleListParams {
  pageIndex?: number;
  pageSize?: number;
}

interface ArticleDetailParams {
  id: number;
}

/**
 * 获取文章列表
 */
export const getArticleList = (params: ArticleListParams) => {
  return axios.get('/mock/article/list', { params });
};

// 获取文章详情
export const getArticleDetail = (id: number) => {
  return axios.get('/mock/article/detail', { params: { id } });
};
