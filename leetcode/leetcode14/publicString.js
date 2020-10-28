
var longestCommonPrefix = function(strs) {
  if (strs.length === 0 || strs == null)// 判断数组是否为空或者长度为0，满足的话就返回空
      return ""
  let ans = strs[0]// 定义一个ans，初始化
  for (var i = 1; i < strs.length; i++){ //循环遍历strs数组 
      let j = 0
      for(;j < ans.length && j <strs[i].length; j++){ // 循环遍历strs[i]和ans
          if (ans.charAt(j) !== strs[i].charAt(j)) break //判断ans和strs[i]中下标为 j 的值是否相等
      }
      ans = ans.substring(0,j)//重新赋值公共字符串
      if (ans === "")
          return "" 
  }
  return ans
};