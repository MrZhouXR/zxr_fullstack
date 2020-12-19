let array = [1, [2, [3, 4]]]

// function flatten(arr) {
//   let newArr = []
//   for(let i = 0; i < arr.length; i++) {
//     if( Array.isArray(arr[i])) {
//       newArr = newArr.concat(flatten(arr[i]))
//     } else {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(flatten(array));

// function flatten(arr) {
//   return arr.reduce(function(pre,cur) {
//     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
//   },[])
// }


function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten(array));