const lengthOfLIS = function(nums) {
  const len = nums.length
  if (!len) {
    return 0
  }
  // 初始化数组里面的每一个索引的状态值
  const dp = (new Array(len)).fill(1) [1, 1, 2, 2, 2, 1, 1, 1]
  // 初始化最大上升子序列的长度为1
  let maxLen = 1
  // 从第二个元素开始，遍历整个数组
  for (let i = 1; i < len; i++) {
    // 每遍历一个新元素，都要回头看，看看能不能延长原有的上升子序列
    for (let j = 0; j < i; j++) {
      // 如果遇到一个比当前值小的值，则意味着喻导了一个可以延长上升子序列，故更新当前元素索引对应的状态
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i]
    }
  }

  return maxLen
}