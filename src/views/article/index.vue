<!--
 * @Author: BGG
 * @Date: 2021-12-14 18:20:05
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-22 21:53:04
 * @Description:  首页
-->

<template>
  <div class="article-list">
    <div class="container">
      <article-item v-for="item in list" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ArticleItem } from '@/components/article'
import { getArticleList } from '@/api/article'

@Options({
  components: {
    ArticleItem
  }
})
export default class Article extends Vue {
  list = []
  mounted () {
    getArticleList({ }).then(res => {
      this.list = res.data.result.rows
    })
  }
}
</script>

<style scoped lang="less">
.article-list {
  // color: @color;
}
.container {
  max-width: @content_max_width;
  margin: 0 auto;
}
</style>