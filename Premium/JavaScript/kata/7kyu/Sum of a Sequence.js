/** Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, function should returns 0

Examples

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4

This is the first kata in the series:

1) Sum of a sequence (this kata)
2) Sum of a Sequence [Hard-Core Version]
Fundamentals
Numbers
Recursion
Algorithms
Computability Theory
Theoretical Computer Science
Loops
Control Flow
Basic Language Features*/


const sequenceSum = (start, end, step) => (start === end) ? end : (start > end) ? 0 : (start + sequenceSum(start += step, end, step))

console.log(sequenceSum(2,2,2)) // 2
console.log(sequenceSum(2,6,2)) // 12
console.log(sequenceSum(1,5,1)) // 15
console.log(sequenceSum(1,5,3)) // 5