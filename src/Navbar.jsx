// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Update the path accordingly
import logo from './logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (<>
    <div className={`navbar-container ${isOpen ? 'open' : ''}`}>
      <div className="navbar-logo"><img src={logo}/></div>
      <div className="toggle-button" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>
      
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#" onClick={toggleMenu} className="navbar-link">
          Home
        </a>
        <a href="#" onClick={toggleMenu} className="navbar-link">
          Machine learning 
        </a>
        <a href="#" onClick={toggleMenu} className="navbar-link">
          Deep learning 
        </a>
        <a href="#" onClick={toggleMenu} className="navbar-link">
          Essential mathematics 
        </a>
      </div>
       </div>
    
      
        <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="magnifying-glass" />
        
      </div>
  </>
      
    
  );
};

export default Navbar;