/**Given a positive number n > 1 find the prime factor decomposition of n. 
 * The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

Fundamentals
Numbers
Mathematics
Algorithms
Utilities */
const primeFactors = (n) => {
    // create list to hold primes
    let primes = new LinkedList(0);

    for(let i = 2; i <= n; i++) {
        let count = 0;
        
        while(n % i === 0){
            count++;
            n /= i;
        }

        if (count === 0) continue;

        primes.push(count > 1 ? `(${i}**${count})` : `(${i})`);
    }
    return primes.join("");
}