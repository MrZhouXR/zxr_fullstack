Person.prototype.say = function() {
  console.log('ssss');
}
function Person(name, age) {
  this.name = name ,
  this.age = age
}

// let person = new Person('xx', '18') 
// console.log(person);



function myNew() {
  let obj = {} // 生成一个空对象
  // 取到外部传入的构造器
  let Constructor = Array.prototype.shift.call(arguments) // 取类数组中的头部元素
  // 实现继承
  obj.__proto__ = Constructor.prototype // 
  let result = Constructor.apply(obj, arguments) // 让构造函数上的显示原型给到对象的隐式原型

  return typeof result === 'object' ? result: obj // 返回这个对象
}

let person = myNew(Person,'xx',18)
console.log(person);