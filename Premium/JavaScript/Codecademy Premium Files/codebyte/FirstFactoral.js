const firstFactoral = num => {
    let total = 1;
    for(let i = 1; i < num; i++){
        total *= (i+1);
    }
    num = total;
    return num;
}

console.log(firstFactoral(8))