<!--
 * @Author: BGG
 * @Date: 2021-12-22 21:44:57
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-22 22:03:02
 * @Description:  文章详情
-->

<template>
  <div>文章详情</div>
</template>

<script lang="ts" setup>
import { onMounted, unref } from 'vue'
import { useRouter } from 'vue-router'
import { getArticleDetail } from '@/api/article'

const router = useRouter();
const { currentRoute } = router;
const route = unref(currentRoute);

onMounted(() => {

  console.log(route)
  getArticleDetail(route.query.id).then(res => {
    console.log(res);
  })
})  
</script>

<style scoped lang="less">

</style>
