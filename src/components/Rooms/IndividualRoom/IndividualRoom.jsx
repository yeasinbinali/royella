import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const IndividualRoom = ({ room }) => {
    const [reviews, setReviews] = useState([]);
    const { image, price_per_night, _id } = room;

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => {
                const allReviews = res.data;
                const specificRoomById = allReviews.filter(allReview => allReview.id === _id);
                setReviews(specificRoomById);
            })
    }, [])

    return (
        <Link to={`/room/${_id}`}>
            <div className='border-[1px] relative'>
                <img className='w-[400px] h-[250px]' src={image} alt="image" />
                <div className='bg-simple text-complex absolute w-1/2 p-2 top-0 right-0'>
                    <p className='flex justify-center items-center text-3xl font-bold'><FaDollarSign /> {price_per_night} <sub className='text-[10px]'> / Per Night</sub></p>
                </div>
                <div className='bg-main text-complex absolute w-1/3 p-1 bottom-0 left-0'>
                    <p className='flex justify-center items-center font-bold'>Reviews: {reviews.length}</p>
                </div>
            </div>
        </Link>
    );
};

export default IndividualRoom;