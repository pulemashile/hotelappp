import React from 'react';
import { Link } from 'react-router-dom'; // Correct import

function Navbar() { // Capitalized component name
  return (
    <nav className='nav'>
      <h1 className='logo'>Logo</h1>
      <ul className='list'>
        <li>
          <Link to="/">About</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/reviews">Reviews</Link> {/* Add text inside Link */}
        </li>
        <Link to ="/register">
        <button className='btn'>Sign Up</button>
        </Link>
       
      </ul>
    </nav>
  );
}

export default Navbar;
