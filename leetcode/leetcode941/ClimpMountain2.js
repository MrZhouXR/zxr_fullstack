/**
 * @param {number[]} A
 * @return {boolean}
 */

 // 解题思路：线性扫描
 // 从左往右扫描，当 A[i] < A[i+1] 时，设定此时的 i 为最高峰
 // 此时再判断该最高峰是否为数组的两端，如果是，就返回false；否则就继续执行
 // 这时就应该下山了，如果 A[i] > A[i+1] 满足的话，就 i++
 // 最后得到一个 i 的值，看 i 是否等于 N - 1即数组最末端
 //  如果相等，就返回true，否则返回false 
var validMountainArray = function(A) {
  const N = A.length
  let i = 0
  while (i + 1 < N && A[i] < A[i+1] ) {
      i++
  }
  if (i == 0 || i == N - 1) {
      return false
  }
  while (i + 1 < N && A[i] > A[i+1] ) {
      i++
  }
  return i === N - 1
};