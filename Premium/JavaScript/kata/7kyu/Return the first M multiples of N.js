/**Implement a function, multiples(m, n), which returns an array of the first 
 * m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)

should return

[5.0, 10.0, 15.0]

Fundamentals
Mathematics
Algorithms */

const multiples = (m,n)=>{
    // array to hold multiples of n
    let multi = [];

    for(let i = 1; i <= m; i++) {
        multi.push(n * i);
    }
    return multi;
    
}


console.log(multiples(3,5));