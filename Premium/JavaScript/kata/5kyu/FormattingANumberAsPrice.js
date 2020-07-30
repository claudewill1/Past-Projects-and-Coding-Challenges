const numberToPrice = function(number) {
    if(!number || isNaN(number)){
        return 'NaN';
    }

    // Remove decimal places after the first two without rounding up
    if(/\.\d{3}/.test(number)){
        number = parseInt(number*100)/100;
    }

    number = number.toString();

    // insert commas
    while(/\d+\d{3}/.test(number)) {
        number = number.replace(/(\d+)(\d{3})/, '$1,$2');
    }

    // add .00 if no decimal
    if(-1 === number.indexOf('.')){
        return number + '.00';
    }

    // add any needed zeros to ensure there are two decimal places
    while(!/\.\d{2,}$/.test(number)) {
        number += '0';
    }

    return number;
}