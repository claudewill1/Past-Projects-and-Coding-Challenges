/**Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts the 
 * unique values in the array. There can be negative
 * numbers in the array, but it will always be sorted
 */



 const countUniqueValues = arr => {
    if(arr.length === 0) {
        return 0;
    }
    let count = 0;
    // traverse array
     let res = 0;
     for(let i = 0; i < arr.length; i++){
         // move ahead the index
         // while there are duplicates
        while(i < arr.length - 1 && arr[i] === arr[i+1]){
            i++;
        }
        res++;
     }
     return res;
 }


 console.log(countUniqueValues([1,1,1,1,1,2,3,4])); // 4
 console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
 console.log(countUniqueValues([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10])); // 10
 console.log(countUniqueValues([])); // 0
 console.log(countUniqueValues([-2,-1,-1,0,1])); // 4