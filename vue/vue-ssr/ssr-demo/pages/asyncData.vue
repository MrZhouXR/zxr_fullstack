<template>
  <div>
    <h1>姓名：{{info.name}}</h1>
    <h2>性别：{{info.gender}}</h2>
    <h2>年龄：{{info.age}}</h2>

  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  data() {
    return {
      name: '111',
      gender: '男',
      age: 18
    }
  },
  asyncData() {
    return axios.get()
  }

}
</script>

<style>

</style>