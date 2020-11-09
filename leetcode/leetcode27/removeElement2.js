/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//  解题思路：拷贝覆盖
// 遍历数组，给定一个下标为count，里面的每个元素为num
// 如果num 与给定的值不相等，就将这个num 赋给nums[count]，count自+1
// 如果相同的话则跳过该数字继续下一次循环
// 最后输出count的值即为新数组的长度
var removeElement = function(nums, val) {
  let count = 0
  for (let num of nums ) {
       if(num != val){
          nums[count] = num
          count++
       }
  }
     
  return  count
};