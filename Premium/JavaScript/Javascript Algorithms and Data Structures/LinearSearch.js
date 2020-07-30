/**Linear Search Pseudocode
 * This function accepts an array and a value.
 * Loop through the array and check if the current element
 * is equal to the value.
 * If it is, return the index at which the element is found.
 * If the value is never found, return -1.
 */

 /**Time Complexity
  * Best O(1)
  * Avg O(n)
  * Worst O(n)
  */
const linearSearch = (arr, val) => {
    // loop through elements in the array
    for(let i in arr) {
        // if current element equals value passed in return i
        if(arr[i] === val) {
            return Number(i);
        } 
    }
    // if value is never found return -1
    return -1;
}


console.log(search([1,2,3,4,5,6,7,8],9))
console.log(search(['bob', 'claude', 'rob', 'corn', 'bread'],'bread'))