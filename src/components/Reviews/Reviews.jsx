import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const reviewRoom = useLoaderData();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    console.log(reviewRoom);

    const id = reviewRoom._id;

    const onSubmit = (data) => {
        const room = { ...data, id }
        axios.post('http://localhost:5000/reviews', room)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Added your review successfully",
                        icon: "success"
                      })
                    navigate('/');
                }
            })
    }

    return (
        <div className='w-[90%] mx-auto mt-10 mb-20'>
            <div className='bg-[whitesmoke] w-[50%] mx-auto p-5'>
                <h1 className='text-xl my-5 text-center'>Review for <span className='font-bold'>{reviewRoom.description}</span></h1>
                <form className='mb-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-[50%] mx-auto mb-5'>
                        <label>User</label><br />
                        <input defaultValue={user?.displayName} type='text' className='border-[1px] w-full p-1' {...register("user")} readOnly />
                    </div>
                    <div className='w-[50%] mx-auto mb-6'>
                        <label>Rating</label><br />
                        <select className='border-[1px] w-full p-1' {...register("rating")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className='w-[50%] mx-auto mb-5'>
                        <label>Timestamp</label><br />
                        <input defaultValue={new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.now())} type='text' className='border-[1px] w-full p-1' {...register("timestamp")} readOnly />
                    </div>
                    <div className='w-[50%] mx-auto mb-5'>
                        <label>Comment</label><br />
                        <textarea placeholder='Your valuable comment' type='text' className='border-[1px] w-full p-1' {...register("comment")} />
                    </div>
                    <div className='text-center'>
                        <input className='btn bg-main text-complex w-[50%] btn-sm hover:bg-simple' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reviews;