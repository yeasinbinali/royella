import React from 'react';
import Banner from '../Banner/Banner';
import Direction from '../Direction/Direction';
import FeaturedRooms from '../FeaturedRooms/FeaturedRooms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Direction></Direction>
            <FeaturedRooms></FeaturedRooms>
        </div>
    );
};

export default Home;