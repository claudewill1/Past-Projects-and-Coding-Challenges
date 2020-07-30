/**Multiple Pointers - averagePair
 * Write a function called average pair. Given a sorted array of integers,
 * and a target average, determine if the array has a pair of values
 * where the average of the pairs equals the target average. There may be more than
 * one pair that matches the target average.
 * 
 * Bonus Constraints:
 * Time: O(N)
 * Space: O(1)
 * 
 * Sample Input:
 *  averagePair([1,2,3],2.5) // true
 *  averagePair([1,3,3,5,6,7,10,12,19],8) // true
 *  averagePair([-1,0,3,4,5,6], 4.1) // false
 *  averagePair([], 4) // false
 */

 const averagePair = (arr, avg) => {
    const arrSize = arr.length;
    // initialize the two index variables to find
    // the candidate elements in the array
    let left = 0, right = arrSize - 1;
    while(left < right) {
        // check if left index + right index divided
        // by two equals avg return true if it does
        if((arr[left]+arr[right] / 2) === avg) {
            return true;
        }// if the value is less than avg increment the left index
         else if ((arr[left]+arr[right]/2) < avg) {
            left++;
        } // if value greater than avg decrement right index
         else {
            right--;
        }
    }
    // return false if no match found
    return false;
 }


 console.log(averagePair([1,2,3],2.5)) // true
 console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
 console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
 console.log(averagePair([], 4)) // false