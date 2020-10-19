// talk in js
//es5 类 大写的函数  
// 1. 把水煮开
// 2.用沸水冲泡咖啡
// 3.把咖啡倒进杯子
// 4.加糖和牛奶
//constructor  prototype
//类 抽象 ， 实例化 对象
//封装类的 
var Coffee = function(type) {
  //this指向对象{} ，new之后指向实例
  this.type = type
  

}


//原型方法
Coffee.prototype.boilWater = function() {
  console.log('把水煮开');
}
Coffee.prototype.brewCoffeeGriends = function() {
  console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pureInCup = function() {
  console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMilk = function() {
  console.log('加糖和牛奶');
}

//原型方法初始化
Coffee.prototype.init = function() {
  this.boilWater()
  this.brewCoffeeGriends()
  this.pureInCup()
  this.addSugarAndMilk()
}

var oneCoffee = new Coffee('猫屎咖啡')//实例化对象
console.log(oneCoffee.type);
console.log(Coffee.prototype.__proto__.__proto__);
// console.log(oneCoffee.__proto__);
// oneCoffee.init()
// console.log(coffee.prototype.constructor == coffee); 
// class  js 类 怎么构建起来的 = 火车头 构造 函数（首字母大写） +
// 好多节车厢 prototype  
// 构造函数和普通函数的区别是 new
// 函数是一等对象
// JS并没有类，只有对象  new 空对象{}     任何函数都有一个prototype属性  任何一个对象都有一个__proto__属性
// 原型链  oneCoffee.__proto__ == Coffee.prototype,Coffee.prototype.__proto__ == Object null prototype

