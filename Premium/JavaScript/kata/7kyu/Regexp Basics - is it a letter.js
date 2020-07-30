String.prototype.isLetter = function() {
    return /[a-zA-Z]{1}$/gi.test(this); // ? false : true;
}