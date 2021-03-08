let b = {
  name: 'sss'
}
function a(e, r) {
  this.sex = '1'
  console.log(e + r ); // 7
  console.log(this.name ); // undefined
}

Function.prototype.mybind = function(thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError('TypeError')
  }
  const args = [...arguments].slice(1)
  thisArg = thisArg || window
  console.log(thisArg );// {name: 'sss'}
  const self = this
  const nop = function() {}
  // 绑定函数
  const bound = function() {
    return self.apply(this instanceof nop? this:thisArg,args)
  }

  if (this.prototype) {
    nop.prototype = this.prototype
  }
  bound.prototype = new nop()

  return bound


}


let res = a.mybind(b,3,4)
let arr = new res()
console.log(arr ); // a { sex: '1'}