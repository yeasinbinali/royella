import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        const name = data.name;
        const photo = data.photo;
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(result => {
                updateUser(name, photo)
                    .then(() => { })
                    .catch((error) => {
                        const errorMessage = error.message;
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: { errorMessage }
                        });
                    })
                navigate('/');
                Swal.fire({
                    title: "Create new user successfully",
                    icon: "success"
                })
            })
            .catch(error => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: { errorMessage }
                });
            })
    }

    return (
        <div className='mt-10 mb-20 w-[90%] md:w-1/2 lg:w-1/3 p-10 mx-auto bg-[whitesmoke]'>
            <Helmet>
                <title>Royella | Register</title>
            </Helmet>
            <div className='p-10 bg-simple w-[120px] h-[120px] rounded-full mx-auto text-center'><img src="https://i.ibb.co/KwZnwMt/section-shape1.png" alt="" /></div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl title-font text-center my-8'>Register</h1>
            <form className='mb-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full mx-auto mb-5'>
                    <label>Full Name</label><br />
                    <input placeholder='Your Name' type='text' required className='border-[1px] w-full p-1' {...register("name")} />
                </div>
                <div className='w-full mx-auto mb-5'>
                    <label>Photo URL</label><br />
                    <input placeholder='Your Photo' type='text' required className='border-[1px] w-full p-1' {...register("photo")} />
                </div>
                <div className='w-full mx-auto mb-5'>
                    <label>Email</label><br />
                    <input placeholder='Your Email' type='email' required className='border-[1px] w-full p-1' {...register("email")} />
                </div>
                <div className='w-full mx-auto mb-6'>
                    <label>Password</label><br />
                    <input placeholder='Your Password' type='password' required className='border-[1px] w-full p-1' {...register("password")} />
                </div>
                <input className='btn bg-main text-complex w-full btn-sm hover:bg-simple' type="submit" />
            </form>
            <p className='my-5 text-center'>Already have an account ? <span className='font-bold'><Link to='/login'>Login</Link></span></p>
        </div>
    );
};

export default Register;