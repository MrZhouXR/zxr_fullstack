const subsets = function(nums) {
  // 初始化结果数组
  const res = [] 
  // 数组长度
  const len = nums.length 
  // 组合数组
  const subset = [] 

  dfs(0)
  // 定义dfs函数，入参是nums中的数字的索引
  function dfs(index) { // 找子集
    // 每次进来就更新一次结果数组
    res.push(subset.slice())
    // 从当前的数字索引开始，遍历nums
    for (let i = index; i < len; i++) {
      // 这是当前数字存在于组合中的情况
      subset.push(nums[i])
      // 基于当前数字存在组合中的情况，进一步递归
      dfs(i + 1)
      // 这是数字不存在于组合中的情况
      subset.pop()
    }
  }

  return res
}

