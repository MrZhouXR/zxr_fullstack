Array.prototype.myMap = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  let myarr = []
  for(var i = 0 ; i < arr.length; i++) {
    myarr.push(fn.call(context, arr[i], i , this))
  }
  return myarr
}

let a = [1,2,3,4]
let b = a.myMap((item,index,a) => a[index] > 0)
console.log(b);