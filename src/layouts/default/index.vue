/*
 * @Author: BGG
 * @Date: 2021-12-14 18:27:53
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-14 18:27:53
 * @Description:  默认布局
 */

<template>
  <div class="layout">
    <layout-content />
    <layout-menu />
  </div>
</template>

<script lang="ts">
import LayoutMenu from './menu/index.vue'
import LayoutContent from './content/index.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    LayoutMenu,
    LayoutContent
  }
})
export default class Home extends Vue {
  
}
</script>

<style scoped lang="less">
@import url("./index.less");
</style>

