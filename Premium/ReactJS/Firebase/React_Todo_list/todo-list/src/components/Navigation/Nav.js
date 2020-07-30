import React from 'react';
import { Link } from 'react-router-dom';

//import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/Routes';
import './nav.css';
import { AuthUserContext } from '../Session/Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className='App'>
      <nav>
        <ul>
            <li className='nav-links'>
            <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
            <Link to={ROUTES.LIST}>Todo-List</Link>
            </li>
            <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
            {/* <SignOutButton /> */}
            </li>
        </ul>
      </nav>
  </div>
);

const NavigationNonAuth = () => (
 <div>
     <nav>
        <ul>
            <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
        </ul>
     </nav>
 </div>
);

export default Navigation;