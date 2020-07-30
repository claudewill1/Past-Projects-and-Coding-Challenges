var countBits = function(n){
    //base case
    //if n  is zero return zero
    if (n == 0){
        return 0;
    } else {
        return (n & 1)+ countBits(n >> 1);
    }
}