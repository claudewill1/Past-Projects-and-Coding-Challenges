/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
  */
const high = x =>{
    //split string into an array
    const wordList = x.split(' ');
    //calculate score to a separate array
    const getScore = word => {
        return word.toLowerCase()
            .split('')
            .reduce((a, c) => a + c.charCodeAt(0) - 96, 0);
    }
    // create scoreList function to get and array of a list of scores
    const scoreList = wordList.map(word => getScore(word));

    // declare variables to hold highest score and index
    let highestIndex = 0;
    let highestScore = 0;
    // use the .forEach() iterator method to iterate through the scoreList array
    // when the score is greater than highest score, assign the current index to
    // highest index, and then assign the score to highestScore
    scoreList.forEach((score, i) => {
        if (score > highestScore){
            highestIndex = i;
            highestScore = score;
        }
    });
    // return the highestIndex item of the wordList array
    return wordList[highestIndex];
}

console.log(high('a fat man jumped over the fence in zarobia ville'))