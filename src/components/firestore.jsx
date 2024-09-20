import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore"; // If you need to use `collection`
import { db } from "../config/firebase"; // Ensure that you import `db` if needed

export const firestoreReducer = createSlice({
  name: "db",
  initialState: {
    book: [], // Initialize the state as an array or other appropriate type
    amount: 0 // Add the `amount` state if needed, initialize as appropriate
  },
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload); // Assuming action.payload contains the book data
    },
    setAmount: (state, action) => {
      state.amount = action.payload; // Set the `amount` from the action payload
    },
  },
});

export const { addBook, setAmount } = firestoreReducer.actions;
export default firestoreReducer.reducer;
