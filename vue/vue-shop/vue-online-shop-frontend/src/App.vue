<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <ul>
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li>
          <router-link to="/admin">admin</router-link>
        </li>
        <li>
          <router-link to="/cart">cart</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    fetch('http://localhost:3000/api/v1')
    .then(data => data.json())
    .then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
