
import React from 'react';
import Index from './index';
import Loginpage from './components/Loginpage';
import RegistrationPage from './components/Signuppage';
import Reviews from './Reviews';
import Rooms from './components/Rooms';
import Resetpassword from './components/Resetpassword';
import BookedRoomsPage from './components/bookedrooms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'; // Import PayPalScriptProvider

function App() {
  return (
    <div className="app">
      <PayPalScriptProvider options={{ "client-id": "AXeRe_K7fdrIyOam1MSWoiHpFwGEKY1I0XNUq4oal6bOMJWfgS8qkWpCGRlaWYOU3LwIrUNJ-5D94v7-" }}>
        <BrowserRouter>
          <Routes>
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

export default App;
