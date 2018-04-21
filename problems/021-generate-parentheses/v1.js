function test(n) {
    
    var closeMark = {
      ')':true
    }
    var marks = {
      0:'(',
      1:')'
    }
    var markLength = 2;
    var length = n * 2;
    var cache = {};
    var result = [];
    for(var i = 0;i<length;i++) {
    var node = [];
    if(i==0){
      let item = {
        value: marks[0],
        list: [],
        parent: "",
        cache: ['(']
      };
      cache[i]=[];
      cache[i].push(item);
      continue;  
    }else {
      node = cache[i-1];
      cache[i] = [];
      for(let n of node){
        for(let m=0;m<markLength;m++){
          let nMark = marks[m];
          let isClose = closeMark[nMark];
          let nCache = n.cache.map(b=>b);
          if(isClose){
            if(n.cache.length==0){
              continue;
            }
            nCache.pop();
          }else {
            if(nCache.length>=length-i){
              continue;
            }
            nCache.push(nMark);
          }
          let nItem = {
              value: nMark,
              list: [],
              parent: n.parent + n.value,
              cache: nCache,
            };
          cache[i].push(nItem);
          if(i==length-1){
            result.push(nItem.parent+nItem.value);
          }
        } 
    
      }
      
    }  
    
    
    }
    console.log(end.getTime()-start.getTime());
    }
    