/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    return test(height);
    
};

function test(height){
   var raw = [] = Array.from(height);
    var raw2 = [];
    for(let i = 0;i<raw.length;i++){
        raw2.push(raw[i])
    }
  raw2.sort((a,b)=>a-b);
  let maxHeight = raw2[raw2.length-2];
  let water = 0;
  for(let level = 0;level <maxHeight;level ++){
     
      water=water+helper(level,raw);   
  }
    return water;
}

function helper(level,list){
  let start = -1;
  let finish = -1;
  let count = 0;
  for(let i = 0;i<list.length;i++){
    let tap = list[i];
      
    if(tap>level){
        
      if(start ==-1){
        start = i;
        continue;
      }
        
      if(finish == -1){
         
         finish = i;
         count = count + (finish-start-1);
         start = finish;
         finish = -1;
         continue;
      }
    }
  }
  return count;
}