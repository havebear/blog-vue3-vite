<!--
 * @Author: BGG
 * @Date: 2021-12-14 18:20:05
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-20 22:31:32
 * @Description:  首页
-->

<template>
  <div class="home">
    <div class="container">
      <div v-for="item in list" :key="item.id">
        <p>{{ item.title }}</p>
        <p>{{ item.ctime }}</p>
        <img :src="item.cover" :alt="item.title">
        <p>{{ item.introduction }}</p>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class Home extends Vue {
  list = []
  mounted () {
    axios.get('/mock/article/list').then(res => {
      this.list = res.data.result.rows
    })
  }
}
</script>

<style scoped lang="less">
.home {
  color: @color;
}
.container {
  max-width: @content_max_width;
  margin: 0 atuo;
}
</style>