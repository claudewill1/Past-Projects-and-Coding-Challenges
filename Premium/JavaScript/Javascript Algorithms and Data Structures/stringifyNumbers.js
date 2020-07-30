/**stringifyNumbers
 * Write a function called stringifyNumbers which takes in an object and finds all
 * of the values which are numbers and converts them to strings. Recursion
 * would be a great way to solve this.
 */

const stringifyNumbers = obj => {
    let newObj = {};
    for(let key in obj) {
        if(typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }

    }
    return newObj;
    
    
}


var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

stringifyNumbers(obj2)