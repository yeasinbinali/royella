import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mb-20">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/D1zk7x9/slider-image-1.jpg" className="banner-img w-full" />
                <div className='absolute w-1/2 ml-28 mt-28'>
                    <h1 className='text-6xl text-complex font-bold'>Your Gateway to Tailored Accommodations</h1>
                    <p className='text-xl text-complex my-10'>Explore a world of personalized comfort with Royella. Our platform offers a diverse range of hotel rooms suited to your unique preferences and needs. From cozy boutique stays to spacious suites with panoramic views, find the perfect room for your next adventure with ease.</p>
                    <button className='btn bg-main text-complex border-none text-xl font-bold'>Get in touch</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-10">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/NSq734c/slider-image-2.jpg" className="banner-img w-full" />
                <div className='absolute w-1/2 ml-24 mt-28'>
                    <h1 className='text-6xl text-complex font-bold'>Where Every Room Feels Like Home</h1>
                    <p className='text-xl text-complex my-10'>Welcome to Royella, where comfort meets convenience. Discover a curated selection of hotel rooms designed to provide a home away from home experience. Whether you're traveling for business or leisure, find the ideal room to unwind and recharge after a day of exploration.</p>
                    <button className='btn bg-main text-complex border-none text-xl font-bold'>Get in touch</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-10">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/vhYPBFZ/slider-image-3.jpg" className="banner-img w-full" />
                <div className='absolute w-1/2 ml-24 mt-28'>
                    <h1 className='text-6xl text-complex font-bold'>Elevate Your Stay, One Room at a Time</h1>
                    <p className='text-xl text-complex my-10'>Elevate your travel experience with Royella. Our platform offers a seamless booking process for a wide range of hotel rooms, ensuring you find the perfect match for your preferences and budget. From chic urban hideaways to serene seaside retreats, unlock a world of possibilities and make your next stay unforgettable.</p>
                    <button className='btn bg-main text-complex border-none text-xl font-bold'>Get in touch</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-10">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/NSq734c/slider-image-2.jpg" className="banner-img w-full" />
                <div className='absolute w-1/2 ml-24 mt-28'>
                    <h1 className='text-6xl text-complex font-bold'>Where Your Perfect Room Awaits</h1>
                    <p className='text-xl text-complex my-10'>Fulfill your SuiteDreams with our platform dedicated to exceptional hotel rooms. Whether you desire a lavish suite or a charming boutique room, we've got you covered. Discover the perfect blend of style, comfort, and luxury, and make your next stay a dream come true.</p>
                    <button className='btn bg-main text-complex border-none text-xl font-bold'>Get in touch</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-10">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;