let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*10);
}

const compareGuesses = (human,computer,target) =>{
    if(Math.abs(random-computer) < Math.abs(random-human))
    {
        return false;
    }
    else 
    {
        return true;
    }
}

const updateScore = winner =>{
    if(winner === 'human'){
        //if winner is human, humanScore is increased by one
        humanScore++;
    }
    else if (winner==='computer'){
        //if winner not human increase computerScore by one
        computerScore++;
    }
}

const advanceRound = () => {
    //increase round number by 1
    currentRoundNumber++;
}