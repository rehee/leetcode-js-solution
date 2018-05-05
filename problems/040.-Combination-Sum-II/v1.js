var combinationSum2 = function(candidates, target) {
    return test(candidates, target);
};

function test (candidates, target) {
  candidates.sort((a,b)=>a-b);
  let l = candidates.length;
  let result = {};
  let resultIndex = [];
  getList(target,candidates,[],result,[],resultIndex,0,l);
  return resultIndex.map(b=> result[b]);
}

function getList(target,list,temp,result,tempIndex,resultIndex,start,length) {
  for(let i = start; i<length;i++){
    let item = list[i];
    if(target > item) {
      temp.push(item);
      getList(target-item,list,temp,result,tempIndex,resultIndex,i+1,length)
        temp.pop();
    }else if(target == item){
      temp.push(item);
      let answers = temp.join();
      if(resultIndex.indexOf(answers)>=0){
          temp.pop();
          continue;
      }
      resultIndex.push(answers);
      result[answers] = temp.map(b=>b);
      temp.pop();
      
    }else {
      return;
    }  
  }
}