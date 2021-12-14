<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  mounted () {
    axios.get('/mock/article/list').then(res => {
      console.log(res)
    })
  }
}
</script>
