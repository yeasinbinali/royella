import React from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <div className='mt-10 mb-20 w-1/3 p-10 mx-auto bg-[whitesmoke]'>
            <h1 className='text-5xl title-font text-center my-8'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full mx-auto mb-5'>
                    <label>Email</label><br />
                    <input placeholder='Your Email' className='border-[1px] w-full p-1' {...register("email")} />
                </div>
                <div className='w-full mx-auto mb-6'>
                    <label>Password</label><br />
                    <input placeholder='Your Password' className='border-[1px] w-full p-1' {...register("password")} />
                </div>
                <input className='btn bg-main text-complex w-full btn-sm hover:bg-simple' type="submit" />
            </form>
            <p className='my-5 text-center'>New to Royella ? <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;