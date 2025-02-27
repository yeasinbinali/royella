import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const { signInUser, googleSignIn } = useContext(AuthContext);

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    title: "Login user successfully",
                    icon: "success"
                  })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: {errorMessage}
                  });
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                Swal.fire({
                    title: "Google sign-in successfully",
                    icon: "success"
                  })
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: {errorMessage}
                  });
            })
    }

    return (
        <div className='mt-10 mb-20 w-[90%] md:w-1/2 lg:w-1/3 p-10 mx-auto bg-[whitesmoke]'>
            <Helmet>
                <title>Royella | Login</title>
            </Helmet>
            <div className='p-10 bg-simple w-[120px] h-[120px] rounded-full mx-auto text-center'><img src="https://i.ibb.co/KwZnwMt/section-shape1.png" alt="" /></div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl title-font text-center my-8'>Login</h1>
            <form className='mb-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full mx-auto mb-5'>
                    <label>Email</label><br />
                    <input placeholder='Your Email' required type='email' className='border-[1px] w-full p-1' {...register("email")} />
                </div>
                <div className='w-full mx-auto mb-6'>
                    <label>Password</label><br />
                    <input placeholder='Your Password' required type='password' className='border-[1px] w-full p-1' {...register("password")} />
                </div>
                <input className='btn bg-main text-complex w-full btn-sm hover:bg-simple' type="submit" />
            </form>
            <div className="divider">OR</div>
            <div className='flex justify-center mt-5'>
                <FcGoogle onClick={handleGoogleSignIn} className='text-3xl my-anchor-element' />
                <Tooltip anchorSelect=".my-anchor-element" place="top">
                    Google Sign-in
                </Tooltip>
            </div>
            <p className='my-5 text-center'>New to Royella ? <span className='font-bold'><Link to='/register'>Register</Link></span></p>
        </div>
    );
};

export default Login;