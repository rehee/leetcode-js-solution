var strStr = function(haystack, needle) {
    if(typeof needle == 'undefined' || needle == null || needle == ''){
        return 0;
    }
    let l = haystack.length;
    let ll = needle.length;
    if(ll==l){
        return haystack==needle?0:-1;
    }
    for(let i = 0;i<l-ll+1;i++){
        if(haystack.substring(i,ll+i)==needle){
            return i;
        }
    }
    return -1;
};