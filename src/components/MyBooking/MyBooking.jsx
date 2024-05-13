import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    axios.get(`http://localhost:5000/bookingRoom?email=${user.email}`)
        .then(res => {
            setBookings(res.data)
        })

    return (
        <div className='w-[90%] mx-auto mt-10 mb-20'>
            <h1 className='text-4xl font-bold text-center mb-5'>Booking Room</h1>
            <div>
                {
                    bookings.map(booking => <div key={booking._id} className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="bg-base-200">
                                    <th>X</th>
                                    <td>{booking.description}</td>
                                    <td>$ {booking.price_per_night}</td>
                                    <td>{booking.date}</td>
                                    <td>Update</td>
                                    <td>Review</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBooking;