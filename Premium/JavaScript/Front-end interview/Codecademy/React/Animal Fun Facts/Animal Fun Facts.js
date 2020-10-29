import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

function displayFact(e){
let facts = animals[e.target.alt].facts;
let rand = Math.floor(Math.random() * facts.length)
let fact = animals[e.target.alt].facts[rand];
document.getElementById('fact').innerHTML = fact;
}
const title = ""

const background = <img className='background' alt="ocean" src='/images/ocean.jpg' />;
const showBackground = true;
const images = [];
for(let animal in animals){
  images.push(<img
      src={animals[animal].image}
      key={animal}
      className='animal'
      alt={animal}
      
      ariaLabel={animal}
      role='button'
      onClick={displayFact}
     />)
  
  
};
const animalFacts = (
  <div>
    <h1>{title === ''?'Click on an animal for a fun fact':title}</h1>
    {showBackground && background}
    <div className='animals'>
        {images}
        <p id='fact' style={{color: 'white'}}></p>
    </div>
    
    
  </div>
);

ReactDOM.render(animalFacts,document.getElementById('root'));