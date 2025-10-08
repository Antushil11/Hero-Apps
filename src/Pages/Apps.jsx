import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCards from './AppsCards';
import apperror from '../../public/Images/App-Error.png'
import { NavLink } from 'react-router';


const Apps = () => {
    const { apps } = useApps()

    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase();
    const searchApps = term
        ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
        : apps;


    console.log(searchApps)
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='text-center mt-20 mb-4'>
                <h1 className='font-bold text-5xl mb-2'>Our All Applications</h1>
                <p className='text-gray-600'>Explore All Apps on the
                    Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <h2 className='font-semibold text-2xl'><span>({searchApps.length})</span>Apps Found</h2>
                <label className="input">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search" placeholder="Search App" />
                </label>

            </div>

            {
                searchApps.length > 0 ? (


                    <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
                        {
                            searchApps.map(app => (
                                <AppsCards key={app.id} app={app}></AppsCards>
                            ))
                        }
                    </div>

                ) : (
                    <div className="flex text-center flex-col  items-center justify-center w-full   text-lg mt-10 mb-20">
                        <div className='mt-10'>
                            <div className=' flex text-center flex-col items-center justify-center '>
                                <img className='' src={apperror} alt="" />
                            </div>
                            <h1 className='text-5xl font-semibold mt-10'>OPPS!! APP NOT FOUND</h1>
                            <p className='text-gray-600 mt-4'>The App you are requesting is not found on our system.  please try another apps</p>
                            <NavLink to={"/"}><button className='text-white mt-  btn bg-linear-to-r from-[#632ee3] to-[#9f62f2]'>Go Back!</button></NavLink>

                            

                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default Apps;