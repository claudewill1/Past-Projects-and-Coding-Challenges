const simpleAdding = num => {
    //create variable to hold total
    let total = 0;
    //use for loop to add each number from one up till num
    //to total, increment i by 1 each iteration
    for(let i = 1; i <= num; i++){
        total += i;
    }
    //assign total to num
    num = total;
    //return num
    return num;
}

console.log(simpleAdding(1000))