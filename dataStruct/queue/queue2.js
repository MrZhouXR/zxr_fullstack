// 双端队列  就是允许在队列的两端进行插入和删除的队列


// 既允许使用pop，push同时又允许使用shift，unshift的数组

// const queue = [1,2,3,4]
// queue.push(1)
// queue.pop()
// queue.shift()
// queue.unshift()

var maxSlidingWindow2 = function(nums, k) {
  const len = nums.length
  const res = [] // [3,3,5,5,6,7]
  // 初始化双端队列
  const deque = [] // [0] [1,2,3] [4] [4,5] [6] [7]
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
}