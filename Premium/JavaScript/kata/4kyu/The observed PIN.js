/* Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we count on you!

For C# user: Do not use Mono. Mono is too slower when run your code.
*/

const getPINs = observed =>{
    // create dictionary holding all possible adjacent
    // numbers for each digit on a pin pad
    const adjacent = {
        '1':['1','2','4'],
        '2':['2','1','3','5'],
        '3':['3','2','6'],
        '4':['4','1','5','7'],
        '5':['5','2','4','6','8'],
        '6':['6','3','5','9'],
        '7':['7','4','8'],
        '8':['8','5','7','9','0'],
        '9':['9','6','8'],
        '0':['0','8']
    };
    //convert observed pin into an array
    let combos = [];
    let arrDigits = observed.toString().split('');
    
    
    // create getCombinations function
    // takes array of digits, an index, and the current 
    // combination as arguments
    const getCombinations=(digits, idx, curCombo)=>{
        // get possible candidates
        let curDigit = digits[idx];
        let candidates = new Set(adjacent[curDigit]);
        candidates.add(curDigit);
        // get candiates
        candidates.forEach(idx == digits.length - 1 ? reachedEnd : goDeeper);
        
        function reachedEnd(candidate){ combos.push(curCombo+candidate);}
        function goDeeper(candidate){
            getCombinations(digits, idx+1, curCombo+candidate)
        }
    }
    getCombinations(arrDigits,0,'');
    return combos;
}

console.log(getPINs(1234));