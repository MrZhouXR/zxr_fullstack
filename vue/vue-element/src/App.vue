<template>
  <div class="page">
    <p>
      <router-link to="/">首页|</router-link>
      <router-link to="/about">关于</router-link>
    </p>

  <transition name="fade" >
     <!-- 路由入口 -->
   <router-view></router-view>
  </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
     
    }
  },
  components: {
   
  }
}
</script>

<style>
p{
  text-align: center;
}
.page{
  text-align: center;
}
.fade-enter{
  opacity: 0;
 
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave-active{
  opacity: 0;
}
</style>