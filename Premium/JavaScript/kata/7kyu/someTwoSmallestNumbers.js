function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let res = numbers.sort((a,b)=> a-b).slice(0,2);
  return res[0]+res[1];
}