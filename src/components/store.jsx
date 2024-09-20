// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/Authslice';
import firestoreslice from "../components/firestore";
import dataslice from "../components/data"; // Ensure this imports the reducer

export const store = configureStore({
    reducer: {
        authentication: authReducer,
        firestore: firestoreslice,
        data: dataslice, // Make sure this is the reducer
    },
});

