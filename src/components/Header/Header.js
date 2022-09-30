import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
      <nav className="header">
        <img className='icon' src={logo} alt="" />
        <h1>Workout World</h1>
      </nav>
    );
};

export default Header;