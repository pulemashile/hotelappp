import React from 'react';
import { Link } from 'react-router-dom'; // Correct import
import logo from './assets/logo.png'

function Navbar() { // Capitalized component name
  return (
    <nav className='nav'>
        <img className='h-10 rounded-sm mr-10' src={logo}></img>
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
        {/* <button className='btnn'>
          
          <img src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2151106393.jpg?w=826&t=st=1726491606~exp=1726492206~hmac=8831018d76164e30d8b2bee719028d97640521e881d1cd92f469890f6f53f7fa'></img>

        </button> */}
        </Link>
       
      </ul>
    </nav>
  );
}

export default Navbar;
