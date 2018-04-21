
function test(head){
  var list = [];
  getList(head,list);
  var length = list.length;
  if(length%2==1){
    length = length -1; 
  }
  for(let i = 0;i<length;i=i+2){
    let temp = list[i];
    list[i] = list[i+1];
    list[i+1] = temp;
  }
  return list;
}


function getList(head,list){
  if(head==null){
    return;
  }
  if(head.next!=null){
    list.push(head.val);
    getList(head.next,list);
    return;
  }
  list.push(head.val);
}