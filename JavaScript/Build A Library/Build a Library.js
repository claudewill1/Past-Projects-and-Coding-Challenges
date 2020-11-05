/* Intermediate JavaScript
Build a Library

Congratulations, you’ve passed the grueling rigmarole of librarian school and have become head librarian at your local Books-‘N-Stuff.

Just as you sit down, eager to utilize all those skills you learned in “Lib 203 - Shushing: How to Maintain Order While Spitting”, you realize you’re still using index cards to handle everything.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:
Book

    Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie

    Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD

    Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

If you’re looking for a challenge, try to create the four classes without using the steps below. */
// create class Media
class Media {
    // create constructor with title passed in as an
    // arguement
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    // create get method for _title
    get title(){
      return this._title;
    }
    // create get method for _isCheckedOut
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    // create get method for ratings
    get ratings(){
      return this._ratings;
    }
    // create set method for isCheckedOut
    set isCheckedOut(key2){
      this._isCheckedOut = key2;
    }
    //create method to toggle between true and false on 
    // _isCheckedOut
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
      // ensure that rating is 1-5, if less
      // than one || greater than 5 return message
      
      let ratingsSum = (this._rating >=1 && this._rating <= 5) ? console.log('Rating must be a number with 1 being the lowest, and 5 the highest.') : this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)/this._ratings.length;
      let roundedSum = Math.round(ratingsSum*10)/10;
      let roundedDec = roundedSum.toFixed(roundedSum);
      return roundedDec;
     
    }
    // create method to get rating
    addRating(score){
      this._ratings.push(score);
    
    }
  }
  // create subclass of Media, Book
  class Book extends Media {
    constructor(author,title,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  // create subclass of Media, Movie
  class Movie extends Media {
    constructor(director,title,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
   
  }
  // create instance of book
  const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
  // toggle the checkout status of the item
  historyOfEverything.toggleCheckOutStatus;
  //log isCheckedOut
  console.log(historyOfEverything.isCheckedOut)
  // add ratings to instance of Book
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  // retrieve average rating
  historyOfEverything.getAverageRating();
  // log average rating
  console.log(historyOfEverything.getAverageRating());
  // create instance of Movie
  const speed = new Movie('Jan de Bont', 'Speed','116');
  // toggleCheckOutStatus
  speed.toggleCheckOutStatus;
  // log isCheckedOut
  console.log(speed.isCheckedOut);
  // call the addRating method of the parent class 3 times
  // on speed to add ratings for a calculation of the average rating
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  // get and log the average rating of the movie
  console.log(speed.getAverageRating());