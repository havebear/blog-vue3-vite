<template>
  <div class="home">
    <div v-for="item in list" :key="item.id">
      <p>{{ item.title }}</p>
      <p>{{ item.ctime }}</p>
      <img :src="item.cover" :alt="item.title">
      <p>{{ item.introduction }}</p>
      <p>{{ item.content }}</p>
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
</style>
