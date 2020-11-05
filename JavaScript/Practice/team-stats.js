const team = {
    _players: [
      {
        firstName: 'Tom',
        lastName: 'Brady',
        age: 50
      },
      {
        firstName: 'Bob',
        lastName: 'Muller',
        age: 70
      },
      {
        firstName: 'Chuck',
        lastName: 'Norris',
        age: 75
      }
    ],
    _games: [
      {opponent: 'Packers', teamPoints: 50, opponentPoints: 5},
      {opponent: 'Rams',teamPoints: 100, opponentPoints: 40},
      {opponent: 'Saints',teamPoints: 2,opponentPoints: 50}
    ],
    get players(){
      return this._players.firstName, this._players.lastName, this._players.age;
    },
    get games(){
      return this._games.opponent, this._games.teamPoints, this._games.opponentPoints;
    },
    set players(playerIn) {
      return this._players.firstName = firstName, this._players.lastName = lastName, this._players.age = age;
    },
      set players(playerIn) {
      return this._games.opponent = opponent, this._games.teamPoints = teamPoints, this._games.opponentPoints = opponentPoints;
    },
    //method to add new players to the team
    addPlayer(firstName,lastName,age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
   //add games to team object with this method
    addGame(opponent,teamPoints,opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(game);
      
    }
  };
  //add players to team
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa', 'Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  //add games to team object
  team.addGame('Magics',50, 60);
  team.addGame('Giants',40, 12);
  team.addGame('Patriots',14,60);
  