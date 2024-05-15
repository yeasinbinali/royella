import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';


const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/rooms')
            .then(res => {
                setRooms(res.data)
            })
    }, [])

    return (
        <div className='mb-20 w-[90%] mx-auto'>
            <div className='mb-10 w-[50%] mx-auto text-center'>
                <h2 className='text-5xl mb-5 title-font'>Featured Rooms</h2>
                <p>Welcome to Royella, where comfort meets convenience. Discover a curated selection of hotel rooms designed to provide a home away from home experience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {
                    rooms.slice(0, 6).map(room => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;