import React from 'react';
import Navbar from './Navbar';
import './App.css';
import download from "./assets/Modern Bedroom Interior.jpg"
import 'bootstrap'
import dom from "./assets/Modern Luxurious Bedroom.jpg";
import hey from './assets/Rectangle 6 (1).png';
import cake from './assets/Rectangle 6 (2).png';
import  two from './assets/Rectangle 6.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signingOut } from './components/Authslice';
import { useNavigate } from 'react-router-dom';
import { RiPencilLine, RiLogoutCircleLine } from '@remixicon/react';



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
            <h1 className='text-black'>check out</h1>
            <br></br>
            <h2 className='text-black'>Arrival Date</h2>
            </div>
            <div className='box3'> <h1 className='text-black'>adults</h1>
            <br></br>
            <h2 className='text-black'>Adults</h2>
        
        </div>
            <div className='box4'> <button className='text-black text-center mt-8'>book</button></div>
          </div>
          <div className='mt-2 font-sans'>check in:after 2pm & checkout: before 12pm</div>
        </div>
      </div>
      
      <div className='brown'><Link to="/rooms">
      <button className='text-center ml-[95dvh] border-spacing-4 bg-white'>veiw rooms</button>

      </Link >
     
        <div className="rectangle2">
          <img src={download} alt="Bedroom Interior" />
        </div>

        {/* Flex container for the cards */}
        <div className="d-flex justify-content-center flex-wrap">
          <div className="card p-4 mx-3" style={{width: "23rem", height: "30rem", marginTop: "16rem"}}>
            <img src={hey} className="card-img-top" style={{width: "20rem"}} alt="Bedroom" />
            <div className="card-body">
             <h2 className="card-title" style={{ fontSize: "2rem", fontWeight: "bold", color: "#ff6347", textAlign: "center", marginBottom: "1rem" }}>
             Junior Suite
</h2>

              
              <p className="card-text">Our Junior Suite offers a perfect blend of comfort and style, featuring a spacious layout with a cozy sitting area.
                 Ideal for both leisure and business travelers, it includes modern amenities and a charming kitchenette for your </p>
              
            </div>
          </div>

          <div className="card p-4 mx-3" style={{width: "23rem", height: "30rem", marginTop: "16rem"}}>
            <img src={two} className="card-img-top" style={{width: "20rem"}} alt="Bedroom" />
            <div className="card-body">
            <h2 className="card-title" style={{ fontSize: "2rem", fontWeight: "bold", color: "#ff6347", textAlign: "center", marginBottom: "1rem" }}>
 Presidential suite
</h2>
              <p className="card-text">Indulge in the epitome of luxury in our Presidential Suite. With elegant furnishings, stunning views,
                 and multiple rooms, this suite is the perfect choice for those who seek an extraordinary experience during their stay.</p>
              
            </div>
          </div>

          <div className="card p-4 mx-3" style={{width: "23rem", height: "30rem", marginTop: "16rem"}}>
            <img src={dom} className="card-img-top" style={{width: "20rem"}} alt="Bedroom" />
            <div className="card-body">
            <h2 className="card-title" style={{ fontSize: "2rem", fontWeight: "bold", color: "#ff6347", textAlign: "center", marginBottom: "1rem" }}>
  Honeymoon
</h2>

              <p className="card-text">Celebrate your love in our enchanting Honeymoon Suite, complete with luxurious amenities and a romantic ambiance. 
                Relax in a private jacuzzi and create unforgettable memories in a setting designed</p>
                

            </div>
            <div></div>
            
          </div>
          
        </div>
        <button onClick={handleSignOut}><RiLogoutCircleLine></RiLogoutCircleLine></button>
   
        
      </div>
      

    </div>
  );
}

export default index;