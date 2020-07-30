/**nestedEvenSum
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers
 * in an object which may contain nested objects.
 */

 const nestedEvenSum = (obj) =>{
    let sum = 0 
    const helper = obj =>{
        //console.log(object); //For debug purposes
        let values = Object.values(obj);
        if(values[0] instanceof Object){
            helper(values[0]); //call recursively without returning
        } else if (values[0] % 2 === 0) {
            sum += values[0];
        }
        delete obj[Object.keys(obj)[0]];
        if (Object.keys(obj).length === 0){
            return;
        }
        return helper(obj);
    }
    helper(obj);
    return sum;
 }


 var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10