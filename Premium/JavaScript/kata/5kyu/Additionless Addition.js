/* Create an addition function that does not utilize the + or - operators.
Anti-cheat tests

You may not use any of these symbols: +-[].'"`

Moreover, Math, Array, eval, new Function, with and such have been disabled.
*/
const add=(x,y)=> y  ? add(x^y, (x&y) << 1) : x;