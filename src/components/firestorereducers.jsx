// src/components/firestore.js
import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const firestoreReducer = createSlice({
  name: "db",
  initialState: {
    book: [],
    amount: 0,
  },
  reducers: {
    addBooking: (state, action) => {
      state.book.push(action.payload); // Updates Redux state with the new booking
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { addBooking } = firestoreReducer.actions;
export default firestoreReducer.reducer;

export const addBookingToFirestore = (bookingData) => async (dispatch) => {
  try {
    const bookingsCollection = collection(db, "bookings");
    await addDoc(bookingsCollection, bookingData);
    dispatch(addBooking(bookingData)); // Corrected to dispatch the addBooking action
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
