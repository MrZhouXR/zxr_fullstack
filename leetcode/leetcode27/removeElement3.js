/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 // 解题思路：从后往前开始遍历，如果nums[i]的值和 val 相等，就将数组最后一位删除
//  循环结束之后得到的新数组的长度即为不重复数组的长度
var removeElement = function(nums, val) {
  for (let i = nums.length; i--;) {
      if(nums[i] == val) {
        nums.splice(i , 1)  
      }
  }
   return  nums.length
};

