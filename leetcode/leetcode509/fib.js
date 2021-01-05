/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 方法一：递归
  // return n < 1 ? 0 : n < 3 ? 1 : fib(n - 1) + fib( n - 2 ) 

  // 方法二：动态规划
  // if (n < 2) {
  //     return n
  // }
  // let p = 0 , q = 1, r
  // for(let i = 2; i <= n; i++) {
  //     r = p + q
  //     p = q
  //     q = r
  // }
  // return r

  //方法三：滚动数组 
  // let dp = [0,1]
  // for(let i = 2; i <= n; i++) {
  //     let temp = dp[1]
  //     dp[1] = dp[0] + dp[1]
  //     dp[0] = temp
  // }
  // return n < 2 ? n : dp[1]

  // 方法四：状态机
  let s0 = 0, s1 = 1, i = 2
  while (i++ <= n)
    s1 = s0 + (s0 = s1)
  return n < 2 ? n : s1
};