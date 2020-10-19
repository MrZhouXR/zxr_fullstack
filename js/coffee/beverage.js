var Beverage = function() {
  // this.type = type
  // this.condiments = condiments
}
Beverage.prototype.boilWater = function () {
  console.log('boil the water');
}

// 冲泡 空的方法
Beverage.prototype.brew = function() {
  // return '沸水冲泡' + this.type
}

// 倒进杯子 空的方法
Beverage.prototype.pureInCup = function() {
  // return '倒' + this.type + '进杯子' 
}

// 添加 空的方法
Beverage.prototype.addCondiments = function() {
  // return  '添加' + this.condiments
}

// 倒进杯子 空的方法
Beverage.prototype.init = function() {
  this.boilWater()
  this.brew()
  this.pureInCup()
  this.addCondiments()
}

var Coffee = function() {

}
//原型继承
Coffee.prototype =  new Beverage()

Coffee.prototype.brew = function() {
  console.log('沸水冲泡咖啡');
}

Coffee.prototype.pureInCup = function() {
  console.log('把咖啡倒进杯子');
}

Coffee.prototype.addCondiments = function() {
  console.log('加糖和牛奶');

}




var coffee = new Coffee()
coffee.init()
// var coffee = new Beverage('咖啡') 
// var tea = new Beverage('茶')