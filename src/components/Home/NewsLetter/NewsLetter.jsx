import React from 'react';
import newsletter from '../../../../images/subscribe.webp';

const NewsLetter = () => {
    return (
        <div className='mb-20 w-[90%] mx-auto md:flex justify-between items-center gap-10'>
            <div className='w-[90%] md:w-[35%] mx-auto'>
                <img src={newsletter} className='rounded-full' alt="" />
            </div>
            <div className='w-[90%] md:w-[50%] mt-10 md:mt-0 mx-auto'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl title-font'>Subscribe to our newsletter</h1>
                <p className='my-5'>Stay Ahead of the Curve with Royella's Exclusive Newsletter! Looking for the hottest hotel deals, exclusive offers, and insider updates? Look no further! Subscribe to Royella's newsletter today and unlock a world of travel possibilities!</p>
                <input type="email" className='border-[3px] w-[75%] p-2 border-[gray]' placeholder='Your E-mail' />
                <input type="submit" className='btn bg-main text-complex btn-md rounded-none mt-5 md:mt-0' />
            </div>
        </div>
    );
};

export default NewsLetter;