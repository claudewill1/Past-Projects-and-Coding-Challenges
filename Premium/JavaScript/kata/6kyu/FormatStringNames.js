function list(names) {
    const list = (arr) => {
        const namesArray = arr.map((nameObject, key) => {
          // if there is just one object in the array
          // no need to do anything special, just return the name
          if (arr.length === 1) {
            return nameObject.name;
          }
          // if the key is at the last index
          // and if the array has more than one value in it
          // we know that this is the last value in the array, add an ampersand
          if (key === arr.length - 1 && arr.length > 1) {
            return `& ${nameObject.name}`;
          }
          // if the next key is the last one in the array
          // we know that this is the second to last value in the array
          // dont add a comma, just add a space
          if (key + 1 === arr.length - 1) {
           return `${nameObject.name} `;
          }
          // no other case matches, return this value
          // there are other values coming, just add a comma
          return `${nameObject.name}, `;
        });
        // since we added the commas and spacing above, just join
        return namesArray.join('');
      };
  }

  

console.log(list({name: 'Bob'},{name: 'Claude'},{name: 'Tom'},{name: 'Marley'}));