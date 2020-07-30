/**Sliding Window - minSubArrayLength
 * Write a function called minSubArrayLen which accepts two
 * parameters - an array of positive integers and a positive integer.
 * 
 * This function should return the minimal lengthof a contiguous subarray of
 * which the sum is greater than or equal to the integer passed to the function. If 
 * there isn't one, return 0 instead.
 * 
 * Examples:
 *  minSubArrayLen([2,3,1,2,4,3],7) // 2 -> because [4,3 is the smallest sub array]
 *  minSubArrayLen([2,1,6,5,4],9) // 2 -> because [5,4] is the smallest sub array
 *  minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52) // 1 -> [62] is greater than 52
 *  minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 *  minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 *  minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
 *  minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
// O(n) solution for finding smallest subarray with sum 
// greater than or equal to n 
const minSubArrayLen = (arr, n) => {
    let total = 0, start = 0, end = 0;
    let minLen = Infinity;

    while (start < arr.length){
        //if current window doesn't app up to the given sum then
        // move window to right
        if(total < n && end < arr.length){
            total += arr[end];
            end++
        }

        // if current window adds up to at least the sum then
        // shrink the window
        else if (total >= n){
            minLen = Math.min(minLen, end-start);
            total -= arr[start];
            start++;
        }
        // current total less than required total but we reach end of arr
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3],7)) // 2 -> because [4,3 is the smallest sub array]
console.log(minSubArrayLen([2,1,6,5,4],9)) // 2 -> because [5,4] is the smallest sub array
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)) // 1 -> [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0