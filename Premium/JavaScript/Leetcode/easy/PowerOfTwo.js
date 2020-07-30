const isPowerOfTwo = (n) => (n > 0) && ((n & (n - 1)) === 0);


console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(218));