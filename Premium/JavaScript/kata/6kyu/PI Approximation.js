const iterPi = (epsilon)=>{
    
    let pi = 0;
    let factor = 1;
    let divider = 1;
    num_iterations = 0;
    while((Math.abs(pi*4-Math.PI))>epsilon){
        
        pi += (1/divider*factor);
        divider += 2;
        factor *= -1;
        num_iterations += 1;
    }
    
    return [num_iterations, (Math.round((pi*4)*10000000000)/10000000000)];
}


console.log(iterPi(0.00001))