<template>
  <div class="hi">
    <p @click="sendHi">{{hi}}</p>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      hi: 'hi! ',
      hiMsg: '我是hi里面的数据'
    }
  },
  methods: {
    sendHi () {
      this.$emit('sendHi', this.hiMsg)
    }
  }
}
</script>

<style>

</style>