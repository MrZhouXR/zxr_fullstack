/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
 const res = []
 // 初始化双端队列
 const deque = []
 for (let i = 0; i < len; i++) {
   while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
     deque.pop()
   }
   deque.push(i)
   // 当对头的元素索引已经出现在滑动窗口之外
   while (deque.length && deque[0] <= i - k) {
     deque.shift()
   }
   if (i >= k - 1) {
     res.push(nums[deque[0]])
   }
 }
 return res
};