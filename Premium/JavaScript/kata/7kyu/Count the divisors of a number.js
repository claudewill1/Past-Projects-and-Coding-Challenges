const getDivisorsCnt=(n)=>{
    var limit = n;
    var numOfDivisors = 0;

    if(n === 1) return 1;

    for(var i = 1; i < limit; i++){
        if(n % i == 0){
            limit = n / i;
            if(limit != i){
                numOfDivisors++;
            }
            numOfDivisors++;
        }
    }
    return numOfDivisors;
}