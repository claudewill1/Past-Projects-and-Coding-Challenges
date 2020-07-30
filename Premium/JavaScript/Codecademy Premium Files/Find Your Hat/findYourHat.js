const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]){
    this.field = field;
    //set initial x and y locations to 0 on the field
    this.xPos = 0;
    this.yPos = 0;
    // set home position before the start of game
    this.field[0][0] = pathCharacter;
  }
  playGame(){
    let playing = true;
    while(playing){
      this.print();
      this.askDirection();
      if(!this.isInBounds()){
        // if out out bounds, set playing to false and break
        // out of the loop
        console.log('You have moved out of bounds. Gameover.')
        playing = false;
        break;
      } else if (this.isHole()) {
        // gameover, set playing to false, break out of loop,
        // inform player that they have fallen in hole and lost
        console.log('Oops! You have fallen in a hole, gameover!');
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log('Congratulations you have found the hat!!');
        playing = false;
        break;
      }
      // Update the current position on the field
      this.field[this.yPos][this.xPos] = pathCharacter;
       
    }
  }
  
  print(){
    // iterate through the field array using map()
    // after the first row has been printed
    // chain .join('\n'); to move to the next line
    // for the next row
    const displayString = this.field.map(row=> {
      return row.join('');
    }).join('\n');
    console.log(displayString);
  }
  askDirection(){
    // set constant answer to the user to ask which direction
    // they want to go
    const answer = prompt('Which way? ').toUpperCase();
    // use switch statement to go between choices of
    // L,R,U, or D
    switch(answer){
      case 'U':
        this.yPos -= 1;
        break;
      case 'D':
        this.yPos += 1;
        break;
      case 'L':
        this.xPos -= 1;
        break;
      case 'R':
        this.xPos += 1;
        break;
      default:
        console.log('Enter U, D, L, or R.');
        this.askDirection();
        break;
    }
  }
  isInBounds(){
    // check to determine if player is in bounds
    // if the y and x locations are greater than equal
    // to 0 and y is < the length of field, and x <
    // field[0].length return true
    return (
      this.yPos >= 0 && this.xPos >= 0 &&
      this.yPos < this.field.length && this.field[0].length
    );
  }
  isHat(){
    // check to see if the current position is hat
    return this.field[this.yPos][this.xPos] === hat;
  }
  isHole(){
    // check if current position is a hole
    return this.field[this.yPos][this.xPos] === hole;
  }
  static generateField(height, width, percentage = 0.1){
    // create field
    // Array fill() method fills arrays with a static value
    // this method overwrites an existing array
    const field = new Array(height).fill(0).map(el => Array(width));
    for(let y = 0; y < height; y++){
      for(let x = 0; x < width; x++){
        const prob = Math.random();
        field[y][x] = prob > percentage ? fieldCharacter:hole;
      }
    }
    // set the 'hat' location
    const hatLocation = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
    // Make sure that the 'hat' is not at the starting position
    while(hatLocation.x === 0 && hatLocation.y === 0){
      hatLocation.x = Math.floor(Math.random() * width);
      hatLocation.y = Math.floor(Math.random() * height);
    }
    field[hatLocation.y][hatLocation.x] = hat;
    return field;
  }
}

const myField = new Field(Field.generateField(10,10,0.3));
myField.playGame();