
var merge = function (nums1, m, nums2, n) {
  let count = m + n;
  while (m > 0 && n > 0) {
    nums1[--count] = nums1[m - 1] < nums2[n - 1] ? nums2[--n] : nums1[--m];
  }
  // if (n > 0) {
  //   nums1.splice(0, n, ...nums2.slice(0, n));
  // }
  while (len2 >= 0) {
    nums1[len--] = nums2[len2--]
  }
}