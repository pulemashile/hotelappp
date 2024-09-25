import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedRoomsFromFirestore, updateRoomInFirestore, deleteRoomFromFirestore } from '../components/data';
import { Avatar } from '@nextui-org/avatar';
import AreaChart from './AreaChart';
import { RiFolder4Line,RiDeleteBin4Fill,RiEditCircleFill,RiSave2Fill } from '@remixicon/react';

function BookedRooms() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.data);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ bookitem: '', amount: '' });

  useEffect(() => {
    dispatch(fetchBookedRoomsFromFirestore());
  }, [dispatch]);

  const handleEdit = (id, room) => {
    setEditingId(id);
    setEditForm({ bookitem: room.bookitem, amount: room.amount });
  };

  const handleEditSubmit = (id) => {
    dispatch(updateRoomInFirestore(id, editForm));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteRoomFromFirestore(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No booked rooms available.</p>;

  return (
    <div className="flex">
      <div className="bg-black h-[90vh] w-[200px] mr-3 rounded-md">
        <h1 className='text-white flex gap-2 mt-3' > Sidebar <RiFolder4Line></RiFolder4Line></h1>
        <ul className="text-white p-3 list-disc">
          <li>Room availability</li>
          <li>Staff</li>
          <li>Bookings</li>
          <li>Logout</li>
        </ul>
      </div>

      <div className="flex-1 content flex flex-col items-center">
        <h1 className="text-4xl text-center mb-5">Welcome back, Admin</h1>
        <div className="flex gap-3 mb-5">
          <div className="box2">
            <h2>Check In</h2>
            <h3>Arrival Date</h3>
          </div>
          <div className="box2">
            <h2>Check In</h2>
            <h3>Arrival Date</h3>
          </div>
          <div className="box2">
            <h2>Check In</h2>
            <h3>Arrival Date</h3>
          </div>
        </div>

        <h1 className="mt-8">My Company Performance Chart</h1>
       <div className='h-[30dvh] w-[50dvh]'><AreaChart  />
       </div> 

        <h2 className="mt-8 mb-4">Booked Rooms</h2>
        <table className="table-auto w-full max-w-4xl border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Room</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((room) => (
              <tr key={room.id} className="border-t">
                {editingId === room.id ? (
                  <>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        value={editForm.bookitem}
                        onChange={(e) => setEditForm({ ...editForm, bookitem: e.target.value })}
                        className="border border-gray-300 p-1"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={editForm.amount}
                        onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
                        className="border border-gray-300 p-1"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => handleEditSubmit(room.id)}
                      >
                        <RiSave2Fill/>
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border px-4 py-2">{room.bookitem}</td>
                    <td className="border px-4 py-2">R {room.amount}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                        onClick={() => handleEdit(room.id, room)}
                      >
                        <RiEditCircleFill/>
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => handleDelete(room.id)}
                      >
                        <RiDeleteBin4Fill/>
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-3 items-center mt-5">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar name="Junior" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar name="Jane" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar name="Joe" />
        </div>
      </div>
    </div>
  );
}

export default BookedRooms;
