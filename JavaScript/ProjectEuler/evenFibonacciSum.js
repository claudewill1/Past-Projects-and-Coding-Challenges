//sumEvenFib function determines the sum of all even Fibonacci numbers
//that do not exceed 400 million
const sumEvenFib = num => {
    //holds previoius number
    let previous = 0;
    //holds current number, fibonacci sequence starts with 1
    let current = 1;
    //holds sum of even fibonnaci numbers
    let sum = 0;
    //holds the next number in the sequence
    let next;
    //loops through the current fib num up to the number which is less than or
    //equal to number passed in
    for(current; current <= num;){
        //the next number in the sequence is the current number plus the previous number
        //in this example the current number starts at 1 the previous number is 0
        // 0 + 1 = 1. next 1 + 1 = 2 + 1 = 3, etc.
        next = current + previous;
        //assignment the current number to previous for the next iteration
        previous = current;
        // determine if the current number is even if current modulo 2 equals 0
        // add current to sum
        if(current%2===0){
            sum += current;
        }
        //after checking if the current is even, assign next to current
        current = next;
    }
    //after iterating to and adding all nums which are even up to 'num' to sum
    //return sum
    return sum;
}

//log the result of evenFibonacciSum
console.log(sumEvenFib(4000000))