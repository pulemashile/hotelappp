
// Import necessary dependencies
import React from 'react';
import Index from './index'; // Import Index component
import Loginpage from './components/Loginpage'; // Import Loginpage component
import RegistrationPage from './components/Signuppage'; // Import RegistrationPage component
import Reviews from './Reviews'; // Import Reviews component
import Rooms from './components/Rooms'; // Import Rooms component
import Resetpassword from './components/Resetpassword'; // Import Resetpassword component
import BookedRoomsPage from './components/bookedrooms'; // Import BookedRoomsPage component
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import react-router-dom components
import { PayPalScriptProvider } from '@paypal/react-paypal-js'; // Import PayPalScriptProvider

// Define the App component
function App() {
  // Return the JSX element
  return (
    // Container element with class "app"
    <div className="app">
      
      <PayPalScriptProvider options={{ "client-id": "AXeRe_K7fdrIyOam1MSWoiHpFwGEKY1I0XNUq4oal6bOMJWfgS8qkWpCGRlaWYOU3LwIrUNJ-5D94v7-" }}>
        
        <BrowserRouter>
          
          <Routes>
            // Define routes for the app
            <Route path="/" element={<Loginpage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/add" element={<Index />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/reset" element={<Resetpassword />} />
            <Route path="/bookedrooms" element={<BookedRoomsPage />} />
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </div>
  );
}

// Export the App component as the default export
export default App;