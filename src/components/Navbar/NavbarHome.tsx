import React from 'react';
import { Link } from 'react-router-dom';

const NavbarHome = () => {
  return (
      <div className="container">
          <div className="navbar">
            <h1>Docket</h1>          
            <nav>
                <ul className="nav-item">
                    <li><Link to="/"></Link></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </div>
      </div>
  );
};

export default NavbarHome;
