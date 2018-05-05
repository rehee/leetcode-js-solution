var trap = function(height) {
    let ans = 0;
    let size = height.length;
    for (let i = 1; i < size - 1; i++) {
        let max_left = 0, max_right = 0;
        for (let j = i; j >= 0; j--) { //Search the left part for max bar size
            max_left = Math.max(max_left, height[j]);
        }
        for (let j = i; j < size; j++) { //Search the right part for max bar size
            max_right = Math.max(max_right, height[j]);
        }
        ans = ans + Math.min(max_left, max_right) - height[i];
    }
    return ans;
    
};