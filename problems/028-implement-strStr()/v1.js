var strStr = function(haystack, needle) {
    if(typeof needle == 'undefined' || needle == null || needle == ''){
        return 0;
    }
    return haystack.indexOf(needle);
};