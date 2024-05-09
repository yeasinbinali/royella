import React from 'react';
import logo from '../../../../images/royella_logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const lists = [
        <li><NavLink className='text-complex' to='/'>Home</NavLink></li>,
        <li><NavLink className='text-complex' to='/rooms'>Rooms</NavLink></li>,
        <li><NavLink className='text-complex' to='/about'>About</NavLink></li>,
        <li><NavLink className='text-complex' to='/contact'>Contact</NavLink></li>
    ]
    return (
        <div className="navbar bg-simple py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {lists}
                    </ul>
                </div>
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;