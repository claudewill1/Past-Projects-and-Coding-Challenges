function range(start,end,step){
    let arr = [];
    for(arr; (end-start)*step > 0; start+=step){
        arr.push(start);
    }
    return arr;
}

console.log(range(1,10,2))