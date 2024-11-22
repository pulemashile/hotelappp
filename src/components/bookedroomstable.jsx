// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getBookingsFromFirestore, deleteBookingFromFirestore, updateBookingInFirestore } from './firestorereducers';

// function BookingTable() {
//   const dispatch = useDispatch();
//   const bookings = useSelector((state) => state.firestore.bookings); // Assuming bookings are in your Redux state
//   const [editingId, setEditingId] = useState(null);
//   const [editForm, setEditForm] = useState({ bookitem: '', amount: '' });

//   useEffect(() => {
//     dispatch(getBookingsFromFirestore()); // Fetch bookings on component mount
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteBookingFromFirestore(id)); // Delete booking from Firestore
//   };

//   const handleEdit = (id, booking) => {
//     setEditingId(id); // Set the current booking being edited
//     setEditForm({ bookitem: booking.bookitem, amount: booking.amount });
//   };

//   const handleEditSubmit = (id) => {
//     dispatch(updateBookingInFirestore(id, editForm)); // Update booking in Firestore
//     setEditingId(null); // Reset editing state
//   };

//   return (
//     <div>
//       <h2 className="text-3xl text-center mb-6">Bookings</h2>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">Room</th>
//             <th className="border border-gray-300 px-4 py-2">Price</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((room) => (
//             <tr key={room.id} className="border-t">
//               {editingId === room.id ? (
//                 <>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="text"
//                       value={editForm.bookitem}
//                       onChange={(e) => setEditForm({ ...editForm, bookitem: e.target.value })}
//                       className="border border-gray-300 p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       value={editForm.amount}
//                       onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
//                       className="border border-gray-300 p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleEditSubmit(room.id)}>
//                       Save
//                     </button>
//                   </td>
//                 </>
//               ) : (
//                 <>
//                   <td className="border px-4 py-2">{room.bookitem}</td>
//                   <td className="border px-4 py-2">R {room.amount}</td>
//                   <td className="border px-4 py-2">
//                     <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2" onClick={() => handleEdit(room.id, room)}>
//                       Edit
//                     </button>
//                     <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(room.id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BookingTable;
