import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../config/firebase.js';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// Define the auth slice
export const authSlice = createSlice({
  name: "auth", // Name of the slice
  initialState: {
    user: {
      email: "", // Initial email value
      password: "" // Initial password value
    }
  },
  reducers: {
    signUp: (state, action) => {
      const { email, password } = action.payload; // Destructure email and password from payload
      
      // Firebase call for sign-up
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Registered successfully"); // Show success alert
        })
        .catch((error) => {
          console.log(error.message); // Log error message
        });
    },
    signingOut: () => {
      // Firebase call for signing out
      signOut(auth)
        .then(() => {
          return true; // Return true on success
        })
        .catch((error) => {
          // Handle error
        });
    }
  }
});

// Export the actions and reducer
export const { signUp, signingOut } = authSlice.actions;
export default authSlice.reducer;