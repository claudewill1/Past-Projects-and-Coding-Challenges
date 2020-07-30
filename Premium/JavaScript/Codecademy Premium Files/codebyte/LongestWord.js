const LongestWord = sen => {
    var arr = sen.match(/[a-z0-9]+/gi);
    var sorted = arr.sort(function(a, b) {
    return b.length - a.length; // JavaScript magic - this will automatically 
    // do the logic to return the higher number and shift it to the front of the array
  });
  // code goes here  
  return sorted[0]; 
}


console.log(LongestWord('A Quick Brown Fox Jumped Over the Broken Fence'))