
String.prototype.camelCase = function () {
    return (this.length < 1 )? '' : this.match(/[^\s]+/gi)
        .map((v) => {
            return v.charAt(0).toUpperCase() + v.slice(1);
        }).join('').replace(/\s/gi,'');
}

console.log('test case'.camelCase()); // returns 'TestCase'
console.log('camel case method'.camelCase()); // returns 'CamelCaseMethod'
console.log('say hello '.camelCase()); // returns 'SayHello'
console.log(' camel case word'.camelCase()); // returns 'CamelCaseWord'
console.log(''.camelCase()); // returns ''