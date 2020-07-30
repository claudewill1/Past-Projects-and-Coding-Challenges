if (process.env.NODE_ENV === "production"){
    console.log('here 1')
    module.exports = require('./prod');
} else {
    console.log('here 2')
    module.exports = require('./dev');
}