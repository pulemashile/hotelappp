import React from 'react';
import Navbar from './Navbar';
import './App.css';
import download from "./assets/Modern Bedroom Interior.jpg"
import 'bootstrap'
import dom from "./assets/Modern Luxurious Bedroom.jpg"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signingOut } from './components/Authslice';
import { useNavigate } from 'react-router-dom';


function index() {
  const navigate=useNavigate()

  
const dispatch = useDispatch();

const handleSignOut = () => {
  dispatch(signingOut());
  navigate('/');
};


  return (
    <div className="App">
      <div className='img'>
        <Navbar />
        <div className="hero-section">\
          <h2 className='text-sm bg-[#9E6528] text-center mx-[50rem] mt-[26dvh] '>welcome to our royalty hotel</h2>
          <h1 className='text-2xl text-center pt-1 text-white font-bold'>Home away from home,come as stranger leave as a friend</h1>

          {/* Hero section content can go here if needed */}
        </div>
        <div className="rectangle">
          <div className='box'>
            <div className='box1'><h1 className='text-black'>check in</h1>
            <br></br>
            <h2 className='text-black'>Arrival Date</h2>
            </div>
            <div className='box2'>
            <h1 className='text-black'>check in</h1>
            <br></br>
            <h2 className='text-black'>Arrival Date</h2>
            </div>
            <div className='box3'> <h1 className='text-black'>check in</h1>
            <br></br>
            <h2 className='text-black'>Arrival Date</h2>
        
        </div>
            <div className='box4'> <button className='text-black text-center mt-8'>book</button></div>
          </div>
        </div>
      </div>
      
      <div className='brown'><Link to="/rooms">
      <button className='text-center ml-[95dvh]'>veiw rooms</button>

      </Link >
     
        <div className="rectangle2">
          <img src={download} alt="Bedroom Interior" />
        </div>

        {/* Flex container for the cards */}
        <div className="d-flex justify-content-center flex-wrap">
          <div className="card p-4 mx-3" style={{width: "23rem", height: "30rem", marginTop: "16rem"}}>
            <img src={dom} className="card-img-top" style={{width: "20rem"}} alt="Bedroom" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary bg-danger border-0">Go somewhere</button>
            </div>
          </div>

          <div className="card p-4 mx-3" style={{width: "23rem", height: "30rem", marginTop: "16rem"}}>
            <img src={dom} className="card-img-top" style={{width: "20rem"}} alt="Bedroom" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary bg-danger border-0">Go somewhere</button>
            </div>
          </div>

          <div className="card p-4 mx-3" style={{width: "23rem", height: "30rem", marginTop: "16rem"}}>
            <img src={dom} className="card-img-top" style={{width: "20rem"}} alt="Bedroom" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on 
                the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary bg-danger border-0">Go somewhere</button>

            </div>
            <div></div>
            
          </div>
          <button onClick={handleSignOut}>sign out</button>
        </div>
        
      </div>
      <div className="flex justify-center gap-6 mt-[25dvh] mr-[50dvh]">
          <img src={dom} style={{width: "20rem", height: "20rem"}} alt="Bedroom" />
          <img src={dom} style={{width: "20rem", height: "20rem"}} alt="Bedroom" />
          <img src={dom} style={{width: "20rem", height: "20rem"}} alt="Bedroom" />
          <img src={dom} style={{width: "20rem", height: "20rem"}} alt="Bedroom" />

        </div>
    </div>
  );
}

export default index;