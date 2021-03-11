// [ [3, 2, 1].reduce(Math.pow), [].reduce(Math.pow) ] // 该数组展示结果？

let arr = [3]
let pow = function(a, b) { 
  console.log(a, b);
  return a ** b  // 9
}
arr.reduce(pow)

// [ 9, error ]
