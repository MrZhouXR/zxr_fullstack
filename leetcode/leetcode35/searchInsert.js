/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 解题思路： 二分法
// 具体参考力扣题解
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = nums.length;
  while(left <= right) {
      let mid = ((right - left ) >> 1) + left
      if (target <= nums[mid]) {
          ans = mid
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  return ans
};