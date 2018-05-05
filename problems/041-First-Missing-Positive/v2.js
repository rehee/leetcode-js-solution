var firstMissingPositive = function(nums) {
    return test(nums);  
  };
  
  function test(nums) {
      let min = 1;
      while(true){
          if(nums.indexOf(min)==-1){
              return min;
          }
          min++;
      }
  }