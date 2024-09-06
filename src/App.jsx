import React from 'react';
import Navbar from './Navbar';
import './App.css';
import download from "./assets/Modern Bedroom Interior.jpg"

function App() {
  return (
    <>
      <div className='img'>
        <Navbar />
        <div className="hero-section">
          {/* Hero section content can go here if needed */}
        </div>
        <div className="rectangle">
          <div className='box'>
            <div className='box1'>box1</div>
            <div className='box2'>box2</div>
            <div className='box3'> box3</div>
            <div className='box4'> box4 </div>

          </div>
        </div>
      </div>
      <div className='brown'>
        <div className="rectangle2">
          <img src={download}></img>
        </div>

      </div>
    </>
  );
}

export default App;
