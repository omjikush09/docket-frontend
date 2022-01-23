import React from 'react';
import { Link } from 'react-router-dom';

const  Navbar=()=> {
  return (
      <div className="container">
          <nav className="navbar">
              <ul>
                  
                  <li><Link to="/">Home</Link> </li>
                  <li><Link to="/avalbility">Availability</Link> </li>
                  <li><Link to="/integration">Integrations</Link> </li>
                  <li><Link to="/account">Account</Link> </li>
                 
              </ul>
          </nav>
      </div>
  );
}

export default Navbar;
