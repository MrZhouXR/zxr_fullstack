function knapsack(n, c, w, value) {
  // 规划一个数组来动态的保存状态
  const dp = (new Array(c + 1)).fill(0) // [0, 0, 0, 0, 0, 0, 3]  [0, 0, 0, 0, 0, 0, 5]
  // res 用来记录所有的组合方案中的最大值
  let res = -Infinity
  for (let i = 0; i < n; i++) {
    for (let v = c; v >= w[i]; v--) {
      dp[v] = Math.max(dp[v], dp[v- w[i]] + value[i])

      if (dp[v] > res) {
        res = dp[v]  // 3
      }
    }
  }
  return res
}