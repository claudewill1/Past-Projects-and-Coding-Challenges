const hamming=n=>{
    let seq = [],a,b,c;
    seq[0] = 1, a = b = c = 0;

    for(let i = 1; i < n; i++){
        seq[i] = Math.min(seq[a] * 2, seq[b] *3, seq[c] * 5);
        if(seq[i] === seq[a] * 2) a++;
        if(seq[i] === seq[b] * 3) b++;
        if(seq[i] === seq[c] * 5) c++;
    }

    return seq[n - 1];
} 