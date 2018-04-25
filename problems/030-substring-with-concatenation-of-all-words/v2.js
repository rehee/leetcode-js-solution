var findSubstring = function(s, words) {
    if(s=="" || words.length ==0){
        return [];
    }
    let l = s.length;
    let ll = 0;
    let mapper = {};
    for(let i = 0;i<words.length;i++){
        mapper[i] = words[i].length;
        ll = ll + mapper[i];
    }
    let count = [];
    var c = 0;
    for(let i = 0;i<l-ll+1;i=i+1){
        c++;
        let item = s.substring(i,ll+i);
        var result = getList(item,words,mapper);
        if(result){
            count.push(i)
        }
    }
    return count;
};

function getList(string,list,mapper){
    let s = string;
    
    for(let outI = 0;outI<list.length;outI++){
        let item = list[outI];
        let leftl = 0;
        let noMatch = true;
        for(let i = -1;i<list.length;i++){
            if(i==outI){
                continue;
            }
            if(i>=0){
                leftl = leftl + mapper[i];
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