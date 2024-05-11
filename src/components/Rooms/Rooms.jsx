import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IndividualRoom from './IndividualRoom/IndividualRoom';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        axios.get('./rooms.json')
            .then(res => {
                setRooms(res.data)
            })
    }, [])
    console.log(rooms);

    return (
        <div className='mb-20 w-[90%] mx-auto mt-10'>
            <div className='mb-10 w-[50%] mx-auto text-center'>
                <h2 className='text-5xl mb-5 title-font'>All Rooms</h2>
                <p>Welcome to Royella, where comfort meets convenience. Discover a curated selection of hotel rooms designed to provide a home away from home experience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {
                    rooms.map(room => <IndividualRoom key={room.id} room={room}></IndividualRoom>)
                }
            </div>
        </div>
    );
};

export default Rooms;