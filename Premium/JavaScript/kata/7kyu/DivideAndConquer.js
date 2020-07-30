const divCon = x => {
   let sum1 = 0;
   let sum2 = 0;
    let numArr = x.filter(c=> {
       return typeof(c) === 'number';
       
   });
   let strArr = x.filter(c=>{
       return typeof(c) === 'string';
   });
   let numArr2 = strArr.map(Number);
   sum1 = numArr.reduce((a,b)=> a+b,0);
   sum2 = numArr2.reduce((a,b)=> a+b,0);
   return sum1 - sum2;

}

let arr = ['1','20',1,'3',3,'5',2,'1',5];
console.log(divCon(arr));