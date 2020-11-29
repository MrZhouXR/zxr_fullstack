<template>
  <div class="user-info">
    {{ value }}
    {{ totalPrice }}
    <ul>
      <li v-for="(item , index) in reverseNews" :key="index" >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2,
      price: "" || 100,
      news: [
        { title: '"空降"不到一周 韩俊任吉林代省长 曾是刘鹤"副手"' , date: '2020/11/01'},
        { title: "上门女婿成村霸，敲诈勒索故意纵火还打伤司法人员" , date: '2020/11/02'},
        { title: "X光显示肚子内有异物 港媒:黄之锋被关医院单人囚室" , date: '2020/11/03'},
        { title: "特朗普突然出手，举行了史上最短一次记者会！" , date: '2020/11/04'},
      ],
    };
  },
  computed: {
    value() {
      return this.num ** 4;
    },
    totalPrice() {
      return this.num * this.price;
    },
    reverseNews() {
      let news = this.news
      return news.reverse()
    }
  },
};
</script>

<style>
</style>