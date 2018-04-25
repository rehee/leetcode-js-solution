var findSubstring = function(s, words) {
    if(s=="" || words.length ==0){
        return [];
    }
    let l = s.length;
    let ll = 0;
    for(let item of words){
        ll = ll + item.length;
    }
    let count = [];
    // let w = [];
    // getList(words,w,"");
    // console.log(w);
    for(let i = 0;i<l-ll+1;i=i+1){
        let item = s.substring(i,ll+i);
        var result = getList(item,words);
        if(result){
            count.push(i)
        }
    }
    return count;
};

function getList(string,list){
    let s = string;
    let subList = list.map(b=>b);
    while(subList.length>0){
        let item = subList.pop();
        let noMatch = true;;
        for(let i = 0;i<subList.length + 1;i++){
            let left = subList.filter((b,index)=>index<i);
            let leftl = 0;
            for(let leftItem of left){
                leftl = leftl+leftItem.length;
            }
            let substring = s.substring(leftl,leftl+item.length);
            if(substring==item){
                s = s.substring(0,leftl) + s.substring(leftl+item.length,s.length);
                noMatch = false;
                break;
            }
        }
        if(noMatch){
            return false;
        }
    }
    return true;
}