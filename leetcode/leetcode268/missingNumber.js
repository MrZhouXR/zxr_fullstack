/**
 * @param {number[]} nums
 * @return {number}
 */

 // 解题思路：差值法
//  根据给定的 n 的值，循环遍历累加结果为 sum1
// 再根据给定的数组nums，循环遍历累加结果为 sum2
// 最后返回它们的差值即为 丢失的值
var missingNumber = function(nums) {
  let sum1 = 0;
  let sum2 = 0;
  let len = nums.length
  for (let i = 0;i < len + 1 ;i++) {
      sum1 += i
      sum2 += (nums[i] || 0)
  }
  return sum1 - sum2
};