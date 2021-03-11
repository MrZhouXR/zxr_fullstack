# 谈谈变量提升


# bind、call、apply区别


# bind实现
1. 不传参数的话，默认指向window
2. 返回一个函数
3. 返回的函数如果被new的话
4. 参数是任意个
bind.js

# call、apply实现


# 简单说一下原型链
每个函数都有 prototype 属性，该属性指向原型。原型就是创建该函数的工厂。
每个对象都有 __proto__ 属性，指向了创建该对象的构造函数的原型。其实这个属性指向的是
[[prototype]] ，但是 [[prototype]] 是内部属性，我们访问不到，所以用__proto__来访问
对象可以通过 __proto__ 来寻找不属于该对象的属性， __proto__ 将对象链接起来组成了原型链

# 怎么判断对象类型
instanceof 
Object.prototype.toString.call()   [object, Type]

# 箭头函数的特点
箭头函数没有this，箭头函数里面的this取决于他外面的第一个不是箭头函数的函数的this

# async await的优缺点
先描述 async await 作用，和为什么有这个作用；
优势在于处理promise.then的调用链，代码更清晰
缺点是 await 会阻塞代码，滥用会导致性能问题


# generator 原理
generator.js


# promise


# == 和 === 区别，什么情况下用 ==
[] == ![]
[] == false
'' == false
0 == 0

# 浏览器的Eventloop 和 Node中的区别


#