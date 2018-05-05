/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 =='0'||num2 =='0'){
        return '0';
    }
  return `${test(num1,num2)}`;  
};


function test(num1,num2) {
  let mapper = {};
  mapper['0'] = 0;
  mapper['1'] = 1;
  mapper['2'] = 2;
  mapper['3'] = 3;
  mapper['4'] = 4;
  mapper['5'] = 5;
  mapper['6'] = 6;
  mapper['7'] = 7;
  mapper['8'] = 8;
  mapper['9'] = 9;
  
  let space = 4;
  let n1 = split(num1,space);
  let n2 = split(num2,space);
  
  let result = {};
  return multi(n1,n2,space,mapper,result);
}

function multi(n1,n2,space,mapper,result){
  let max = 0;
  for(let i1 = 0;i1<n1.length;i1++){
    for(let i2 = 0; i2<n2.length;i2++){
      let count = helper(mapper,n1[i1])*helper(mapper,n2[i2]);
      let currentMulti = i1+i2;
      if(currentMulti > max){
        max = currentMulti;
      }
      if(typeof result[currentMulti] == 'undefined'){
          result[currentMulti]=[];
      }
      result[currentMulti].push(count); 
    }
  }
  let finalResult = "";
  for(let currentIndex = 0;currentIndex<max+1;currentIndex++){
    let currentList = result[currentIndex];
    let currentSum = 0;
    for(let item of currentList){
      currentSum = currentSum + item;
    }
    
    let next = Math.floor(currentSum/(10**space));
    if(next>0 && currentIndex<max){
        if(typeof result[currentIndex + 1] == 'undefined'){
            result[currentIndex + 1] =[];
        }
      result[currentIndex + 1].push(next);
    }
    if(currentIndex<max){
      let resultLeft = currentSum % (10**space)
      if(resultLeft<1000 && resultLeft > 100){
        finalResult = `0${resultLeft}${finalResult}`
      }else if(resultLeft<100 && resultLeft>10){
        finalResult = `00${resultLeft}${finalResult}`
      }else if(resultLeft<10){
        finalResult = `000${resultLeft}${finalResult}`
      }else {
        finalResult = `${resultLeft}${finalResult}`
      }
      continue;
    }
    finalResult = `${currentSum}${finalResult}`
  }
  return finalResult;
}

function helper(mapper,num) {
  let length = num.length;
  let count = 0;
  for(let i = 0;i<length;i++) {
    count = count + (mapper[num[i]]*(10**(length-i-1))); 
  }
  return count;
}

function split(num,space){
  let n1 = [];
  for(let i = num.length -1;i>=0;i = i - space){
     n1.push(num.substring((i-space+1),i+1));
  }
  return n1;
}
