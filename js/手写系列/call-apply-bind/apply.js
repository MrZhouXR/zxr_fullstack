let b = {
  name: 'sss'
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}
// a.apply(b,[1,2]) // [obj,1,2]

Function.prototype.myapply = function(obj , arg) {
  if (typeof this !== 'function') {
    throw new TypeError('TypeError')
  }
  const fn = Symbol('fn')
  obj[fn] = this  
  const result = obj[fn](...arg)
  delete obj[fn]

  return result
}
a.myapply(b,[1,2])