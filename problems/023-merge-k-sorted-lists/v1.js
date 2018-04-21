
var mergeKLists = function(lists) {
    var list = [];
    for(let item of lists){
        getList(item,list);
    }
    list.sort((a,b)=>a-b);
    return list;
};

function getList(input,list){
  if(input==null){
    return;
  }
  if(input.next!=null){
    getList(input.next,list);
    list.push(input.val);
    return;
  }
  list.push(input.val);
  return;
}
