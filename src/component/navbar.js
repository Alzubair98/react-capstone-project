import React from 'react';
import { GiSittingDog } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="Nav-bar">
    <div className="icon-continer">
      <GiSittingDog className="phone-icon" />
      <h1 className="nav-text">My Animals</h1>
    </div>
    <NavLink className="home-link" to="/">Home</NavLink>
  </nav>
);

export default Navbar;
