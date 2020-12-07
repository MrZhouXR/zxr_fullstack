<template>
  <div id="app">
    <v-header :seller="seller"/>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import { getSeller } from '@/api' 
import qs from 'query-string'
export default {
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  components: {
    'v-header': Header
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then((seller) => {
      console.log(seller)
      this.seller = Object.assign({},this.seller,seller)
    })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/variable.styl';
.tab
  display flex
  text-align: center;
  &-wrapper
    flex 1
    height 36px
    line-height 36px
    padding-top 10px
    a
      width 100%
      display inline-block
      color #666
      text-decoration none
    .router-link-exact-active
      color $color-red
      border-bottom 2px solid $color-red
</style>