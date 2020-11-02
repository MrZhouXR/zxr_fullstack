/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 解题思路:
/* 先使用 Set() 给两个数组去重 ，得到set1 和 set2，再将set1 和set2 传给set_intersection
再循环遍历两个数组中长度小的那个数组 set1 
如果set2 中 has 数组 set1 中的值，就将这个值添加进另外一个新的数组 intersection 中
最后返回  intersection 数组
  ... intersection 表示将数组内元素展开
  ... 是展开运算符
*/


var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1) 
  const set2 = new Set(nums2)
  return set_intersection( set1, set2)
};

const set_intersection = function (set1, set2) {
  if (set1.size > set2.size) {
      return set_intersection(set2, set1)
  }
  const intersection = new Set()
  for (let num of set1) {
      if (set2.has(num)) {
          intersection.add(num)
      }
  }
  return [...intersection]
}