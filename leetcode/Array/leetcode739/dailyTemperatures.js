/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let count = 0 // 距离比当前下标大的数的距离
  let arr = []
  let i = 0
  while (i < T.length) {
      if (T[i + 1] > T[i]) { // 如果下一个值比当前值大，就push进arr中，并结束当前循环进入下一次循环
          arr.push(1)
          i++
          continue
      }
      while (count < T.length - i) { // 找出比当前大的温度的距离
          count++ 
          if (T[i + count] > T[i]) { // 如果找到就将countpush到数组中
              arr.push(count)
              count = 0
              break
          }
      }
      // 如果没有找到说明该值比后面所有值大，就把 0 放进数组中
      if(count != 0 || (count != 0 && T[i+1] == T[i])) {
          arr.push(0)
          count = 0
      }
      i++
  }
  return arr
};