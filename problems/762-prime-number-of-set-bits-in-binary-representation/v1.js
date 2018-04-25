var countPrimeSetBits = function(L, R) {
    var count = 0;
 for(let i = L; i< R+1;i++){
     if(isPrime(i)){
         count++;
     }
 }
    return count;
};
function isPrime(L){
    var l = (L>>>0).toString(2).replace(/0/g,'');
    var c= l.length;

    for(let i =2;i<c;i++){
        if(c%i==0){
            return false;
        }
    }
    if(c==1){
        return false;
    }
    return true;
}