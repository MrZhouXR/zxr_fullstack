<template>
  <div class="hello">
    {{message}}
    <hr/>
    <button @click="send">发送</button>
    {{fromHi}}
  </div>
</template>

<script>
export default {
  props: ['message','fromHi'],
  data () {
    return {
      msg: '我是子组件中的数据'
    }
  },
  methods: {
    send () {
      this.$emit('sendData', this.msg)
    }
  }
}
</script>

<style>
.hello{
  color: brown;
  font-size: 20px;
  /* width: 100px;
  height: 50px;
  border: 2px dotted #ff0000;
  margin: 0 auto; */
}
</style>