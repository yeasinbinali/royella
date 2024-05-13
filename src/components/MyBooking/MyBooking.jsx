import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { MdDelete } from "react-icons/md";
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import 'react-day-picker/dist/style.css';
import { Link, useNavigate } from 'react-router-dom';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [selected, setSelected] = useState('');
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/bookingRoom?email=${user.email}`)
            .then(res => {
                setBookings(res.data)
            })
    }, [])

    const handleUpdated = (id) => {
        const room = {
            date: format(selected, 'PP')
        }
        fetch(`http://localhost:5000/bookingRoom/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(room)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0) {
                    alert('Update date successfully')
                    navigate('/');
                }
            })
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bookingRoom/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining);
                }
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
            {
                bookings.length === 0 ? <div className='my-10 text-center'>
                    <p className='text-xl font-bold'>You have no booking room</p>
                    <Link to='/rooms'><button className='btn btn-sm bg-main border-none mt-3 text-complex'>Book Now</button></Link>
                </div> :
                    <div>
                        <h1 className='text-4xl font-bold text-center mb-10'>Booking Room</h1>
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
                                            <td className='text-md font-bold'>{booking.roomData.description}</td>
                                            <td>${booking.roomData.price_per_night}</td>
                                            <td className='font-bold'>{booking.date}</td>
                                            <td>
                                                <button className='btn bg-green-600 text-white border-none btn-sm hover:bg-simple' onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button>
                                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div className='w-[70%] mx-auto'>
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
                                            <td><Link to={`/reviews/${booking._id}`}><button className='btn btn-sm bg-main text-complex border-none hover:bg-simple'>Review</button></Link></td>
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