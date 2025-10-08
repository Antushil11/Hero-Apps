import React from 'react';
import logo from "../../public/Images/error.png"
import { NavLink } from 'react-router';


const ErrorPage = () => {
    return (
        <div>

            <div className=' flex items-center justify-center flex-col mt-20'>
                <figure className='w-96 mx-auto'>
                    <img className='w-full' src={logo} alt="" />
                </figure>


                <h2 className='font-semibold text-5xl mt-4'>Oops, page not found!</h2>
                <p className='text-gray-600 mt-4'>The page you are looking for is not available.</p>
                <NavLink to={"/"}><button className='text-white mt-4  btn bg-linear-to-r from-[#632ee3] to-[#9f62f2]'>Go Back!</button></NavLink>
            </div>
        </div>

    );
};

export default ErrorPage;