/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  for(let i = 0; i < numRows; i++) {
      let r = []
      r[0] = 1
      r[i] = 1
      if(i > 1) {
          for(let j = 1; j < i; j++) {
              r[j] = res[i-1][j-1] + res[i-1][j]
          }
      }
      res.push(r)
  }
  return res
};