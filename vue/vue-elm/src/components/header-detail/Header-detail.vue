<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper clear-fix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <!-- 星星 -->
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="supports-item" v-for="(item,index) in seller.supports" :key="index">
              <support-ico :size=2 :type="item.type"></support-ico>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>

          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click.stop="hide">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import SupportIco from '../support-ico/support-ico.vue'

export default {
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    } 
  },
  components: {
    SupportIco
  },
  methods: {
    hide() {
      this.$emit('hide', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';

.header-detail
  position fixed
  top 0 
  left 0 
  right 0
  bottom 0
  z-index 100
  overflow auto
  background $color-background-s
  color $color-white
  opacity 1
  backdrop-filter blur(10px)
  &.fade-enter,&.fade-leave-to
    opacity 0
    background $color-background
  &.fade-enter-active,&.fade-leave-active
    transition all 0.5s
  .detail-wrapper
    display inline-block
    height 100%
    width 100%
    min-height 100%
    .detail-main
      margin-top 64px
      padding-bottom 64px
      .name
        line-height 16px
        text-align center
        font-size $fontsize-large
        font-weight bold
      .star-wrapper
        margin-top 8px
        padding 2px 0
        text-align center
      .title
        display flex
        width 80%
        margin 28px auto 24px auto
        .line
          flex 1
          position relative
          border-bottom 1px solid rgba(255,255,255,0.2)
          top -10px
        .text
          padding 0 12px
          font-weight 700
          font-size $fontsize-medium
      .supports
        width 80%
        margin 0 auto
        &-item
          display flex
          align-items center
          padding 0 12px
          margin-bottom 12px
          &:last-child
            margin-bottom 0
          .text
            line-height: 16px;
            font-size $fontsize-small
            margin-left 6px
      .bulletin
        width: 80%;
        margin: 0 auto
        .content
          padding 0 12px
          line-height 24px
          font-size $fontsize-small
  .detail-close
    position relative
    width 30px
    height 30px
    margin -64px auto 0
    font-size $fontsize-large-xxxx
    clear both
</style>