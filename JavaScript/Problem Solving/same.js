/** Write a function called same, which accepts two arrays. 
 * The function should return true if every value in the array has 
 * it's corresponding value squared in the second array.
 * The frequency of values must be the same
 */

const same = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i^2] === arr2[j]) {
                return true;
            }
        }
    }
}

console.log(same([1,2,3], [1,9]))