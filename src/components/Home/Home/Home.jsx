import React from 'react';
import Banner from '../Banner/Banner';
import Direction from '../Direction/Direction';
import FeaturedRooms from '../FeaturedRooms/FeaturedRooms';
import NewsLetter from '../NewsLetter/NewsLetter';
import UserReviews from '../UserReviews/UserReviews';
import SpecialOfferModal from '../SpecialOfferModal/SpecialOfferModal';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Direction></Direction>
            <FeaturedRooms></FeaturedRooms>
            <NewsLetter></NewsLetter>
            <UserReviews></UserReviews>
            <SpecialOfferModal></SpecialOfferModal>
        </div>
    );
};

export default Home;