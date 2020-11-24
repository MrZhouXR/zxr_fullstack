// function.call() 没有参数，其中的this一定指向window，不论在哪里调用

Function.prototype.mycall = function(thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError('TypeError')
  }
  // 让 this 代表的这个函数去到 thisArg 里面生效
  const fn = Symbol('fn') // 防止 fn 这个单词被占用
  // 把 this 代表的这个函数所拥有的参数先取到
  const args = [...arguments].slice(1)
  thisArg = thisArg || window

  // 将调用 call 函数的方法添加到 thisArg 的属性中
  thisArg[fn] = this  
  const result = thisArg[fn](...args)
  delete thisArg[fn]

  return result
}

let b = {
  name: 'sss'
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}

a.mycall(b,1,2)