import React from 'react';
import Banner from '../Banner/Banner';
import Direction from '../Direction/Direction';
import FeaturedRooms from '../FeaturedRooms/FeaturedRooms';
import NewsLetter from '../NewsLetter/NewsLetter';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Direction></Direction>
            <FeaturedRooms></FeaturedRooms>
            <NewsLetter></NewsLetter>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;