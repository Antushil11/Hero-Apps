import React from 'react';
import logo from "../../public/Images/logo.png"
import twiter from "../../public/Images/Frame 1.png"
import facebook from "../../public/Images/Frame  2.png"
import linkdin from "../../public/Images/Frame 3.png"

const Footer = () => {
    return (

        <div className='bg-[#001F3F] '>
            <div className=' lg:max-w-[1600px]  mx-auto flex '>
                <footer className="flex  flex-col footer sm:footer-horizontal  text-neutral-content items-center p-4">
                    <div className='flex justify-between w-full items-center'>
                        <a className=" flex items-center text-xl font-bold text-white"><img className='max-w-10' src={logo} alt="" />HERO.IO</a>
                        <nav className="flex flex-col ">
                            <h1 className=' text-xl'>Social Links</h1>
                            <div className="flex gap-4 mt-2">
                                <a >
                                    <img src={twiter} alt="" />
                                </a>
                                <a>
                                    <img src={facebook} alt="" />

                                </a>
                                <a>
                                    <img src={linkdin} alt="" />

                                </a>
                            </div>

                        </nav>

                    </div>
                    <p className='border-1 border-gray-600 w-full '></p>

                    <aside className="grid-flow-col items-center">
                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                </footer>

            </div>
        </div>
    );
};

export default Footer;