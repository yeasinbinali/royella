import { Map, Marker } from 'pigeon-maps';
import React from 'react';
import { osm } from 'pigeon-maps/providers'
import { Tooltip } from 'react-tooltip';

const Direction = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-6xl text-center font-bold mb-10'>Our_Direction</h2>
            <Map provider={osm} height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Marker className='my-anchor-element' width={50} anchor={[50.879, 4.6997]} />
                <Tooltip anchorSelect=".my-anchor-element" place="top">
                    Royello | Luxury Hotel
                </Tooltip>
            </Map>
        </div>
    );
};

export default Direction;