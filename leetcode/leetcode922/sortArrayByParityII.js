/**
 * @param {number[]} A
 * @return {number[]}
 */

 //遍历一遍数组把所有的偶数放进 ans[0]，ans[2]，ans[4]，依次类推。
// 再遍历一遍数组把所有的奇数依次放进 ans[1]，ans[3]，ans[5]，依次类推。
var sortArrayByParityII = function(A) {
  const n  = A.length;
      const ans = new Array(n);
      let i = 0;
      for (const x of A) {
          if (!(x & 1)) {
              ans[i] = x;
              i += 2;
          } 
      }
  
      i = 1;
      for (const x of A) {
          if (x & 1) {
              ans[i] = x;
              i += 2;
          }
      }
  
      return ans;
  };