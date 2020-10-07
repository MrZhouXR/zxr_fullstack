//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//输入: [0,1,0,3,12]
//输出: [1,3,12,0,0]
//说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数


//解题思路：设定一个临时变量k=0，遍历数组nums，将非零元素移动到nums[k]位置，同时k++，而后将【k,….nums.size()】中的元素置零。
var moveZeroes = function(nums) {
    let k = 0;
   for(let i = 0; i < nums.length; i++){
       if(nums[i]){
           nums[k] = nums[i]
           k++
       }
   }
   for(let i = k; i<nums.length; i++){
       nums[i] = 0
   }
   return nums
};