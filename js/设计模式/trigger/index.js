var saleOffices = {} //售楼处  发布者  楼价多少
// 如果售楼处  有消息出来的时候, 
// addEventListener  如何实现？
saleOffices.clientList = []; //买房的人  订阅者  
saleOffices.listen = function(fn) {
  this.clientList.push(fn)
}
saleOffices.trigger = function (price, squereMeter) {
  for (var i = 0; i < this.clientList.length; i++){
    console.log(this.clientList[i]);
    this.clientList[i](price, squereMeter);
  }
}
saleOffices.listen(
  function (price, squereMeter) {
  if (price > 18000) {
    console.log('买它');
  }else {
    console.log('只买贵的');
  }
  console.log('价格：' + price);
  console.log('面积：' + squereMeter);
})

saleOffices.listen(
  function (price, squereMeter) {
  if (squereMeter > 120) {
    console.log('买它');
  }else {
    console.log('内心的宽广有地方安放');
  }
  console.log('价格：' + price);
  console.log('面积：' + squereMeter);
})
// click

saleOffices.trigger(20000,88)

// documnent.body   callback