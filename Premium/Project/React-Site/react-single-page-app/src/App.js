import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import './App.css';
import HomePage  from './HomePage';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';

function App() {
  return(
    <Router>
      <div className='App'>
      <Nav />
        <Switch>
          <Route path='/home' exact component={HomePage}/>
          <Route path='/about' component={About}/>
          <Route path='/shop' exact component={Shop} />
          <Route path='/shop/:id' component={ItemDetail} ></Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App;
