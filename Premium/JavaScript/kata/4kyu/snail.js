/*Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]  */
const snailSort = arr => {
    const sorted = [];
    while(arr.length > 0){
        sorted.push(...arr.shift())// the ... is the spread operator. using it with push adds
        //the values in the sub-array to the output, instead of adding the sub-array itself
        // next one needs to travel down the input array, pushing the last value of each sub-array
        // to the output array
        for(let i = 0; i<arr.length;i++){
            sorted.push(arr[i].pop())
        }
        sorted.push(...(arr.pop() || []).reverse());
        for(let i=arr.length-1; i>=0; i--){
            sorted.push(arr[i].shift());
        }
    }
    return sorted;
}

module.export = snailSort;