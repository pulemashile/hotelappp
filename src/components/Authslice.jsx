import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../config/firebase.js';
import { createUserWithEmailAndPassword,signOut } from 'firebase/auth';

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      password: ""
    }
  },
  reducers: {
    signUp: (state, action) => {
      const { email, password } = action.payload; // Destructure email and password from payload
      
      // Firebase call for sign-up
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Registered successfully");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
      signingOut:()=>{
        signOut(auth).then(()=>{
          return true
        })
          .catch((error)=>{});

      }
  }
});

export const { signUp,signingOut } = authSlice.actions;
export default authSlice.reducer;
