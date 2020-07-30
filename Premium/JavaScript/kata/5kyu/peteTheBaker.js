const cakes = (recipe, available) => {
    // get the recipe and available keys using
    // the Object.key() methods
    const rKeys = Object.keys(recipe);
    const aKeys = Object.keys(available);
    // initially assign Infinity to later reassign    
    let answer = Infinity;
    // check to see if what is in the recipe ingredients object
    // exists in the available ingredients object
    // if the value for every recipe key does not exist
    // in the values for the available keys return 0;
    if(!rKeys.every(e => aKeys.includes(e))) return 0;

    // use the forEach() method to iterate through rKeys
    // log the amount of the available key values
    // divided by recipe key values
    rKeys.forEach(key => {
        // check to see if the value of the available key / recipe key is less than
        // equal to answer if true assign value of calculation to answer
        if(available[key]/recipe[key] <= answer){
            answer = available[key]/recipe[key];
        }
    })

    // return the answer floored since you cannot make a fraction of a cake
    return Math.floor(answer);

}
//sample recipe and available ingredients objects declared for test
let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//test function and log result
console.log(cakes(recipe,available))