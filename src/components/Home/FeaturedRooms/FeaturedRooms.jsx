import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        axios.get('./rooms.json')
            .then(res => {
                setRooms(res.data)
            })
    }, [])
    console.log(rooms);

    return (
        <div className='mb-20 w-[90%] mx-auto'>
            <div className='mb-10 w-[50%] mx-auto text-center'>
                <h2 className='text-5xl mb-5 title-font'>Featured Rooms</h2>
                <p className='simple-font'>Welcome to Royella, where comfort meets convenience. Discover a curated selection of hotel rooms designed to provide a home away from home experience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {
                    rooms.map(room => <div key={room.id}>
                        <img className='w-[400px] h-[250px]' src={room.room.image} alt="image" />
                        <div>
                            <h2 className='text-xl font-bold simple-font'>{room.room.description}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;