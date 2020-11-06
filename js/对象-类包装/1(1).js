var person = {
  name: 'jiushen',
  age: 20,
  sex: 'boy',
  drink: function() {
    console.log('I am drinking');
    this.health++
  },
  smoke: function() {
    console.log('I am smoking! huazi');
    this.health--
  },
  health: 100
}
// person.health++
// console.log(person.health);


// person.smoke()
// person.drink()
// person.drink()
// console.log(person.health);

//  增
person.boyfriend = 'mrZhou'
// console.log(person);

// 查
// console.log(person.sex);

// 改
person.sex = 'girl'
// console.log(person.sex);

// 删
delete person.name
delete person.sex
// console.log(person.sex); // 访问对象中没有的属性，为undefined

// console.log(cat);



// 对象的创建
// 1. var obj = {}
// 2. 构造函数
      // 1）系统自带的构造函数 Object()
      // 2）自定义


function Car(color) {
  this.name = 'BMW'
  this.height = '1400'
  this.long = '4900'
  this.weight = 1000

  this.health = 100
  this.run = function() {
    this.health--
  }
  this.color = color
}
var car = new Car('black')
var car1 = new Car('white')

car.name = '红旗'
car1.name = '劳斯莱斯'

car.run()
console.log(car1);