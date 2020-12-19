let array = [1, 2, 3, 1, '1', '1']

// function myset(arr) {
//   let newArr = []
//   for(let i = 0; i < arr.length ; i++) {
//     if (newArr.indexOf(arr[i]) === -1){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(myset(array));


function myset(arr) {
  let res = []
  let arr = arr.sort()
  let seen;
  for (let i = 0; i < arr.length; i++) {
    if (!i || seen !== arr[i])
      res.push(arr[i])
    seen = arr[i]
  }
  return res
}