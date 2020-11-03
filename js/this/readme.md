# 默认绑定
  this 所处的词法作用域在哪里生效了，this 的作用域就指向哪里

  在严格模式下，全局对象无法进行默认绑定，所以导致 this 只能绑定在 undefined 上

# 隐式绑定
  当一个函数引用有上下文对象时，隐式绑定的规则就会把函数调用中的this 绑定到这个上下文对象

  - 隐式丢失



# 显式绑定
  call  apply(可传数组)     bind
  如果 call 和apply ，bind的第一个参数写的是 null ， 那么this指向 window 对象