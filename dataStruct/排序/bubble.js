let arr = [5, 4, 2, 4, 1]

// 思想: 从第一个元素开始重复比较相邻的两项，若第一项比第二项大就交换位置
// let bubble = function (arr) {
//   // let temp = 0
//   let j = 0
//   while (j < arr.length ) {
//     for (let i = 1; i < arr.length - j ; i++) {
//       if (arr[i] > arr[i - 1]) {
//         continue
//       }
//       // let temp = arr[i]
//       // arr[i] = arr[i - 1]
//       // arr[i - 1] = temp
//       [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
//     }
//     j++
//   }
//   return arr
// }



// 优化版
let bubble2 = function (arr) {
  let j = 0
  while (j < arr.length ) {
    let flag = false
    for (let i = 1; i < arr.length - j ; i++) {
      if (arr[i] > arr[i - 1]) {
        continue
      }
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
      flag = true
    }
    j++
    if(flag == false) return arr
  }
  return arr
}

console.log(bubble2(arr));