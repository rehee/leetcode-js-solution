function test(n) {
    var closeMark = {
      ')':true
    }
    var marks = {
      0:'(',
      1:')'
    }
    var list = [];
    getList(closeMark,marks,0,n*2+1,"",list,0,0)
  }
  
  function getList(
    mapper,marker,index,max,str,list,l,r
    ){
    if(index>=max){
      return;
    }
    index = index +1;
    if(index==0){
      getList(mapper,marker,index,max,marker[0],list,1,0);
      return;
    }
    for(let i = 0;i<2;i++){
      var mark = marker[i];
      var isClose = mapper[mark];
      var left = l;
      var right = r;
      if(isClose){
        if(r>=l){
          continue;
        }
        right++;
      }else{
        if((left-right)>=(max-index)){
          continue;
        }
        left++;
      }
      if(index==max-1){
        list.push(str+mark);
        continue;
      }else{
        getList(
          mapper,marker,index,max,str+mark,list,
          left,right);
      }
    }
  }
  