/**
 * @param {number[]} nums
 * @return {number}
 */

 // 解题思路：通过计算重复元素的数量，最后用总长度 - 重复元素的数量 = 不重复元素的长度
var removeDuplicates = function(nums) {
  let count = 0 // 重复元素初始 0
  let len = nums.length // 数组长度
  for (let i = 1;i < len ; i++) { // 循环遍历 
    if (nums[i] != nums[i-1]) { // 如果相邻之间的元素不相等
      nums[i-count] = nums[i] // 就将当前元素的值向前移动 count 个重复元素的位置
    } else { // 如果相邻相等，就重复元素数量 + 1 
      count ++
    }
  }
  return len - count // 最后返回的即是不重复元素的长度
};