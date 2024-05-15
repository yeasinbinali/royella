import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div className='w-[90%] mt-10 mb-20 mx-auto bg-[whitesmoke]'>
            <Helmet>
                <title>Royella | Contact</title>
            </Helmet>
            <div className='md:flex justify-between items-center gap-10 p-8 md:10 lg:p-16'>
                <div className='w-[90%] md:w-[75%] lg:w-[50%] mx-auto'>
                    <h1 className='title-font text-3xl md:text-4xl lg:text-5xl'>Contact With US</h1>
                    <p className='text-md my-5'>At Royella, we're committed to providing you with exceptional service and support. Whether you have questions about booking a hotel, need assistance with your reservation, or have feedback to share, our team is here to help.</p>
                    <div className='mb-5'>
                        <h3>Call Us Now</h3>
                        <p className='text-lg font-bold'>+1 (555) 123-4567</p>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <h3>Sent Email</h3>
                        <p className='text-lg font-bold'>support@royella.com</p>
                    </div>
                    <hr />
                    <div className='mt-5'>
                        <h3>Our Locations</h3>
                        <p className='text-lg font-bold'>Leuven, Royella Headquarter 12, Belgium</p>
                    </div>
                </div>
                <div className='bg-simple w-[90%] md:w-[75%] lg:w-[50%] mt-10 md:mt-0 mx-auto p-6'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl text-complex text-center title-font mb-10'>GET IN TOUCH</h1>
                    <input className='w-full p-2 mb-5' type="text" placeholder='Your Name' />
                    <input className='w-full p-2 mb-5' type="text" placeholder='Your Email' />
                    <input className='w-full p-2 mb-5' type="text" placeholder='Subject' />
                    <textarea className='w-full p-2 mb-5' type="text" placeholder='Write a message' />
                    <button className='btn bg-main text-complex border-none rounded-none btn-sm w-full mb-5'>Sent Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;