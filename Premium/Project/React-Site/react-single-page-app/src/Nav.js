import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
    <div className='App'>
        <nav>
            
            <ul className='nav-links'>
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/cheatsheet'>
                    <li>HTML CheatSheet</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;