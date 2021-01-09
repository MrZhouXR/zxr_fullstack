<template>
  <div id="app">
    <p>{{this.$store.state.num}}</p>
    <p>{{this.$store.getters.getNum}}</p>
    <button @click="add">+1</button>
    <button @click="asyncadd">+2</button>

  </div>
</template>

<script>


export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    add() {
      this.$store.commit('add', 1)
    },
    asyncadd() {
      this.$store.dispatch('add', 2)
    }
  }
}
</script>

<style>

</style>
