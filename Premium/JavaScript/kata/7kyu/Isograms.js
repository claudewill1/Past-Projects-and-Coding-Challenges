let isIsogram = (str) => {
    if(str.length === 0) return true;
    
    const string = str.toLowerCase();
    const set = new Set(string);
    return set.size === str.length;
  
  }


console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(""))