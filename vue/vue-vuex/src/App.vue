<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Count></Count>
  </div>
</template>

<script>
import Count from '@/components/count'

export default {
  name: 'App',
  components: {
    Count
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
