import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IndividualRoom from './IndividualRoom/IndividualRoom';
import noFound from '../../../images/no_data_found.png';
import { Helmet } from 'react-helmet-async';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [maxPrice, setMaxPrice] = useState('');
    const [minPrice, setMinPrice] = useState('');

    const handlePriceRange = async () => {
        const response = await axios.get(`http://localhost:5000/roomsPriceByRange?minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            params: { minPrice, maxPrice }
        })
        setRooms(response.data)
        setMaxPrice('');
        setMinPrice('');
    }

    useEffect(() => {
        axios.get('http://localhost:5000/rooms')
            .then(res => {
                setRooms(res.data)
            })
    }, [])

    return (
        <div className='mb-20 w-[90%] mx-auto mt-10'>
            <Helmet>
                <title>Royella | Rooms</title>
            </Helmet>
            <div className='mb-5 w-[90%] md:w-[75%] lg:w-[50%] mx-auto text-center'>
                <h2 className='text-5xl mb-5 title-font'>All Rooms</h2>
                <p>Welcome to Royella, where comfort meets convenience. Discover a curated selection of hotel rooms designed to provide a home away from home experience.</p>
            </div>
            <div className='text-center'>
                <input
                    type="number"
                    placeholder='Min price'
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className='border-[1px] border-simple p-1 mb-3 md:mb-0 md:mr-3'
                />
                <input
                    type="number"
                    placeholder='Max price'
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className='border-[1px] border-simple p-1'
                /><br />
                <button className='btn bg-main mt-3 btn-sm text-white hover:bg-simple' onClick={handlePriceRange}>Filter</button>
            </div>
            {
                rooms.length === 0 ? <img className='w-1/4 mx-auto' src={noFound} alt="no_data_found" /> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-5'>
                    {
                        rooms?.map(room => <IndividualRoom key={room.id} room={room}></IndividualRoom>)
                    }
                </div>
            }
        </div>
    );
};

export default Rooms;