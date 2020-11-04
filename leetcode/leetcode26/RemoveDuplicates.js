/**
 * @param {number[]} nums
 * @return {number}
 */


 // 解题思路：双指针法
 // 给定一个重复元素且是第一次出现的位置指针为 j ，数组遍历从 i = 1 开始
 // 当且仅当遇到下一个不重复的元素时，该位置指针才更新为下一个元素
 // 否则位置不动，继续遍历
 // 最后返回位置指针的长度 j + 1，因为 j 为下标，所以长度要+1 
var removeDuplicates = function(nums) {
  let j = 0
  let len = nums.length
  for (let i = 1;i < len ; i++) {
      if (nums[i] != nums[i-1]) {
          j++
          nums[j] = nums[i]
      }
  }
  return j + 1
};