<template>
<div>
  <div class="login">
    <div class="login-container">
      <h2>旅梦后台管理系统</h2>
      <div class="wrap">
        <el-input
          placeholder="请输入用户名"
          prefix-icon="el-icon-user-solid"
          v-model="username">
        </el-input>
        <el-input placeholder="请输入密码" v-model="password" prefix-icon="el-icon-lock" show-password></el-input>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
        username: '',
        password: ''
    }
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '123') {
        this.$router.push({name: 'Home',params: {username: this.username,password: this.password}})
        localStorage.setItem('username',this.username)
      }
    }
  }
}
</script>

<style>
.login{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container{
  width: 300px;
  height: 260px;
  box-shadow: 0px 0px 5px #ff0000;
  border-radius: 5px;
  text-align: center;
}
.wrap{
  padding: 10px 50px;
}
input{
  margin: 10px 0;
}
</style>