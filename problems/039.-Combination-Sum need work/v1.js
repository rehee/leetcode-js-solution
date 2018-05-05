var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    return test(candidates,target);
};
function test(candidates, target) {
  let result = [];
  let resultMapper = [];
  let temp = [];
  while(true) {
    let inner = [];
    let innerMapper = [];
    let breakOut = false;
    if(temp.length == 0){
      for(let item of candidates) {
        if(item > target){
          break;
        }
        if(item < target){
          inner.push([item]);
        }
        if(item == target){
          result.push([item]);
          resultMapper.push([item].join());
        }        
        
      }
        if(inner.length==0){
            break;
        }
      temp = inner;
      continue;
    }
    
    for(let p of temp) {
        
      let sum = 0;
      for(let s of p){
        sum = sum + s;
      }
        
      for(let item of candidates) {
          
        let thatSum = sum + item;
        if(thatSum > target) {
            if(item == candidates[0]){
               breakOut = true;
            }
          break;
        }
        let that = p.map(b=>b);
        that.push(item);
        that.sort((a,b)=>a-b);
        let thatMapper = that.join();
        if(thatSum == target){
          if(resultMapper.indexOf(thatMapper)>=0){
            break;
          }
          result.push(that);
          resultMapper.push(thatMapper);
          break;
        }
        if(innerMapper.indexOf(thatMapper)>=0){
          continue;
        }
          
        inner.push(that);
        innerMapper.push(thatMapper);
      }
        
    }
      temp = inner;
    if(inner.length == 0){
      break;
    }
  }
  return result;
}