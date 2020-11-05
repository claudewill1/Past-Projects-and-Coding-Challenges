const _ = {
    clamp(num,lower,upper){
      const lowerClampedValue = Math.max(num,lower);
      const clampedValue = Math.min(lowerClampedValue,upper)
      return clampedValue;
    },
    inRange(num,start,end){
      
      if(end === undefined){
        end = start;
        start = 0;
      }
      if(start > end){
        //creates temp variable to hold value of end
        //assigns the value of end to temp
        let temp = end;
        //assign value of start to end
        end = start;
        //assign value of temp to start
        start = temp;
      }
      //the assigned valueof isInRange is determined by the boolean
      //expression start <= num && num < end
      let isInRange = (start <= num && num < end)
      return isInRange;
    },
    words(string){
      //takes string and returns it as an array of words
      return string.split(' ');
    },
    pad(string,length){
      //checks if length is less than the length of the string
      //if so, return the string unmodified
      if(length < string.length){
        return string;
      }
      //get the startPaddingLength by taking the differences of 
      //length and string.length and dividing by 2
      let startPaddingLength = Math.floor((length-string.length)/2);
      //get endPaddingLength by subtracting string.length from 
      //length and then subtracting startPaddingLength from that
      let endPaddingLength = length - string.length - startPaddingLength;
      //paddedString starts by being assigned a space ' '
      let paddedString = ' ';
      //take paddedString with the repeat method to add the start
      //padding length. Next concat string to     paddedString.repeat(startPaddingLength)
      //finally, concat paddedString to the end with repeat(endPaddingLength)
      paddedString = paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
      //return paddedString
      return paddedString;
    },
    //has method returns true if an object contains a value at
    //the specified key, if not, it will return false
    has(object, key){
        //create variable hasValue, use the Object.hasOwnProperty
        //method will return true or false depending on if the key
        //passed as a parameter has a value
        let hasValue = object.hasOwnProperty(key);
        return hasValue;
    },
     //invert() takes one argument being an object, iterates through 
  //each key / value pair and swaps the key and value
    invert(object){
        let invertedObject={};
        //for...in loop iterates through each key of the object
        //the variable originalValue is declared, this holds the
        //value of the the key, the value of invertedObject is then
        //set to the originalValues key, if key is 'a' and value is 
        //'b' the key becomes 'b' and the value becomes 'a'
        for(let key in object){
            let originalValue = object[key];
            invertedObject = {originalValue: key};
        }
        //returns the inverted object
        return invertedObject;
    
    },
    //findKey() takes an obj and a predicate function
    //as arguements. 
    findKey(obj,predicate){
        //iterate through each key in object
        for(let k in obj){
        //create variable value and assign current key
        let value = obj[k];
        //create variable to hold the return value of the
        //predicate function
        let predicateReturnValue = predicate(value);
        //if it results in a truthy value, return the key
        if(predicateReturnValue){
            return k;
        };
        };
        //for anything else, return undefined
        return;  
    },
    
    //the drop method takes in an array and a number
    //the number is used to determine how many elements
    //will be removed from the beginning of the array
    drop(arr,num){
      //following variable holds the new array which will be 
      //after removing the specified amount of elements from the 
      //start of array
      let newArr = [];
      //check to see how many elements are specified to be removed
      //if the number is undefined, assign 1 to num and drop first
      //element.
      if(num === undefined){
        num = 1;
        return newArr = arr.slice(num,arr.length);
      } else{
        return newArr = arr.slice(num,arr.length);
      }
    },
    //the dropWhile method takes two arguments array and a predicate function
   dropWhile(array,predicate){
    let dropNumber = array.findIndex(function(element, index){
      return !predicate(element,index,array);
      });
    let droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },
  //chunk method breaks the array which is passed in into chunks
  //whose length is given by the arguement size which is passed in
  chunk(array,size){
    //check to see if size is undefined. If so, assign 1;
    if(size === undefined){
      size = 1;
    }
    //create empty array to later hold the chunks of the array
    let arrayChunks = [];
    //iterate through the array with a for loop
    //each time increment i by the size which is passed in
    for(let i = 0; i < array.length; i+=size){
      //create arrayChunk by arr.slice() starting with the current
      //value of i, and end with i+size
      let arrayChunk = array.slice(i,i+size);
      //add arrayChunk to arrayChunks
      arrayChunks.push(arrayChunk);
    }
    //return arrayChunks
    return arrayChunks;
  }
};
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;