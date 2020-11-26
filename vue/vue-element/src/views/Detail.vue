<template>
  <div class="detail">
    {{$route.params.username}}...

    <button @click="goBack">返回首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      // this.$router.push({path: '/', query: {id: 1}})
      this.$router.push({name: 'Home',params: {id: 123}})
    }
  }
}
</script>

<style>

</style>