/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') 

Fundamentals
Regular Expressions
Declarative Programming
Advanced Language Features
Strings */
const removeUrlAnchor=url=>{
    if(url.includes('#')){
        var u = url.split('#');
        u.pop();
        return u.toString();
    } else {
        return url.toString();
    }
}