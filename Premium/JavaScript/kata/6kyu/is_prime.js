
const isPrime = n => {
    if(isNaN(n)||!isFinite(n)||n%1||n<2) return false;
    if(n%2===0) return (n === 2);
    if(n%3===0) return (n===3);
    let m = Math.sqrt(n);
    for(let i = 5;i<=m; i+=6)
    {
        if(n%i===0) return false;
        if(n%(i+2)===0) return false;
    }
    return true;
}
let t0 = Date.now();
console.log(is_prime(2))
let t1 = Date.now();
console.log(`${t1-t0} milliseconds.`)
console.log(is_prime(4))
console.log(is_prime(17))