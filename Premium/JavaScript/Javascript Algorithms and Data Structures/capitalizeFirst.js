/**capitalizeFirst
 * Write a recursive function called capitalize first. Given an array of strings,
 * capitalize the first letter of each string in the array.
 */

const capitalizeFirst = (arr) => {
    // create empty array to hold result
    let result = [];
    // create helper function to caplitalize first 
    // char in each string of the array
    const helperFn = arr => {
        
        if(arr.length === 0){
            return;
        }

        let str = arr[0];
        result.push(str[0].toUpperCase()+str.slice(1));
        return helperFn(arr.slice(1));
    }
    helperFn(arr);
    return result;
}

console.log(capitalizeFirst(['bob','rob','corn','on','the','cob']))