/**Sliding Window - maxSubarraySum
 * Given an array of integers and a number, write a function called maxSubarraySum,
 * which finds the maximum sum of a sub array with the length of the number passed to the 
 * function.
 * 
 * Note that a subarray must consist of consecutive elements form the original
 * array. In the first example below, [100,200,300] is a subarray of the
 * original array, but [100,300] is not.
 * 
 * Constraints:
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
const maxSubarraySum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < n) return null;
    for(let i = 0; i < n; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}