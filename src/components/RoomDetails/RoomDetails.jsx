import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
    const room = useLoaderData();
    console.log(room);
    return (
        <div>
            <h1>Room details</h1>
        </div>
    );
};

export default RoomDetails;