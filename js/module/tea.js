// 1. 把水煮开
// 2. 沸水浸泡茶叶
// 3. 茶水倒进杯子
// 4. 加柠檬
//构造函数
var Tea = function(type) {
  this.type = type
}

//原型属性定义方法
Tea.prototype.boilWater = function() {
  console.log('把水煮开');
}
Tea.prototype.WashTea = function() {
  console.log('沸水浸泡茶叶');
}
Tea.prototype.pureTea = function() {
  console.log('茶水倒进杯子');
}
Tea.prototype.addLemon = function() {
  console.log('加柠檬');
}

//原型初始化定义方法
Tea.prototype.init = function() {
  this.boilWater()
  this.WashTea()
  this.pureTea()
  this.addLemon()
}

//实例化对象
var oneTea = new Tea('普洱')
oneTea.init()
