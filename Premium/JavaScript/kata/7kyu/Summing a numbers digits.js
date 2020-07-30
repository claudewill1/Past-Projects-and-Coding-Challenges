const sumDigits = num=>{
    let arr = num.toString().split('');
    let sum = 0;
    arr.map(n=>{
        //first check if the input is Not-a-Number, if it is NaN return false
        // else if check if the number is greater than 0 if it is add the number
        // using parseInt() to sum, if the number is less than 0 you want to multiply
        // the num by one after parsing int before adding to sum
        isNaN(n) ? false : n >=0 ? sum+=parseInt(n): sum+=(parseInt(n)*-1);
    })
    return sum;
}

const sumDigits2=num=>Number(num.toString().split('').map(n=>{let sum; isNaN(n)?false:n>=0?sum+=parseInt(n):sum+=(parseInt(n)*-1)}))

console.log(sumDigits2(-32));