import React from 'react';
import useApps from '../Hooks/useApps';
import AppsCards from './AppsCards';


const Apps = () => {
    const { apps } = useApps()
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='text-center mt-20 mb-4'>
                <h1 className='font-bold text-5xl mb-2'>Our All Applications</h1>
                <p className='text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between items-center'>
                <h2>All Apps</h2>
                <search>Search</search>

            </div>
            <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
                {
                    apps.map(app => (
                        <AppsCards key={app.id} app={app}></AppsCards>
                    ))
                }
            </div>

        </div>
    );
};

export default Apps;