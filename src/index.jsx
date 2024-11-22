import React, { useState } from 'react';
import { db, auth } from './config/firebase'; // Import Firebase config
import { addDoc, collection } from 'firebase/firestore'; // Import Firestore methods
import { toast, ToastContainer } from 'react-toastify'; // Import React Toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Styles for toast notifications
import Navbar from './Navbar';
import './App.css';
import download from "./assets/Modern Bedroom Interior.jpg";
import dom from "./assets/Modern Luxurious Bedroom.jpg";
import hey from './assets/Rectangle 6 (1).png';
import cake from './assets/Rectangle 6 (2).png';
import two from './assets/Rectangle 6.png';
import { Link } from 'react-router-dom';
import { RiLogoutCircleLine, RiHeartLine } from '@remixicon/react';
import Footer from './footer';
import { useDispatch } from 'react-redux';
import { signingOut } from './components/Authslice';
import { useNavigate } from 'react-router-dom';
import PayPalButton from './components/PayPalButton';


function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(900); // Default payment amount for booking
  
  // Handle sign out
  const handleSignOut = () => {
    dispatch(signingOut());
    navigate('/');
  };

  // Handle booking action
  const handleBookNow = async () => {
    if (arrivalDate && departureDate) {
      // Get current authenticated user
      const user = auth.currentUser;
      if (!user) {
        toast.error('Please sign in to book a room');
        return;
      }

      // Booking details
      const bookingDetails = {
        arrivalDate,
        departureDate,
        totalAmount: paymentAmount,
        userId: user.uid,  // Use the authenticated user's ID
        roomType: 'Junior Suite', // Example; make this dynamic based on selected room
        status: 'Booked', // Status of the booking
        createdAt: new Date()  // Timestamp of booking
      };

      try {
        // Save the booking to Firestore
        await addDoc(collection(db, 'bookings'), bookingDetails);
        toast.success(`Booking successful! Your stay is from ${arrivalDate} to ${departureDate}.`);
        setShowModal(true);
        setArrivalDate('');
        setDepartureDate('');
      } catch (error) {
        console.error('Error adding booking: ', error);
        toast.error('There was an issue with your booking. Please try again later.');
      }
    } else {
      toast.error('Please select both arrival and departure dates');
    }
  };

  // Handle payment success from PayPal
  const handlePaymentSuccess = (details) => {
    console.log('Payment Success:', details);
    setShowModal(false); // Close the payment modal
    toast.success('Payment successful! Your booking is confirmed.');
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <img src={download} alt="Hotel Background" className="w-full h-[40rem] object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black bg-opacity-40">
          <h1 className="text-7xl font-serif">chalte suits Hotel</h1>
          <p className="text-xl font-serif text-white">$300 / Night</p>
          <p className=" font-serif">⭐ 4.9 (1,092 Reviews)</p>
        </div>
      </div>

      {/* Reservation Form Section */}
      <section className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Arrival Date Input */}
          <div className="flex flex-col items-center bg-white p-4 rounded shadow-md">
            <h1 className="text-black font-semibold">Check In</h1>
            <p className="text-sm text-muted-foreground">Arrival Date</p>
            <input
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md mt-2"
            />
          </div>

          {/* Departure Date Input */}
          <div className="flex flex-col items-center bg-white p-4 rounded shadow-md">
            <h1 className="text-black font-semibold">Check Out</h1>
            <p className="text-sm text-muted-foreground">Departure Date</p>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md mt-2"
            />
          </div>

          {/* Book Now Button */}
          <div className="flex justify-center items-center bg-white p-4 rounded shadow-md">
            <button
              onClick={handleBookNow}
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark disabled:opacity-50"
              disabled={!arrivalDate || !departureDate}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section className="p-4 font-sans text-center">
        <p>Check in after 2pm & check out before 12pm</p>
      </section>

      {/* View Rooms Section */}
      <section className="bg-white py-8">
        <div className="text-center mb-8">
          <Link to="/rooms">
            <button className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-dark">View Rooms</button>
          </Link>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1: Junior Suite */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <div className="absolute top-2 left-2">
              <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/80">
                <RiHeartLine className="text-xl" />
              </button>
            </div>
            <img src={hey} className="rounded-lg h-72 object-cover" alt="Junior Suite" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary mb-4 text-center">Junior Suite</h2>
              <p className="text-muted-foreground text-center">Our Junior Suite offers a perfect blend of comfort and style. Ideal for both leisure and business travelers.</p>
            </div>
            <div className="text-center pb-4">
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80">
                Share
              </button>
            </div>
          </div>

          {/* Card 2: Presidential Suite */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <div className="absolute top-2 left-2">
              <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/80">
                <RiHeartLine className="text-xl" />
              </button>
            </div>
            <img src={two} className="rounded-lg h-72 object-cover" alt="Presidential Suite" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary mb-4 text-center">Presidential Suite</h2>
              <p className="text-muted-foreground text-center">Indulge in the epitome of luxury with stunning views and multiple rooms. Perfect for those who seek an extraordinary experience.</p>
            </div>
            <div className="text-center pb-4">
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80">
                Share
              </button>
            </div>
          </div>

          {/* Card 3: Honeymoon Suite */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <div className="absolute top-2 left-2">
              <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/80">
                <RiHeartLine className="text-xl" />
              </button>
            </div>
            <img src={dom} className="rounded-lg h-72 object-cover" alt="Honeymoon Suite" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary mb-4 text-center">Honeymoon Suite</h2>
              <p className="text-muted-foreground text-center">Celebrate your love in our Honeymoon Suite with luxurious amenities, a romantic ambiance, and a private jacuzzi.</p>
            </div>
            <div className="text-center pb-4">
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80">
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logout Button */}
      <div className="text-center mt-8">
        <button onClick={handleSignOut} className="bg-destructive text-white px-6 py-2 rounded-full hover:bg-destructive-dark">
          <RiLogoutCircleLine className="inline-block mr-2" /> Sign Out
        </button>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
            <PayPalButton 
              amount={paymentAmount}
              onPaymentSuccess={handlePaymentSuccess}
            />
            <button onClick={() => setShowModal(false)} className="mt-4 text-gray-500">Cancel</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Index;
