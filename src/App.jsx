import React from 'react';
import Navbar from './Navbar';
import './App.css';
import download from "./assets/Modern Bedroom Interior.jpg"
import 'bootstrap'
import dom from "./assets/Modern Luxurious Bedroom.jpg"

function App() {
  return (
    <div className="App">

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
        {/* <div className="card col-md-4 col-lg-3 mb-4 ">
  <img src="https://www.lummi.ai/photo/modern-luxurious-bedroom-5kpd0" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card Title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" className="btn btn-primary">Learn More</a>
  </div>
  </div>
</div> */}


<div className="card p-4 mx-3  " style={{width: "23rem", height : "30rem", marginTop : "16rem"}}>
  <img src={dom} className="card-img-top" style={{width: "20rem"}}alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="bton btn-primary bg-danger border-0 ">Go somewhere</button>
  </div>
</div>



    </div>
     
      
    </div>
  );
}

export default App;
