const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, ()=>{
  console.log(`Server is listening on port ${PORT}.`);
});

quoteRouter.get('/random',(req,res,next)=>{
    const randomQuote = getRandomElement(quotes);
    if(randomQuote){
      res.send({quote: randomQuote});;  
    } else {
      res.status(404).send();
    }
  });
  
quoteRouter.get('/',(req,res,next)=>{
    const person = req.query.person;
    if(person !== undefined){
      const quote = quotes.filter(q=> q.person === person);
      const sendQuote = {
        quotes: quote
      }
      res.send(sendQuote);
    } else {
      const arr = [];
      const sendRes = {
        quotes: arr
      }
      res.send(sendRes);
    }
});

quoteRouter.post('/',(req,res,next)=>{
    const newQuote = {
      quote: req.query.quote,
      person: req.query.person
    };
    if(newQuote.quote && newQuote.person){
      quotes.push(newQuote)
      res.send({quote: newQuote});
    } else {
      res.status(400).send();
    }
});

