let menu = {
    _courses: {
     appetizers: [],
     mains: [],
     desserts: []
 },
   get courses(){
     return {
       appetizers: this._courses.appetizers, //uses appetizer get method
       mains: this._courses.mains, //uses main get method
       desserts: this._courses.desserts //uses desserts get method
     }
   },
   get appetizers() {
     return this._courses.appetizers;
   },
   get mains() {
     return this._courses.mains;
   },
   get deserts(){
     return this._courses.desserts;
   },
   set appetizers(appetizerIn){
     return this._courses.appetizers= appetizers;
   },
   set mains(mainIn){
     return this.courses.mains = mains;
   },
   set deserts(desertsIn){
     return this._courses.desserts = desserts;
   },
   addDishToCourse(courseName, dishName, dishPrice){
     const dish = {
       name: dishName,
       price: dishPrice
     };
     this._courses[courseName].push(dish);
   },
   getRandomDishFromCourse: function(courseName){
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex]
   },
   //creates a random meal made up of a random dish from the appetizers, mains,and desserts array
   generateRandomMeal: function(){
     //each item has a random dish for their category returned using the getRandomDishFromCourse method
     // create variable a random appetizer
     const appetizer = this.getRandomDishFromCourse('appetizers');
     // create variable for a random main dish
     const main = this.getRandomDishFromCourse('mains');
     // create variable for a random dessert
     const dessert = this.getRandomDishFromCourse('desserts');
     
     //get total price of the meal
     const totalPrice = appetizer.price + main.price+ dessert.price;
     
     return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
   }
 };
 
 //add appetizers, main dishses ,and desserts to menu
 menu.addDishToCourse('appetizers','Onion Rings', 3.50);
 menu.addDishToCourse('mains','Pineapple Pizza', 7.95);
 menu.addDishToCourse('appetizers','bread sticks', 4.99);
 menu.addDishToCourse('appetizers','salid', 3.25);
 menu.addDishToCourse('mains','Grilled Chicken', 9.99);
 menu.addDishToCourse('mains','Smokehouse Burger', 10.95);
 menu.addDishToCourse('appetizers','Onion Bloom', 7.00);
 menu.addDishToCourse('mains','Pizza',7.95);
 menu.addDishToCourse('desserts','Oreo Nutella Pizza', 12.00);
 menu.addDishToCourse('desserts','Deep Fried Oreos', 4.00);
 menu.addDishToCourse('desserts','Ice cream', 2.50);
 menu.addDishToCourse('desserts','Oreo Cake', 4.60);
 
 let meal = menu.generateRandomMeal();
 
 console.log(meal);