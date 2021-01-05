const twoSum = function(nums,target){
  // let map = new Map()
  // let arr = []
  let arr = {}
  let len = nums.length

  for(let i = 0; i < len; i++) {
    if (arr[target - nums[i]] !== undefined) {
      return [arr[target - nums[i]],i] 
    } 
    arr[nums[i]] = i
  }

}