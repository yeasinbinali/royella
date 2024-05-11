import React from 'react';
import { FaDollarSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const IndividualRoom = ({ room }) => {
    const { image, price_per_night } = room.room;
    return (
        <Link to={`/room/${room._id}`}>
            <div className='border-[1px] relative'>
                <img className='w-[400px] h-[250px]' src={image} alt="image" />
                <div className='bg-simple text-complex absolute w-1/2 p-2 top-0 right-0'>
                    <p className='flex justify-center items-center text-3xl font-bold'><FaDollarSign /> {price_per_night} <sub className='text-[10px]'> / Per Night</sub></p>
                </div>
            </div>
        </Link>
    );
};

export default IndividualRoom;