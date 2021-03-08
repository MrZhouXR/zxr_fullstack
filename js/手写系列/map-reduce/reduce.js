Array.prototype.myReduce = function(fn, initialValue) {
  let arr = Array.prototype.slice.call(this)
  let res,startIndex
  res = initialValue ? initialValue : arr[0]
  startIndex = initialValue ? 0 : 1
  for(var i = startIndex; i < arr.length; i++) {
    res = fn.call(null, res, arr[i], i , this)
  }
  return res
}

let a = [1,2,3,4]
let b = a.myReduce((acc,cur) => {
  return acc + cur
})
console.log(b);