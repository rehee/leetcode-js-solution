var reverseKGroup = function(head, k) {

  var list = [];

  var temp = [];

  getList(head,k,list,temp);

  return list;

};
function getList(head,length,list,temp){
  if(head==null){
    return;
  }
  temp.push(head.val);
  if(length>1){
    if(temp.length==length){
        temp.reverse();
        for(let i of temp){
      
          list.push(i);
    
        }
        temp = [];
    }
  }
  if(head.next!=null){
    getList(head.next,length,list,temp)
    return;
  }
  if(temp.length>0){
    for(let i of temp){
      
      list.push(i);
    
    }
  }
}