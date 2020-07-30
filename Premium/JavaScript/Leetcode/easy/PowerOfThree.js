const isPowerOfThree = n => ((n <= 0) || (1162261467 % n !== 0))? false : true;



console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(45))