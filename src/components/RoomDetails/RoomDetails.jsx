import React, { useContext, useEffect } from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { FaDollarSign } from 'react-icons/fa6';
import { MdEventAvailable } from 'react-icons/md';
import { SlSizeActual } from 'react-icons/sl';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaUser, FaComment, FaCalendarAlt, FaStar } from "react-icons/fa";
import axios from 'axios';
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import 'react-day-picker/dist/style.css';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const RoomDetails = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [selected, setSelected] = useState(new Date());
    const room = useLoaderData();
    const navigate = useNavigate();
    const { image, description, availability, price_per_night, size, special_offers, _id } = room;

    useEffect(() => {
        axios.get('https://royella-server.vercel.app/reviews')
            .then(res => {
                const allReviews = res.data;
                const specificRoomById = allReviews.filter(allReview => allReview.id === _id);
                setReviews(specificRoomById);
            })
    }, [])

    const isPastDays = (day) => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        return day < yesterday;
    }

    const handleBookingConfirm = (id) => {
        const email = user.email;
        const userName = user.displayName;
        axios.get(`https://royella-server.vercel.app/rooms/${id}`)
            .then(res => {
                const roomData = res.data;
                const date = format(selected, 'PP');
                const newData = { roomData, date, userName, email };

                const bookedRoom = {
                    availability: 'Booked'
                }

                axios.post('https://royella-server.vercel.app/bookingRoom', newData)
                    .then(res => {

                        fetch(`https://royella-server.vercel.app/rooms/${id}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(bookedRoom)
                        })
                            .then(res => res.json())
                            .then(() => {})

                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: `You have booked a room on ${newData.date}`,
                                icon: "success"
                            })
                            navigate('/booking');
                        }
                    })
            })
    }

    let footer = <p className='mt-2'>Please pick a day</p>

    if (selected) {
        footer = <p className='mt-2'>You selected {format(selected, 'PP')}</p>
    }

    return (
        <div className='mt-10 mb-20 w-[90%] mx-auto'>
            <Helmet>
                <title>Royella | Room Details</title>
            </Helmet>
            <div className='w-[90%] md:w-[75%] lg:w-1/3 mx-auto relative border-2 border-[whitesmoke] shadow-lg'>
                <img src={image} alt="room" />
                <div className='bg-simple text-complex absolute w-1/2 p-2 top-0 right-0'>
                    <p className='flex justify-center items-center text-3xl font-bold'><FaDollarSign /> {price_per_night} <sub className='text-[10px]'> / Per Night</sub></p>
                </div>
                <div className='p-3'>
                    <h1 className='text-xl md:text-2xl font-bold'>{description}</h1>
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
                    <div className='w-full md:w-[60%] lg:w-[80%] mx-auto'>
                        <DayPicker
                            mode='single'
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                            showOutsideDays
                            disabled={isPastDays}
                        />
                    </div>
                    {
                        availability === 'Available' ? <>
                            <button className='btn bg-main text-white border-none btn-sm mt-6 hover:bg-simple w-full' onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <img className='rounded-lg mt-5' src={image} alt="" />
                                    <h1 className='text-xl font-bold mt-2'>{description}</h1>
                                    <div className='flex justify-between items-center mt-2'>
                                        <p className='flex items-center'><SlSizeActual className='mr-2 text-xl' /> {size}</p>
                                        <p className='flex justify-center items-center text-xl font-bold'><FaDollarSign /> {price_per_night} <sub className='text-[10px]'> / Per Night</sub></p>
                                    </div>
                                    <div className="text-center">
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