// 1. 借助call实现: 这样写的时候子类虽然能够拿到父类的属性值，但是问题是父类原型对象中一旦存在方法那么子类无法继承
function Parent1() {
  this.name = 'parent1'
  function age() {
    this.age = 30
  }
}

function child1() {
  Parent1.call(this)
  this.type = 'child'
}

console.log(new child1);

// 2. 原型链继承: 两个实例使用的是同一个原型对象。只改变了s1的play属性，s2也跟着变了
function Parent2() {
  this.name = 'parent2';
  this.play = [1, 2, 3]
}
function Child2() {
  this.type = 'child2';
}
Child2.prototype = new Parent2();

console.log(new Child2());

var s1 = new Child2()
var s2 = new Child2()
s1.play.push(4)
console.log(s1.play);
console.log(s2.play);

// 3. 组合继承之最优解: 寄生组合继承
function Parent3() {
  this.name = 'parent5';
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
