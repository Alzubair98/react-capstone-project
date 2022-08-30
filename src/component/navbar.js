import React from 'react';
import { GiSittingDog } from 'react-icons/gi';

const Navbar = () => (
  <nav className="Nav-bar">
    <div className="icon-continer">
      <GiSittingDog className="phone-icon" />
      <h1 className="nav-text">My Animals</h1>
    </div>
  </nav>
);

export default Navbar;
