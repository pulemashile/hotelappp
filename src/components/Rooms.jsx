// components/BookingPage.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookingToFirestore } from '../components/firestorereducers'; // The file where you handle adding data to Firestore
import dom from "../assets/Modern Luxurious Bedroom.jpg";
import bed1 from '../assets/Contemporary Elegance_ Serene Earth-Toned Bedroom.jpeg';
import bed2 from "../assets/Tranquil Elegance_ Curved Archways and Muted Green Hues.jpeg";
import bed3 from '../assets/Sunset Serenity at the Tropical Beachfront Lounge (1).jpeg';
import bed4 from '../assets/Luxurious Oceanview Interior at Sunset.jpeg';
import bed5 from '../assets/Modern Bedroom Interior.jpeg';
import bed6 from '../assets/Serene Indoor Pool with Ocean View.jpg';

function BookingPage() {
  const dispatch = useDispatch();

  const handleBooking = (room) => {
    const bookingData = {
      bookitem: room.title,
      amount: room.price,
      isBooked: true, // Ensure we mark it as booked
    };
    dispatch(addBookingToFirestore(bookingData)); // Add to Firestore when booked
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
              <h5 className="card-title">{room.title}</h5>
              <p className="card-text">Price: R {room.price}</p>
              <button className="btn btn-primary bg-[#ddb892] border-0" onClick={() => handleBooking(room)}>Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingPage;
