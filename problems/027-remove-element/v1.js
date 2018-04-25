
var removeElement = function(nums, val) {
    var list = nums.filter(b=>b!=val);
    nums.splice(0,nums.length);
    for(let i of list){
        nums.push(i);
    }
    return nums.length;
};