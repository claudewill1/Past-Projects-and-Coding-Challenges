const squareDigits = num => {
    // get an array of digits
    const digits = num.toString().split('');

    // Square each digit. Due to JavaScript having
    // automatic type correction, it will quietly convert each string
    // into a number to perform multiplication
    const squareDigits = digits.map(n => n*n);

    // Join each digit together, then use the + operator
    // to convert the string into a number
    const squaredNumber = squareDigits.join('');

    return +squaredNumber;
}