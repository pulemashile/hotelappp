
import React from 'react';
import Index from './index';
import Loginpage from './/components/Loginpage';
import RegistrationPage from './/components/Signuppage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reviews from './Reviews';
import Rooms from './components/Rooms';
import Resetpassword from './components/Resetpassword';
import BookedRoomsPage from './components/bookedrooms';

function App() {
  return (
    <div className="app">
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
      
    </div>
  );
}

export default App;
