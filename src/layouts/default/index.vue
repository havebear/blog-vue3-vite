<!--
 * @Author: BGG
 * @Date: 2021-12-14 18:27:53
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-15 09:23:42
 * @Description:  
-->
/*
 * @Author: BGG
 * @Date: 2021-12-14 18:27:53
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-14 18:27:53
 * @Description:  默认布局
 */

<template>
  
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

<style>

</style>

