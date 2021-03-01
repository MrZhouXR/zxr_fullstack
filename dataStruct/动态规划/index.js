
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// n = 2
// 1 + 1
// 2

// n = 3
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// n = 4
// 1 + 1 + 1 + 1
// 1 + 2 + 1
// 2 + 1 + 1
// 2 + 2

// 给出达到某个目的的方案的个数

// 倒着分析问题：1.定位到问题的终点。2.站在终点的视角，来思考后退的可能性

// f(n) = f(n-1) + f(n-2)
// f(1) = 1
// f(2) = 2


// 记忆化搜索：(优化后的递归) --- 自顶向下
const f = []
const climbStairs = function(n) {
  if(n === 1) return 1
  if(n === 2) return 2
  // 递归计算
  if(f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return f[n]
}


// 动态规划：--- 自底向上
// f(n) = f(n-1) + f(n-2)
const climbStairs = function(n) {
  const f = []
  // 初始化的已知值
  f[1] = 1
  f[2] = 2

  for(let i = 3; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1]
  }
  return f[n]
}

console.log(climbStairs(4));


// 最优子结构
// 重叠子问题
