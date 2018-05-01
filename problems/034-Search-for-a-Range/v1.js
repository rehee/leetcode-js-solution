var searchRange = function(nums, target) {
    let left = -1;
    let right = -1;
    let length = nums.length;
    
    for(let i=0;i<length;i++){
        if(target == nums[i]){
            left = i;
            break;
        }
    }
    for(let i=length-1;i>=left;i--){
        if(target == nums[i]){
            right = i;
            break;
        }
    }
    return [
        left,right
    ]
};