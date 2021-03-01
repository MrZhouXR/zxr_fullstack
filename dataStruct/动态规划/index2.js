const coinChange = function(coins, amount) {
  // 用于保存每个目标总额对应的最小硬币个数
  const f = []
  // 已知
  f[0] = 0
  for (let i = 1; i <= amount; i++) {
    f[i] = Infinity
    // 遍历每个可用的硬币面额
    for (let j = 0; j < coins.length; j++) {
      // 目标总额大于硬币面额
      if (i - coins[j] >= 0) {
        f[i] = Math.min(f[i], f[i - coins[j]] + 1)
      }
    }
  }

  if (f[amount] === Infinity) {
    return -1
  }

  return f[amount]
}