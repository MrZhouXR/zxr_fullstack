/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let list = []
  let pre = 0
  for(let i = 0; i < A.length; i++) {
      pre = ((pre << 1) + A[i]) % 5
      list.push(pre === 0)
  }
  return list
};