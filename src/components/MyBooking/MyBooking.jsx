import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { MdDelete } from "react-icons/md";

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/bookingRoom?email=${user.email}`)
            .then(res => {
                setBookings(res.data)
            })
    }, [])

    return (
        <div className='w-[90%] mx-auto mt-10 mb-20'>
            <h1 className='text-4xl font-bold text-center mb-10'>Booking Room</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='border-2 border-gray-200'>
                            <tr>
                                <th></th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            bookings.map(booking => <tbody>
                                <tr key={booking._id} className="bg-base-200 mt-2 border-4 border-gray-100">
                                    <th><button className='bg-simple p-2 rounded-full hover:bg-red-600'><MdDelete className='text-xl text-complex' /></button></th>
                                    <td className='text-md font-bold'>{booking.roomData.description}</td>
                                    <td>$ {booking.roomData.price_per_night}</td>
                                    <td className='font-bold'>{booking.date}</td>
                                    <td><button className='btn btn-sm bg-green-600 text-complex border-none hover:bg-simple'>Update</button></td>
                                    <td><button className='btn btn-sm bg-main text-complex border-none hover:bg-simple'>Review</button></td>
                                    <hr />
                                </tr>
                            </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;