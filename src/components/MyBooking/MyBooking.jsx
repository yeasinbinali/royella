import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { MdDelete } from "react-icons/md";
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import 'react-day-picker/dist/style.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [selected, setSelected] = useState('');
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://royella-server.vercel.app/bookingRoom?email=${user.email}`, {
            withCredentials: true
        })
            .then(res => {
                setBookings(res.data)
            })
    }, [])

    const handleUpdated = (id) => {
        const room = {
            date: format(selected, 'PP')
        }
        fetch(`https://royella-server.vercel.app/bookingRoom/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(room)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update date successfully",
                        icon: "success"
                    })
                    navigate('/');
                }
            })
    }

    const handleDelete = (id) => {
        fetch(`https://royella-server.vercel.app/bookingRoom/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        if (data.deletedCount > 0) {
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining);
                        }
                    }
                });
            })
    }

    const isPastDays = (day) => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        return day < yesterday;
    }

    let footer = <p className='mt-2'>Please pick a day</p>

    if (selected) {
        footer = <p className='mt-2'>You selected {format(selected, 'PP')}</p>
    }

    return (
        <div className='w-[90%] mx-auto mt-10 mb-20'>
            <Helmet>
                <title>Royella | My Booking</title>
            </Helmet>
            {
                bookings.length === 0 ? <div className='my-10 text-center'>
                    <p className='text-xl font-bold'>You have no booking room</p>
                    <Link to='/rooms'><button className='btn btn-sm bg-main border-none mt-3 text-complex'>Book Now</button></Link>
                </div> :
                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl title-font text-center mb-10'>Booking Room</h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className='border-[1px] border-[grey]'>
                                    <tr>
                                        <th></th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <hr />
                                {
                                    bookings.map(booking => <tbody>
                                        <tr key={booking._id} className="mt-2 border-[1px] border-[grey]">
                                            <th><button onClick={() => handleDelete(booking._id)} className='bg-simple p-2 rounded-full hover:bg-red-600'><MdDelete className='text-xl text-complex' /></button></th>
                                            <td className='text-sm md:text-md font-bold'>{booking.roomData.description}</td>
                                            <td>${booking.roomData.price_per_night}</td>
                                            <td className='font-bold'>{booking.date}</td>
                                            <td>
                                                <button className='btn bg-green-600 text-white border-none btn-sm hover:bg-simple' onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button>
                                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div className='w-[90%] md:w-[60%] lg:w-[70%] mx-auto'>
                                                            <DayPicker
                                                                mode='single'
                                                                selected={selected}
                                                                onSelect={setSelected}
                                                                footer={footer}
                                                                showOutsideDays
                                                                disabled={isPastDays}
                                                            />
                                                        </div>
                                                        <div className="text-center">
                                                            <button onClick={() => handleUpdated(booking._id)} className='btn bg-main text-white border-none btn-sm mt-4 hover:bg-simple'>Updated date</button>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </td>
                                            <td><Link to={`/reviews/${booking.roomData._id}`}><button className='btn btn-sm bg-main text-complex border-none hover:bg-simple'>Review</button></Link></td>
                                            <hr />
                                        </tr>
                                    </tbody>
                                    )
                                }
                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyBooking;