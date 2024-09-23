

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedRoomsFromFirestore } from '../components/data';
import {Avatar} from "@nextui-org/avatar";



import AreaChart from './AreaChart';
import LineGraph from './AreaChart';

function BookedRooms() {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchBookedRoomsFromFirestore());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='flex'>
            {/* {data.map((room) => (
        <div key={room.id}>
          <h3>{room.bookitem}</h3>
          <p>Price: R {room.amount}</p>
          
        </div>
      ))} */}
      <div>

        
      </div>
            <div className=' bg-black h-[70dvh] w-[200px] mr-3'>
                <h1>sidebar</h1>
                <ul className='text-white p-3'>
                    <li>room availabity</li>
                    <li>staff</li>
                    <li>bookings</li>
                    <li>logout</li>

                </ul>



            </div>

            <div className='header'>
                <h1 className='mb-5 text-2xl text-center'>welcome back admin</h1>

                <div className='flex gap-3'>
                 <div className='box2'>
            <h1 className='text-black'>check in</h1>
            <br></br>
            <h2 className='text-black'>Arrival Date</h2>
            </div>
            <div className='box2'>
            <h1 className='text-black'>check in</h1>
            <br></br>
            <h2 className='text-black'>Arrival Date</h2>
            </div>
            <div className='box2'>
            <h1 className='text-black'>check in</h1>
            <br></br>
            <h2 className='text-black'>Arrival Date</h2>
            </div>
            <div className='box2'>
            <h1 className='text-black'>check in</h1>
            <br></br>
            <h2 className='text-black'>Arrival Date</h2>
            </div>
            </div>
            <div className='pt-8'>
      <h1 className='mt-8'>My Company Performance Chart</h1>
      {/* <LineGraph /> */}  <div className="flex gap-3 items-center">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar name="Junior" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar name="Jane" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar name="Joe" />
    </div>
    </div>
            </div>

           


        </div>
    );
}

export default BookedRooms;
