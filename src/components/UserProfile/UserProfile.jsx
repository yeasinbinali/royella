import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogoutUser = () => {
        logoutUser()
            .then(() => {
                alert('logout');
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='mt-10 mb-20 w-1/5 bg-[whitesmoke] mx-auto p-10 text-center'>
            <p className='my-5'>{user?.email}</p>
            <button onClick={handleLogoutUser} className='btn bg-main text-complex btn-sm'>Logout</button>
        </div>
    );
};

export default UserProfile;