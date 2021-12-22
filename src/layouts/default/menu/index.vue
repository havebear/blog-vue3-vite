<!--
 * @Author: BGG
 * @Date: 2021-12-20 22:02:25
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-22 21:11:56
 * @Description:  导航栏
-->

<template>
  <div class="layout-menu">
    <div
      class="menu-item"
      v-for="item in menus"
      :key="item.label"
      @click="to(item.path)">{{ item.label }}</div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'

const menus = [
  { label: '首页', path: 'article' },
  { label: '实验室', path: 'laboratory' },
  { label: '相册', path: 'gallery' },
  { label: '留言', path: 'message' }
]

export default class LayoutMenu extends Vue {
  menus = menus
  to (path) {
    this.$router.push({ path })
  }
}
</script>

<style scoped lang="less">

</style>
