// 插入排序
// 思想：当前元素前面的序列是有序的，基于这个前提，从后往前去寻找当前元素在前面那个序列里的正确位置


// 1. 当前元素前面的那个序列是有序的
// 2. 正确位置指的是，所有当前元素前面的数都不大于它，所有当前元素后面的数都不小于它
// 3. 在有序序列里定位元素的位置时，是从后往前定位的，只要发现一个比当前元素大的值，就需要为当前元素腾位置

let insert = function(arr) {
  let len = arr.length
  let temp
  for(let i = 1; i < len; i++) {
    let j = i // 用来帮助temp寻找自己应该有的定位
    temp = arr[i]
    // 判断 j 前面一个元素是否比temp大
    while(j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp

  }
  return arr
}

let arr = [5,3,4,2,1]
console.log(insert(arr));