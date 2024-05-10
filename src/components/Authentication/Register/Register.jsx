import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div className='mt-10 mb-20 w-1/3 p-10 mx-auto bg-[whitesmoke]'>
            <div className='p-10 bg-simple w-[120px] h-[120px] rounded-full mx-auto text-center'><img src="https://i.ibb.co/KwZnwMt/section-shape1.png" alt="" /></div>
            <h1 className='text-5xl title-font text-center my-8'>Register</h1>
            <form className='mb-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full mx-auto mb-5'>
                    <label>Full Name</label><br />
                    <input placeholder='Your Name' type='text' className='border-[1px] w-full p-1' {...register("name")} />
                </div>
                <div className='w-full mx-auto mb-5'>
                    <label>Photo URL</label><br />
                    <input placeholder='Your Photo' type='text' className='border-[1px] w-full p-1' {...register("photo")} />
                </div>
                <div className='w-full mx-auto mb-5'>
                    <label>Email</label><br />
                    <input placeholder='Your Email' type='email' className='border-[1px] w-full p-1' {...register("email")} />
                </div>
                <div className='w-full mx-auto mb-6'>
                    <label>Password</label><br />
                    <input placeholder='Your Password' type='password' className='border-[1px] w-full p-1' {...register("password")} />
                </div>
                <input className='btn bg-main text-complex w-full btn-sm hover:bg-simple' type="submit" />
            </form>
            <p className='my-5 text-center'>Already have an account ? <span className='font-bold'><Link to='/login'>Login</Link></span></p>
        </div>
    );
};

export default Register;