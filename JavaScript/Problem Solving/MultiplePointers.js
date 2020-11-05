/**WRite a function called sumZero which accepts a sorted
 * array of integers. The function should find the first pair where the sum
 * is 0. return an array that includes both values that sum
 * to zero or undefined if a pair does not exist
 */

const sumZero = (arr) => {
    const sum = 0;
   
    // maintain two indices pointing to end-points of the array
    let low = 0;
    let high = arr.length - 1;
    
    // reduce search space arr[low..high] at each iteration

    // loop till low is less than high
    while(low < high) {
        // sum found
        if(arr[low] + arr[high] === sum){
            return [arr[low],arr[high]];
        }

        // increment low index if total is less than the desired sum
        // decrement is high index if total is more than the sum
        if(arr[low]+arr[high] < sum) {
            low++;
        } else {
            high--;
        }
    }
    
}

console.log(sumZero([-4,-3,-2,-1,0,8,6,7,10]));