/*Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. 
The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary, middle, and high schools. Because these classes share properties and methods,
 each will inherit from a parent School class.*/
// create School superclass
class School{
    // constructor to set the school properties
    constructor(name,level,numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    // getters to get _name, _level, _numberOfStudents
    get name() {
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    // setter for numberOfStudents, receives newNumOfStudents as
    // argument
    set numberOfStudents(newNumOfStudents){
      // if typeof newNumOfStudents != 'Number' return invalid input message
      // if true assign newNumOfStudents to _numberOfStudents
      (typeof newNumOfStudents === 'Number')?'Inalid input: numberOfStudents must be set to a Number': this._numberOfStudents = newNumOfStudents;
    }
    // create quickFacts method to log facts about the school
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    // create method to pick a substitute teacher
    pickSubstituteTeacher(substituteTeachers){
      let randomTeacher = Math.floor(substituteTeachers.length * Math.random()-1);
      return substituteTeachers[randomTeacher];
    }
  }
  // create PrimarySchool subclass that extends
  // School superclass
  class PrimarySchool extends School{
    constructor(name, numberOfStudents,pickupPolicy){
      super(name,'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    // create getter for pickupPolicy
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  // HighSchool class extends School
  class HighSchool extends School{
    // create constructor, uses 3 properties from
    // superClass and creates a new property _sportsTeam
    // which holds an array of teams
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  // create instance of Primary School
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  // call superclass quickFacts method on new instance of primary
  // school
  lorraineHansbury.quickFacts();
  // use superclass pickSubstituteTeacher method to
  // select a teacher from an array of teachers which is passed in
  lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  // create HighSchool instance
  const alSmith = new HighSchool('Al E. Smith', 415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);