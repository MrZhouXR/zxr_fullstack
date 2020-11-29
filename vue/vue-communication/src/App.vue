<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <Hello :message="title" :fromHi="fromHi" @sendData="getData" />
    {{fromChild}}
    <Hi :message="title" @sendHi="getHi"/> -->

    <HiChild/>
    <HelloChild/>

  </div>
</template>

<script>
// import Hello from '@/components/Hello'
// import Hi from '@/components/Hi'
import HiChild from '@/components/HiChild'
import HelloChild from '@/components/HelloChild'

export default {
  name: 'App',
  data () {
    return {
      title: '我爱我的祖国',
      fromChild: '',
      fromHi: ''
    }
  },
  methods: {
    getData (e) {
      console.log(e)
      this.fromChild = e
    },
    getHi (e) {
      this.fromHi = e
    }
  },
  components: {
    // Hello,
    // Hi,
    HiChild,
    HelloChild
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
