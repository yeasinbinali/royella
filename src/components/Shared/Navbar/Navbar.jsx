import React, { useContext } from 'react';
import logo from '../../../../images/royella_logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const lists = [
        <li><NavLink className='text-simple lg:text-complex text-lg' to='/'>Home</NavLink></li>,
        <li><NavLink className='text-simple lg:text-complex text-lg' to='/rooms'>Rooms</NavLink></li>,

        user?.email && <li><NavLink className='text-simple lg:text-complex text-lg' to='/booking'>My Booking</NavLink></li>,
        
        <li><NavLink className='text-simple lg:text-complex text-lg' to='/contact'>Contact</NavLink></li>,
    ]
    return (
        <div className="navbar bg-simple py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-complex" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul id='nav-item' tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {lists}
                    </ul>
                </div>
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul id='nav-item' className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className='btn bg-main text-complex border-none'><Link to='/user'>User</Link></button> : <button className='btn bg-main text-complex border-none'><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;