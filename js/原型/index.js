// Object.prototype   --- 原型
// console.log(Person.prototype); 函数被定义出来的那一刻就有的属性
// 1.js
// function Person(name) {
//   this.name = name
// }

// var person = new Person('xx')
// console.log(person);


// 2.js
// Car.prototype.name = "BMW"
// Car.prototype.length = 4.9
// Car.prototype.height = 1.4

// function Car(color, owner) {
//   this.color = color
//   this.owner = owner
// }

// var car = new Car()

// 3.js
// Person.prototype.lastName = '***'

// function Person(name) {
//   this.name = name 
// }

// var person = new Person('xx')

// person.lastName = ',,,' // 没有改动原型属性，只是在自己的对象中增加一个属性
// console.log(person);

// function Bus() {

// }


// Car.prototype = {
//   constructor: Bus
// }
function Car() {

}

var car = new Car()
console.log(car.constructor); // function Bus() {}
// constructor 指向的是 Car() ,目的是让Car() 构造出来的对象想要找到它自己的上级时能找到
// car.constructor