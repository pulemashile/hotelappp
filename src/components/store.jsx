import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/Authslice'; // Import the auth reducer
import firestoreReducer from "../components/firestore"; // Import the firestore reducer
import dataslice from "../components/data"; // Import the data reducer

// Create the Redux store
export const store = configureStore({
  reducer: {
    authentication: authReducer, // Handle authentication state
    firestore: firestoreReducer, // Handle firestore state
    data: dataslice, // Handle data state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['bookings/setBookedRooms'], // Ignore this action for non-serializable checks
        ignoredPaths: ['firestore.data.createdAt'], // Ignore the `createdAt` path in the state
      },
    }),
});

export default store;
