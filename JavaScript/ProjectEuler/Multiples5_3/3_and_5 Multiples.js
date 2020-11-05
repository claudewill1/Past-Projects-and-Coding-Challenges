
//function finds the multiples of 3 and 5 within a given number
//then returns the sum of all of those numbers
const multiples=num=>{
    let sum = 0;
    for(let i = 1; i < num;i++){
        if(i%3===0 || i%5===0){
            sum += i;
        }
        
    }
    return sum;
}

console.log(multiples(1000));