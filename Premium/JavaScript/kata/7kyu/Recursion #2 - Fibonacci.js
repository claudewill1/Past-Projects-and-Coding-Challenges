/**##2 - Fibonacci number

In mathematical terms, the sequence f(n) of fibonacci numbers is defined by 
the recurrence relation

f(n) = f(n-1) + f(n-2)

with seed values

f(1) = 1 and f(2) = 1

#Your task

You have to create the function fibonacci that receives n and returns f(n). 
You have to use recursion.
Previous (Recursion #1 - Factorial)
Fundamentals
Recursion
Algorithms
Computability Theory
Theoretical Computer Science
Mathematics
Numbers */
const fibonacci = n => (n === 0) ? 0 : (n === 1) ? 1 : (fibonacci(n-1)+fibonacci(n-2));

console.log(fibonacci(4))