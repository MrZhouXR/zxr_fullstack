/**
 * @param {number[]} A
 * @return {boolean}
 */

 // 解题思路：
 // 给定两个指针，i 表示 数组 的头部，j 表示数组的尾部
 // 两个指针同时往山上爬，如果 A[i] < A[i+1] 就 i++
 // 如果 A[j] < A[ j-1 ] 就 j--
 // 最后再判断双方到达山峰时是否相等，且左指针不在头部，尾指针不在尾部，如果 左右山峰相同，就返回true；否则，返回false
var validMountainArray = function(A) {
  const N = A.length
  let i = 0, j = N - 1
  while (i + 1 < N && A[i] < A[i+1] ) {
      i++
  }
  while (j > i  && A[j] < A[j - 1]) {
      j--
  }
  if (i != 0 && i == j && j != N-1) {
      return true
  }
  return false
};