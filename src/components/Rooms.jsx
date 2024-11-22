// Import necessary dependencies
import React, { useState } from 'react'; // Import the React library and the useState hook
import { useDispatch } from 'react-redux'; // Import the useDispatch hook from the react-redux library
import { addBookingToFirestore } from '../components/firestorereducers'; // Import the addBookingToFirestore function from the firestorereducers file
import PayPalButton from '../components/PayPalButton'; // Import the PayPalButton component
import dom from "../assets/Modern Luxurious Bedroom.jpg"; // Import the Modern Luxurious Bedroom image
import bed1 from '../assets/Contemporary Elegance_ Serene Earth-Toned Bedroom.jpeg'; // Import the Contemporary Elegance image
import bed2 from "../assets/Tranquil Elegance_ Curved Archways and Muted Green Hues.jpeg"; // Import the Tranquil Elegance image
import bed3 from '../assets/Sunset Serenity at the Tropical Beachfront Lounge (1).jpeg'; // Import the Sunset Serenity image
import bed4 from '../assets/Luxurious Oceanview Interior at Sunset.jpeg'; // Import the Luxurious Oceanview image
import bed5 from '../assets/Modern Bedroom Interior.jpeg'; // Import the Modern Bedroom image
import bed6 from '../assets/Serene Indoor Pool with Ocean View.jpg'; // Import the Serene Indoor Pool image
import '../App.css'; // Import the CSS file

// Define the Rooms component
function Rooms() {
  // Get the dispatch function from the react-redux library
  const dispatch = useDispatch();

  // Define the state for the selected room and the drawer visibility
  const [selectedRoom, setSelectedRoom] = useState(null); // State for the selected room
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State for the drawer visibility

  // Define the handleBooking function to handle room booking
  const handleBooking = (room) => {
    // Set the selected room and open the drawer
    setSelectedRoom(room);
    setDrawerOpen(true);
  };

  // Define the handlePaymentSuccess function to handle payment success
  const handlePaymentSuccess = (details) => {
    // Create the booking data object
    const bookingData = {
      bookitem: selectedRoom.title,
      amount: selectedRoom.price,
      isBooked: true,
      paymentDetails: details,
    };

    // Dispatch the addBookingToFirestore action
    dispatch(addBookingToFirestore(bookingData));

    // Reset the selected room and close the drawer
    setSelectedRoom(null);
    setDrawerOpen(false);
  };

  // Define the rooms array
  const rooms = [
    { title: "Express Ocean View", price: 500, img: dom },
    { title: "Coastal Breeze Room", price: 1500, img: bed1 },
    { title: "Romance Retreat", price: 3500, img: bed2 },
    { title: "Tranquil Haven", price: 600, img: bed3 },
    { title: "Luxury Loft", price: 500, img: bed4 },
    { title: "Modern Bedroom", price: 700, img: bed5 },
    { title: "Serene Pool View", price: 800, img: bed6 },
  ];

  // Return the JSX element
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

// Export the Rooms component as the default export
export default Rooms;