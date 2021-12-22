<!--
 * @Author: BGG
 * @Date: 2021-12-22 21:16:13
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-22 21:40:11
 * @Description:  博客项
-->


<template>
  <div class="article" @click="handleClick">
    <div class="article-title">{{ data.title }}</div>
    <p class="article-time">发布于 {{ data.ctime }}</p>
    <p>{{ data.introduction }}</p>
    <img :src="data.cover" :alt="data.title">
  </div>
</template>

<script lang="ts" setup>
  import router from '@/router';

  const props = defineProps({
    /** 数据项 */
    data: {
      type: Object,
      required: true
    }
  })

  function handleClick () {
    router.push({ name: 'ArticleDetail', query: { id: props.data.id } })
  }
</script>

<style scoped lang="less">
.article {
  margin-bottom: 20px;
  padding: 10px;
  &-title {
    font-size: 16px;
  }
  &-time {
    font-size: 14px;
    color: #666;
  }
}
</style>
