var removeDuplicates = function(nums) {
    var list = [];
    var temp = null;
    for(let item of nums){
        if(temp == null){
            temp = item;
            list.push(temp);
            continue;
        }
        if(temp < item){
            temp = item;
            list.push(item);
        }
    }
    var l = nums.length;
    for (var i = 0; i<l;i++ ){
        nums.pop();
    }
    for (var item of list){
        nums.push(item);
    }

    return nums.length;
};