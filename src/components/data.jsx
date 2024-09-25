import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, query, where, updateDoc, deleteDoc, doc } from "firebase/firestore";
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
        updatedata(state, action) {
            const updatedRoom = action.payload;
            state.data = state.data.map((room) => 
                room.id === updatedRoom.id ? updatedRoom : room
            );
        },
        deletedata(state, action) {
            const roomId = action.payload;
            state.data = state.data.filter((room) => room.id !== roomId);
        },
    },
});

export const { fetchdatastate, fetchdatasuccess, fetchdatafailure, updatedata, deletedata } = dataslice.actions;

// Fetch booked rooms
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

// Update room in Firestore
export const updateRoomInFirestore = (roomId, updatedRoomData) => async (dispatch) => {
    try {
        const roomRef = doc(db, "bookings", roomId);
        await updateDoc(roomRef, updatedRoomData);
        dispatch(updatedata({ id: roomId, ...updatedRoomData }));
    } catch (error) {
        console.error("Error updating room: ", error);
        dispatch(fetchdatafailure(error.message));
    }
};

// Delete room from Firestore
export const deleteRoomFromFirestore = (roomId) => async (dispatch) => {
    try {
        const roomRef = doc(db, "bookings", roomId);
        await deleteDoc(roomRef);
        dispatch(deletedata(roomId));
    } catch (error) {
        console.error("Error deleting room: ", error);
        dispatch(fetchdatafailure(error.message));
    }
};

export default dataslice.reducer;
