// 思想： 循环遍历数组，每次都找当前范围内的最小值，把它放在当前范围的头部，然后缩小范围，直至数组完全有序为值

let select = function(arr) {
  // 用来缓存区间内最小值的索引
  let minIndex = 0
  for(let i = 0; i < arr.length - 1; i++) {
    minIndex = i

    for(let j = i ; j < arr.length ; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 如果minIndex对应的元素不是目前数组的头部元素，就交换位置
    if(minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    console.log(i,arr);
  }
  return arr
}

let arr = [5, 4, 2, 3, 1]
console.log(select(arr));