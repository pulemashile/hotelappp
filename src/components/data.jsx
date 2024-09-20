import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const dataslice = createSlice({
    name: "data",
    initialState,
    reducers: {
        fetchdatastate(state) {
            state.loading = true;
            state.error = null;
        },
        fetchdatasuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchdatafailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchdatastate, fetchdatasuccess, fetchdatafailure } = dataslice.actions;

export const fetchBookedRoomsFromFirestore = () => async (dispatch) => {
    dispatch(fetchdatastate());
    try {
        const q = query(collection(db, "bookings"), where("isBooked", "==", true));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch(fetchdatasuccess(data));
    } catch (error) {
        console.error("Error fetching booked rooms: ", error);
        dispatch(fetchdatafailure(error.message));
    }
};

export default dataslice.reducer; // Don't forget to export the reducer
