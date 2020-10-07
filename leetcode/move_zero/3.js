//思路：
//设定一个临时变量k=0，遍历数组nums，将非零元素与之前的零元素进行交换，维护变量k的值。
var moveZero = function(nums){
    let k = 0;
    for(let i = 0; i<nums. length; i++){
        if(nums[i])
            if(k!=i){
                nums[k] = nums[i];
                nums[i] = 0;
                k++;
            }
            else{
                k++;
            }
    }
    return nums;
}