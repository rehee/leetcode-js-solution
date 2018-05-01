var searchInsert = function(nums, target) {
    let index = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }
        if(nums[i]>target){
            return i;
        }
    }
    return nums.length;
};