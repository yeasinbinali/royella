import React from 'react';
import { SlSizeActual } from "react-icons/sl";
import { FaDollarSign } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";
import { Link } from 'react-router-dom';


const Room = ({ room }) => {
    const { image, description, size, price_per_night, availability, _id } = room;
    return (
        <div className='border-[1px] border-simple relative'>
            <img className='w-[400px] h-[250px]' src={image} alt="image" />
            <div className='bg-simple text-complex absolute w-1/2 p-2 top-0 right-0'>
                <p className='flex justify-center items-center text-3xl font-bold'><FaDollarSign /> {price_per_night} <sub className='text-[10px]'> / Per Night</sub></p>
            </div>
            <div className='p-3'>
                <h2 className='text-xl font-bold my-2'>{description}</h2>
                <div className='flex justify-between items-center'>
                    <p className='flex items-center'><SlSizeActual className='mr-2 text-xl' /> {size}</p>
                    {
                        availability === 'Available' ? <p className='bg-green-600 text-complex p-2 flex items-center'><MdEventAvailable className='text-xl mr-2' />{availability}</p> : <p className='bg-red-600 text-complex p-2 flex items-center'><CgUnavailable className='text-xl mr-2' />{availability}</p>
                    }
                </div>
                <Link to={`/room/${_id}`}><button className='btn bg-main text-white border-none w-full btn-sm mt-6 hover:bg-simple'>See Details</button></Link>
            </div>
        </div>
    );
};

export default Room;