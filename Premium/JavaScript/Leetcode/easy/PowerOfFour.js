const isPowerOfFour = num => {
    // check if num passed in is 0 or null 
    // if true return false;
    if((num <= 0) || (num === null)) return false;

    // Binary representation of 3 -> '11'
    let chkbit = 3;

    // check if number has only one set bit
    if((num & (num - 1)) !== 0) return false;

    // left-shift the number by 2 bits and check
    // if last two bits are zeros
    while((chkbit & num) === 0) {
        num >>= 2;
    }
    // return true if the last bit is set.
    return ((num & chkbit) === 1);
}

console.log(isPowerOfFour(1))