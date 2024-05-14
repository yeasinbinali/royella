import React from 'react';
import error from '../../../images/error.gif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-[90%] mx-auto text-center'>
            <img className='w-1/2 mx-auto' src={error} alt="" />
            <Link to='/'><button className='btn btn-sm bg-main text-complex mt-5'>Go back</button></Link>
        </div>
    )
}

export default ErrorPage;