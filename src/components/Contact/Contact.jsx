import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();
    console.log(form.current);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_0botnrf', 'template_qgccbi6', form.current, {
            publicKey: '8upjjrEmRmKnnYtYH',
          })
          .then(
            () => {
              Swal.fire({
                title: 'Your message sent successfully!',
                icon: 'success'
              })
              navigate('/');
            },
            (error) => {
              Swal.fire({
                title: `${error.text}`,
                icon: 'error'
              })
            },
          );
    };
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
                <form ref={form} onSubmit={sendEmail} className='bg-simple w-[90%] md:w-[75%] lg:w-[50%] mt-10 md:mt-0 mx-auto p-6'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl text-complex text-center title-font mb-10'>GET IN TOUCH</h1>
                    <input className='w-full p-2 mb-5' type="text" name='name' placeholder='Your Name' />
                    <input className='w-full p-2 mb-5' type="text" name='email' placeholder='Your Email' />
                    <input className='w-full p-2 mb-5' type="text" name='subject' placeholder='Subject' />
                    <textarea className='w-full p-2 mb-5' type="text" name='message' placeholder='Write a message' />
                    <input className='btn bg-main text-complex border-none rounded-none btn-sm w-full mb-5' type='submit' value='Sent Message' />
                </form>
            </div>
        </div>
    );
};

export default Contact;