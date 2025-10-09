import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from "../../public/Images/icon-downloads.png";
import star from "../../public/Images/icon-ratings.png";
import review from "../../public/Images/icon-review.png";
import toast, { Toaster } from 'react-hot-toast';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppsDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();
    const app = apps.find(p => String(p.id) === id);

    const [installed, setInstalled] = useState(false);

    if (loading) return <p>Loading ...... </p>;

    const { title, image, downloads, ratingAvg,companyName } = app;

    const handleAddToInstallation = () => {
        const existingList = JSON.parse(localStorage.getItem('installation'));
        let updatedList = [];
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === app.id);
            if (isDuplicate) return toast.success('Already Installed!');
            updatedList = [...existingList, app];
        } else {
            updatedList.push(app);
        }
        localStorage.setItem('installation', JSON.stringify(updatedList));
        setInstalled(true);
        toast.success('App Installed Successfully!');
    };

    return (
        <div className=" max-w-[1440px] mx-auto ">
            <div className='flex gap-4  p-8'>
                <Toaster position="top-right" reverseOrder={false} />
                <figure className='bg-white '>
                    <img className='w-80' src={image} alt={title} />
                </figure>
                <div className="w-full p-4">
                    <h2 className="text-left text-[32px] font-bold">{title}</h2>
                    <p className='text-gray-500 '>
                        Developed by <span className='font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#632ee3] to-[#9f62f2]'>{companyName}</span>
                    </p>
                    <p className='border-t-1 text-gray-400  max-w-full my-2'></p>
                    <div className="card-actions flex p-2 gap-16  my-4">
                        <div className="flex flex-col items-center">
                            <img src={download} alt="" />
                            <h4>Downloads</h4>
                            <h1 className='text-4xl font-bold'>{downloads}</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={star} alt="" />
                            <h4>Average Ratings</h4>
                            <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={review} alt="" />
                            <h4>Total Reviews</h4>
                            <h1 className='text-4xl font-bold'>{ratingAvg}K</h1>
                        </div>
                    </div>
                    <button
                        onClick={handleAddToInstallation}
                        className='btn mt-4 text-white bg-[#00d390]'
                        disabled={installed}
                    >
                        {installed ? 'Installed' : 'Install Now (291 MB)'}
                    </button>
                </div>
            </div>
            <p className='border-t-1 text-gray-400  max-w-full my-2'></p>

            {/* chart */}
            <div className='space-y-4'>
                <h3 className='font-semibold text-2xl'>Rating</h3>

                <div className=' rounded-xl p-4 h-90'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            layout="vertical"

                            data={app.ratings}

                        >

                            <XAxis dataKey="count" type="" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Legend />

                            <Bar dataKey="count" barSize={20} fill="#ff8811" />

                        </ComposedChart>
                    </ResponsiveContainer>

                </div>

            </div>
            <p className='border-t-1 text-gray-400  max-w-full my-2'></p>


            <div>
                <h2 className='font-semibold text-2xl mb-6 '>Description</h2>
                <p className='mb-6'>{app.description}</p>
            </div>







        </div>
    );
};

export default AppsDetails;
