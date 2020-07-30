import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import List from './components/List';
import * as ROUTES from './constants/Routes';
import LandingPage from './components/Landing/LandingPage';
import Navigation from './components/Navigation/Nav';

const App = () => (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
        <Route path={ROUTES.LIST} component={List} />
      </div>
    </Router>
)
export default App;