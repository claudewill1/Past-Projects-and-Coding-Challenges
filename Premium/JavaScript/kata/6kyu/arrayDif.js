
const array_diff = (a,b) => {
    //get difference of the two arrays
    // the following will use the filter method to
    // iterate through the array if the second array
    //does not include the element 'x' from the first array
    //the element that is in the first and not the second arr
    //is assigned to difference
      return a.filter(x => !b.includes(x));
      
  }