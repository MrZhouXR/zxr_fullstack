//创建一个临时数组nonZeroElements，遍历nums，
//将nums中非0元素赋值到nonZeroElements中，
//而后按顺序将nonZeroElements赋值到nums上，未遍历的元素置0；
var movezero = function(nums){
    let nonZeroElments = [];
    let k = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i]){
            nonZeroElments[k++] = nums[i];
        }
    }
    for(let i = 0; i<nums.length; i++){
        nums[i] = nonZeroElments[i];
    }
    for(let i = nonZeroElments.length; i < nums.length;i++){
        nums[i] = 0;
    }
    return nums;
}