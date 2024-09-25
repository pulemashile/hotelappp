import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookingToFirestore } from '../components/firestorereducers';
import PayPalButton from '../components/PayPalButton';
import dom from "../assets/Modern Luxurious Bedroom.jpg";
import bed1 from '../assets/Contemporary Elegance_ Serene Earth-Toned Bedroom.jpeg';
import bed2 from "../assets/Tranquil Elegance_ Curved Archways and Muted Green Hues.jpeg";
import bed3 from '../assets/Sunset Serenity at the Tropical Beachfront Lounge (1).jpeg';
import bed4 from '../assets/Luxurious Oceanview Interior at Sunset.jpeg';
import bed5 from '../assets/Modern Bedroom Interior.jpeg';
import bed6 from '../assets/Serene Indoor Pool with Ocean View.jpg';
import '../App.css'; // Import the CSS file

function Rooms () {
  const dispatch = useDispatch();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State to control drawer visibility

  const handleBooking = (room) => {
    setSelectedRoom(room); 
    setDrawerOpen(true); // Open the drawer when a room is selected
  };

  const handlePaymentSuccess = (details) => {
    const bookingData = {
      bookitem: selectedRoom.title,
      amount: selectedRoom.price,
      isBooked: true,
      paymentDetails: details,
    };
    dispatch(addBookingToFirestore(bookingData));
    setSelectedRoom(null); 
    setDrawerOpen(false); // Close the drawer after successful payment
  };

  const rooms = [
    { title: "Express Ocean View", price: 500, img: dom },
    { title: "Coastal Breeze Room", price: 1500, img: bed1 },
    { title: "Romance Retreat", price: 3500, img: bed2 },
    { title: "Tranquil Haven", price: 600, img: bed3 },
    { title: "Luxury Loft", price: 500, img: bed4 },
    { title: "Modern Bedroom", price: 700, img: bed5 },
    { title: "Serene Pool View", price: 800, img: bed6 },
  ];

  return (
    <div>
      <h1 className='text-6xl text-center pb-3'>Book a Room</h1>
      <div className='flex flex-wrap justify-center'>
        {rooms.map((room, index) => (
          <div key={index} className="card p-4 mx-3" style={{ width: "23rem", height: "30rem", marginTop: "10rem" }}>
            <img src={room.img} className="card-img-top" style={{ width: "20rem", height: "15rem" }} alt={room.title} />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ff6347", marginBottom: "1rem" }}>{room.title}</h5>
              <p className="card-text">Price: R {room.price}</p>
              <button className="btn btn-primary bg-[#ddb892] border-0 mt-4" onClick={() => handleBooking(room)}>Book</button>
            </div>
          </div>
        ))}
      </div>

      {/* Side Drawer */}
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        {selectedRoom && (
          <div className="drawer-content">
            <h2>Pay for {selectedRoom.title} - R {selectedRoom.price}</h2>
            <PayPalButton amount={selectedRoom.price} onPaymentSuccess={handlePaymentSuccess} />
            <button className="close-btn" onClick={() => setDrawerOpen(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rooms;
