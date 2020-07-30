// Create an express route that sends back an entire array
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const numbers = [1,2,3,4,5,6,7,8,9,10];

app.get('/numbers',(req,res,next)=>{
    res.send(numbers);
})

