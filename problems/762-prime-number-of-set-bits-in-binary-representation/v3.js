var countPrimeSetBits = function(L, R) {
    var count = 0;
    var primes = {
        '2':true,
        '3':true,
        '5':true,
        '7':true,
        '11':true,
        '13':true,
        '17':true,
        '19':true,
        '23':true,
        '29':true,
        '31':true,
        '37':true,
        '41':true,
        '43':true,
        '47':true,
        '53':true,
        '59':true,
        '61':true,
        '67':true,
    };
 for(let i = L; i< R+1;i++){
     if(isPrime(i,primes)){
         count++;
     }
 }
    return count;
};
function isPrime(L,primes){
    let count = 0
    let temp = L;
    while(temp){
        count++;
        temp = temp &(temp-1);
    }
    if(primes[count]){
        return true;
    }
    return false;
}