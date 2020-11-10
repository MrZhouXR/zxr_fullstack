/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */


 // 解题思路：位数对齐法
//  从左往右开始对比，，
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.')//用split()方法将数组中的字符串分隔开
  let v2 = version2.split('.')
  let len = Math.max(v1.length, v2.length) // 比较两个数组的长度，去大的那个数组长度为len
  for(let i = 0 ;i < len; i++ ) { // 遍历循环
      let a = v1[i] ? v1[i] : 0; // 如果下标为 i 时，没有值就赋值为0，有值就为自身  
      let b = v2[i] ? v2[i] : 0;
       a = Number(a) // 将字符串转数字
       b = Number(b)
      if (a > b) { // 如果 a 大于 b ，就返回 1
          return 1
      } else if(a < b) { // 否则返回 -1 
          return -1
      }
  }
  return 0  // 如果相等返回0
};