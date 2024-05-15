import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './UserReviews.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";


const UserReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://royella-server.vercel.app/reviews')
            .then(res => {
                setReviews(res.data);
            })
    }, [])

    return (
        <div className='mb-20 w-[90%] mx-auto'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-16 title-font'>User Reviews</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide className='text-simple bg-gray-300 p-5'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-bold flex items-center'><FaUser className='mr-1' />{review.user}</h3>
                            <h3 className='text-xl font-bold flex items-center'><FaStar className='mr-1' />{review.rating}</h3>
                        </div>
                        <p className='flex items-center text-lg my-5'><FaCommentAlt className='mr-1' />{review.comment}</p>
                        <p className='flex items-center text-lg'><FaCalendarAlt className='mr1' />{review.timestamp}</p>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default UserReviews;