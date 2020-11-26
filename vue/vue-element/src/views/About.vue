<template>
  <div class="about">
    <ul>
      <li>
        <router-link :to="{name:'Detail',params: {username: '张三'}}">张三</router-link>
      </li>
      <li>李四</li>
      <li>
        <router-link to="/detail王五">王五</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>