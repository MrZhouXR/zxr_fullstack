<template>
  <div class="vcWrap">
    <input type="text" v-for="n in len" :key="'codeInput' + n" v-model.trim.number="code[n-1]" 
    :ref ="'codeInput' + n "   @keydown="onkeyDown(n)" @keyup="onkeyUp(n)">
  </div>
</template>

<script>
export default {
  props: ['length'],
  data() {
    return  {
      len: this.length || 4 ,// 验证码的长度
      code: new Array(this.len),
      keyCode: [
        48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,8,13
      ]
    }
  },
  methods: {
    onkeyDown(n) {
      // console.log(n);
      console.log(event);
      // console.log(this.$refs['codeInput' + (n - 1)]);
      if (!this.keyCode.includes(event.keyCode)) {
        event.returnValue = false
      } else if (event.keyCode === 8 && n > 1 && this.code[n - 1] === '') {
        // 让前一个input 聚焦
        this.$refs['codeInput' + (n - 1)][0].focus()
      }
    },
    onkeyUp(n) {
      // console.log(n);
      // console.log(event);
      if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        if (n < this.len) {
          this.$refs['codeInput' + (n + 1)][0].focus()
        }
        this.$set(this.code ,n -1 , event.key)
        console.log(this.code);
        this.$emit('sendCodeInput' , this.code.join(''))
      } else if (event.keyCode === 8) {
        this.$emit('sendCodeInput', this.code.join(''))
      } else if (event.keyCode === 13) {
        if (this.code.join('').length === this.len) {
          this.$emit('goNext')
        }
      }
    }
  }
}
</script>

<style>
  .vcWrap input{
    width: 40px;
    height: 40px;
    line-height: 40px;
    -webkit-appearance: none;
    background-color: #f7f9fa;
    border: 1px solid #f7f9fa;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    padding: 0 14px;
    transition: border-color 0.2 cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 4px;
    margin-right: 1px;
  }
  .vcWrap input:last-child{
    margin-right: 0;
  }
</style>