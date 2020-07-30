/**Binary Search Pseudocode
 * This function accepts a sorted array and a value.
 * 
 * Create a left pointer at the start of the array, and a
 * right pointer at the end of the array.
 * 
 * While the left pointer comes before the right pointer:
 *  Create pointer in the middle.
 *  If you find the value you want, return the index.
 *  If the value is too lorge, move the right pointer down.
 *  If you never find the value, return -1.
 */
/**Binary Search Exercise
 * Write a function called binarySearch which accepts a sorted array and a value and returns
 * the index at which the value exists. Otherwise, return -1.
 * 
 * Examples:
 *      binarySearch([1,2,3,4,5],2) // 1
 *      binarySearch([1,2,3,4,5],3) // 2
 *      binarySearch([1,2,3,4,5],5) // 4
 *      binarySearch([1,2,3,4,5],6) // -1
 *      binarySearch([5,6,10,13,14,18,30,34,25,37,40,44,64,79,
 *                    84,86,95,96,98,99],10) // 2
 *      binarySearch([5,6,10,13,14,18,30,34,25,37,40,44,64,79,
 *                    84,86,95,96,98,99],95) // 16
 *      binarySearch([5,6,10,13,14,18,30,34,25,37,40,44,64,79,
 *                    84,86,95,96,98,99],100) // -1
 */

 const binarySearch = (arr, val) => {
     let left = 0;
     let right = arr.length - 1;

     while(left <= right){
         let mid = Math.floor((left+right)/2);
         
         if(arr[mid] === val) {
             return mid;
         }

         if (val < arr[mid]) {
             right = mid - 1;
         } else {
             left = mid + 1;
         }
     }
     return -1;    
 }


console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([5,6,10,13,14,18,30,34,25,37,40,44,64,79,84,86,95,96,98,99],10)) // 2
console.log(binarySearch([5,6,10,13,14,18,30,34,25,37,40,44,64,79,84,86,95,96,98,99],95)) // 16
console.log(binarySearch([5,6,10,13,14,18,30,34,25,37,40,44,64,79,84,86,95,96,98,99],100)) // -1
