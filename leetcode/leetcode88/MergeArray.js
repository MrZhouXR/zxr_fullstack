/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


// 解题思路：从后向前数组遍历。
// 设置两个指针 len1 和 len2，因为题中给的是两个有序数组，
// 所以 len1 指向的是数组 nums1 最大值的下标，同理len2 指向的是数组 nums2 最大值的下标，len 为数组nums1最后一个元素的下标
// 通过遍历比较 nums1[len1] 和 nums2[len2] 的值，来填充 nums1 最末尾的值
// 当遍历结束之后，若 nums2 还有数据未拷贝到 nums1 中，则将 nums2 中的所有数据全部拷贝到 nums1 数组的前面，最后得到最终数组

var merge = function(nums1, m, nums2, n) {
  let len1 = m -1
  let len2 = n -1
  let len = m + n -1
  while (len1 >= 0 && len2 >= 0) {
      nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
  }
  function newArray(num1,index,num2,index2,length) {
      num1.splice(index,length,...num2.slice(index2, length))
  }
  newArray(nums1 , 0 , nums2 , 0 , len2+1)
};