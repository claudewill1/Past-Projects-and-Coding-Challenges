const dirReduc = arr => {
    let stack = [];
    let top = stack[stack.length - 1];
    for(let i = 0; i < arr.length; i++)
    {
        if((top === 'north'.toUpperCase() && arr[i] === 'south'.toUpperCase())
        || (top === 'east'.toUpperCase() && arr[i]=== 'west'.toUpperCase())){
            stack.pop();
            stack.push(arr[i]);
        }
    }
    return stack;
}