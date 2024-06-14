import './styles.css';
import React from 'react';
import { Alien } from '@phosphor-icons/react';

export function Navbar(){
    return(
      <header className="App-header">
        <nav id="navbar">
          <div className="nav-brand">
            <Alien size={64} className='icon'></Alien>
            <h1 className="nav-title">Space News</h1>
          </div>
          <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/">Trending</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
        </nav>
      </header>
    );
}
