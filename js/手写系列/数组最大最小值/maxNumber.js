let array = [1,2,3,4,5,0,undefined]

// console.log(Math.max(...array));

/* function max(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
} */

//reduce
function max(pre,next){
  return Math.max(pre,next)
}
console.log(array.reduce(max));

//eval
let max = eval("Math.max("+array+")")

//apply
let max = Math.max.apply(null,array)
