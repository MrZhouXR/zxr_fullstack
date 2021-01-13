<template>
  <div class="cart-box">
    <simple-header :name="'购物车'" :back="false"></simple-header>
    <!-- 列表 -->
    <div class="cart-body" v-if="list.length">
      <van-checkbox-group v-model="result" @change="groupChange">
        <van-swipe-cell v-for="(item,index) in list" :key="index">
          <div class="good-item">
            <van-checkbox :name="item.cartItemId"></van-checkbox>
            <div class="good-img">
              <img :src="$filters.prefix(item.goodsCoverImg)" alt="">
            </div>
            <div class="good-desc">
              <div class="good-title">
                <span>{{item.goodsName}}</span>
                <span>x{{item.goodsCount}}</span>
              </div>
              <div class="good-btn">
                <div class="price">￥{{item.sellingPrice}}</div>
                <van-stepper integer="true" min="1" max="5" :model-value="item.goodsCount" :name="item.cartItemId" @change="numChange"/>
              </div>
            </div>
          </div>
          <template #right>
            <van-button square icon="delete-o" type="danger" class="delete-button" @click="deleteGood(item.cartItemId)"/>
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <!-- 合计 -->
    <van-submit-bar v-if="list.length" class="submit-all" :price="total * 100" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model:checked="checkAll" @click="allCheck">全选</van-checkbox>
    </van-submit-bar>
    <div class="empty" v-if="!list.length">
      <img class="empty-cart" src="//s.yezgea02.com/1604028375097/empty-car.png" alt="空购物车">
      <div class="title">购物车空空如也</div>
      <van-button round color="#1baeae" type="primary" @click="goTo" block>前往选购</van-button>
    </div>
  </div>
  <nav-bar></nav-bar>
</template>

<script>
import SimpleHeader from '@/components/SimpleHeader.vue'
import { computed, onMounted, reactive, toRefs } from 'vue'
import NavBar from "@/components/NavBar.vue";
import { Toast } from 'vant';
import { getCart, modifyCart, deleteCartItem } from '@/service/cart.js'
import { useRouter } from 'vue-router'

export default {
  components: {
    SimpleHeader,
    NavBar
  },
  setup() {
    const state = reactive({
      result: [],
      list: [],
      checkAll: true
    })

    onMounted(() => {
      init()  
    })

    const  init = async () => {
      Toast.loading({
        message: '加载中',
        forbidClick: true
      })
      const { data } = await getCart({pageNumber: 1})
      // console.log(data);
      state.list = data
      state.result = data.map(item => item.cartItemId)
      Toast.clear()
    }

    // 全选
    const allCheck = () => {
      if(!state.checkAll) {
        state.result = state.list.map(item => item.cartItemId)
      } else {
        state.result = []
      }
      state.checkAll = !state.checkAll
    }

    // 总价格
    const total = computed(() => {
      let sum = 0
      let _list = state.list.filter(item => state.result.includes(item.cartItemId))
      _list.forEach(item => {
        sum += item.goodsCount * item.sellingPrice
      })
      return sum
    })


    // 单选
    const groupChange = (result) => {
      console.log(result);
      if(result.length === state.list.length) {
        state.checkAll = true
      } else {
        state.checkAll = false
      }
      state.result = result
    }

    //加减数量
    const numChange = async (value,detail) => {
      // console.log(value);
      // console.log(detail);
      if(state.list.filter(item => item.cartItemId == detail.name)[0].goodsCount == value) {
        return 
      } 
      Toast.loading({
        message: '修改中',
        forbidClick: true
      })
      const params = {
        cartItemId: detail.name,
        goodsCount: value
      }
      // 发起接口请求，更新服务器上的数据
      const { resultCode } = await modifyCart(params)
      // console.log(result);
      if(resultCode === 200) {
        Toast.clear()
      }
      // 用现有的数据更新页面
      state.list.forEach(item => {
        if(item.cartItemId == detail.name) {
          item.goodsCount = value
        }
      })

    }

    // 删除商品
    const deleteGood = async (goodId) => {
      const { resultCode } = await deleteCartItem(goodId)
      if(resultCode === 200) {
        Toast.success('删除成功')
        // state.list.forEach((item,index) => {
        //   if(item.cartItemId == goodId) {
        //     state.list.splice(index,1)
        //   }
        // })
        state.list = state.list.filter((item) => {
          return item.cartItemId !== goodId
        })
      }
    }

    const router = useRouter()

    // 前往选购
    const goTo = () => {
      router.push({ path: '/home' })
    }

    // 结算
    const onSubmit = () => {
      if(!state.result.length) {
        Toast.fail('请选择商品进行结算')
        return 
      }
      const params = JSON.stringify(state.result)
      router.push({ path: '/create-order', query: {cartItemId: params} })
    }

    return {
      ...toRefs(state),
      allCheck,
      total,
      groupChange,
      numChange,
      deleteGood,
      goTo,
      onSubmit
    }
  }


}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .cart-box {
    .cart-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      .fj();
      .wh(100%, 44px);
      line-height: 44px;
      padding: 0 10px;
      .boxSizing();
      color: #252525;
      background: #fff;
      border-bottom: 1px solid #dcdcdc;
      .cart-name {
        font-size: 14px;
      }
    }
    .cart-body {
      margin: 60px 0 100px 0;
      padding-left: 10px;
      padding-bottom: 100px;
      .good-item {
        display: flex;
        .good-img {
          img {
            .wh(100px, 100px)
          }
        }
        .good-desc {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          padding: 20px;
          .good-title {
            display: flex;
            justify-content: space-between;
          }
          .good-btn {
            display: flex;
            justify-content: space-between;
            .price {
              font-size: 16px;
              color: red;
              line-height: 28px;
            }
            .van-icon-delete {
              font-size: 20px;
              margin-top: 4px;
            }
          }
        }
      }
      .delete-button {
        width: 50px;
        height: 100%;
      }
    }
    .empty {
      width: 50%;
      margin: 0 auto;
      text-align: center;
      margin-top: 200px;
      .empty-cart {
        width: 150px;
        margin-bottom: 20px;
      }
      .van-icon-smile-o {
        font-size: 50px;
      }
      .title {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
    .submit-all {
      margin-bottom: 50px;
      .van-checkbox {
        margin-left: 10px
      }
      .van-submit-bar__text {
        margin-right: 10px
      }
      .van-submit-bar__button {
        background: @primary;
      }
    }
    .van-checkbox__icon—checked .van-icon {
      background-color: @primary;
      border-color: @primary;
    }
  }
</style>
