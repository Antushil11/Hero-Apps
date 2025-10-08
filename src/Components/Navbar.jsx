import React from 'react';
import github from "../../public/Images/fi_2111432.png"
import logo from "../../public/Images/logo.png"
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">

            <div className='w-[1600px] mx-auto flex'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='font-semibold '><NavLink to={"/"}>Home</NavLink></li>
                            <li className='font-semibold'><NavLink to={"/apps"}>Apps</NavLink></li>
                            <li className='font-semibold'><NavLink to={"/installation"}>Installation</NavLink></li>

                        </ul>
                    </div>
                    <a className=" flex items-center text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#632ee3] to-[#9f62f2] "><img className='max-w-10' src={logo} alt="" />HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-semibold'><NavLink to={"/"}>Home</NavLink></li>
                        <li className='font-semibold'><NavLink to={"/apps"}>Apps</NavLink></li>
                        <li className='font-semibold'><NavLink to={"/installation"}>Installation</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">

                    <a href="https://github.com/Antushil11" className=' btn text-white border-2 bg-linear-to-r from-[#632ee3] to-[#9f62f2] flex' ><img className=' ' src={github} alt="" />Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;