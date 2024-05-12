import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { FaDollarSign } from 'react-icons/fa6';
import { MdEventAvailable } from 'react-icons/md';
import { SlSizeActual } from 'react-icons/sl';
import { useLoaderData } from 'react-router-dom';
import { FaUser, FaComment, FaCalendarAlt, FaStar } from "react-icons/fa";
import axios from 'axios';


const RoomDetails = () => {
    const room = useLoaderData();
    const { image, description, availability, price_per_night, size, special_offers, reviews, _id } = room;

    const handleBookingConfirm = (id) => {
        console.log('clicked', id);
        // axios.get(`http://localhost:5000/rooms/${id}`)
        //     .then(res => {
        //         const room = res.data;
        //         axios.post('http://localhost:5000/bookingRoom', room)
        //             .then(res => {
        //                 console.log(res.data);
        //             })
        //     })
    }

    return (
        <div className='mt-10 mb-20 w-[90%] mx-auto'>
            <div className='w-1/3 mx-auto relative border-2 border-[whitesmoke] shadow-lg'>
                <img src={image} alt="room" />
                <div className='bg-simple text-complex absolute w-1/2 p-2 top-0 right-0'>
                    <p className='flex justify-center items-center text-3xl font-bold'><FaDollarSign /> {price_per_night} <sub className='text-[10px]'> / Per Night</sub></p>
                </div>
                <div className='p-3'>
                    <h1 className='text-2xl font-bold'>{description}</h1>
                    <div className='flex justify-between items-center my-3'>
                        <p className='flex items-center'><SlSizeActual className='mr-2 text-xl' /> {size}</p>
                        {
                            availability === 'Available' ? <p className='bg-green-600 text-complex p-2 flex items-center'><MdEventAvailable className='text-xl mr-2' />{availability}</p> : <p className='bg-red-600 text-complex p-2 flex items-center'><CgUnavailable className='text-xl mr-2' />{availability}</p>
                        }
                    </div>
                    <p>Special Offer: <span className='font-bold'>{special_offers ? special_offers : 'Not Available'}</span></p>
                    <div className='mt-3 border-[1px] border-simple'>
                        <h1 className='text-xl p-3 font-bold'>Reviews: </h1>
                        <div className='px-3 pb-2'>
                            {
                                reviews.length === 0 ? 'No review yet' : reviews.map((review, idx) => <div className='pb-3' key={idx}>
                                    <div className='border-[1px] border-simple p-3'>
                                        <h3 className='flex items-center'><FaUser className='mr-1' /> {review.user}</h3>
                                        <p className='flex items-center my-1'><FaComment className='mr-1' /> {review.comment}</p>
                                        <div className='flex justify-between items-center'>
                                            <p className='flex items-center'><FaCalendarAlt className='mr-1' /> {review.timestamp}</p>
                                            <p className='flex items-center'><FaStar className='mr-1' /> {review.rating}</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    {
                        availability === 'Available' ? <>
                            <button className='btn bg-main text-white border-none btn-sm mt-6 hover:bg-simple w-full' onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <img className='rounded-lg' src={image} alt="" />
                                    <h1 className='text-xl font-bold mt-2'>{description}</h1>
                                    <div className='flex justify-between items-center mt-2'>
                                        <p className='flex items-center'><SlSizeActual className='mr-2 text-xl' /> {size}</p>
                                        <p className='flex justify-center items-center text-xl font-bold'><FaDollarSign /> {price_per_night} <sub className='text-[10px]'> / Per Night</sub></p>
                                    </div>
                                    <div className="modal-action text-center">
                                        <button onClick={() => handleBookingConfirm(_id)} className='btn bg-main text-white border-none btn-sm mt-4 hover:bg-simple'>Booking confirm</button>
                                    </div>
                                </div>
                            </dialog>
                        </> : <button className='btn bg-main text-white border-none w-full btn-sm mt-6 cursor-not-allowed hover:bg-simple'>Already Booked</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;