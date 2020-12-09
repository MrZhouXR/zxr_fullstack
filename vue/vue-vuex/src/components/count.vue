<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{count}}</h2>
    <h1>{{newCount}}</h1>
    <p>
      <button @click="addAction">add</button>
      <button @click="reduce">reduce</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations , mapGetters, mapActions} from 'vuex'
export default {
  // computed: {
  //   newCount() {
  //     return this.$store.state.count * 2
  //   }
  // }
  data () {
    return {
      msg: ''
    }
  },
  // computed: mapState({
  //   newCount: state => state.count * 3
  // }),
  computed : { 
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  methods: {
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>