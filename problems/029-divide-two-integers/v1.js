var divide = function(dividend, divisor) {
    let result = dividend/divisor;
    if(result<0){
        result = Math.ceil(result);
    }else{
        result = Math.floor(result);
    }
    if(result>2147483647){
        result = 2147483647;
    }
    if(result<-2147483648){
        result = -2147483648;
    }
    return result;
};