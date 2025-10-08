import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppsDetails from './AppsDetails';
import AppsCards from './AppsCards';
import playstore from '../../public/Images/fi_16076057.png'
import Apples from '../../public/Images/fi_5977575.png';
import hero from '../../public/Images/hero.png'


const Home = () => {
    const apps = useLoaderData()
    const featuredApps = apps.slice(0, 6)



    return (

        <div>

            <div className='text-center'>
                <h1 className='text-[72px] font-semibold'>We Build <br /><span className='text-[#632ee3]'>Productive</span> Apps</h1>
                <p className='text-gray-600'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>


                <div className='flex items-center justify-center gap-4 mt-10'>
                    <a className='btn' href="https://play.google.com/store/apps?hl=en"><img src={playstore} alt="" />Google Play</a>
                    <a className='btn' href="https://www.apple.com/store"><img src={Apples} alt="" />App Store</a>

                </div>


                <div className='flex items-center justify-center mt-10'>
                    <img src={hero} alt="" />
                </div>
            </div>

            <div className='bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white'>
                <div className='flex justify-center items-center flex-col max-w-full '>
                    <h1 className='mt-20 text-5xl text-center '>Trusted by Millions, Built for You</h1>

                    <div className='flex lg:items-center lg:justify-center  md:items-center md:justify-center gap-6 mt-10 mb-20'>
                        <div className=' flex flex-col lg:items-center lg:justify-center  md:items-center md:justify-center lg:max-w-[342px] p-4'>
                            <p >Total Downloads</p>
                            <span className='lg:text-6xl md:text-4xl text-2xl font-bold my-4 '>29.6M</span>
                            <p>21% more than last month</p>
                        </div>
                        <div className=' flex flex-col lg:items-center lg:justify-center  md:items-center md:justify-center  lg:max-w-[342px] p-4'>
                            <p>Total Reviews</p>
                            <span className='lg:text-6xl md:text-4xl text-2xl font-bold my-4'>906K</span>
                            <p>46% more than last month</p>
                        </div>
                        <div className='  p-4 flex flex-col lg:items-center lg:justify-center  md:items-center md:justify-center  lg:max-w-[342px] '>
                            <p>Active Apps</p>
                            <span className='lg:text-6xl md:text-4xl text-2xl font-bold my-4'>132+</span>
                            <p>31 more will Launch</p>
                        </div>
                    </div>

                </div>
            </div>


            <div>
                <div className='text-center mt-20 mb-4'>
                    <h1 className='font-bold text-5xl mb-2'>Trending Apps</h1>
                    <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
                    {
                        featuredApps.map(app => (
                            <AppsCards key={app.id} app={app}></AppsCards>
                        ))
                    }
                </div>
            </div>

           
           <button className='flex items-center justify-center mb-20 mt-10 w-full '><Link className='btn max-w-36  bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white ' to={"/apps"}>Show All</Link></button>


        </div>
    );
};

export default Home;