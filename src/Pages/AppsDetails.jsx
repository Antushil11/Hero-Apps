import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from "../../public/Images/icon-downloads.png";
import star from "../../public/Images/icon-ratings.png";
import review from "../../public/Images/icon-review.png";
import toast, { Toaster } from 'react-hot-toast';
import {
    Bar,
    ComposedChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const AppsDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();
    const [installed, setInstalled] = useState(false);

    const app = apps.find(p => String(p.id) === id);

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('installation')) || [];
        const alreadyInstalled = existingList.some(p => p.id === app?.id);
        setInstalled(alreadyInstalled);
    }, [app]);

    if (loading || !app) return <p>Loading ...</p>;

    const { title, image, downloads, ratingAvg, companyName, size, description, ratings } = app;

    const handleAddToInstallation = () => {
        const existingList = JSON.parse(localStorage.getItem('installation')) || [];
        const updatedList = [...existingList, app];
        localStorage.setItem('installation', JSON.stringify(updatedList));
        setInstalled(true);
        toast.success('App Installed Successfully!');
    };

    return (
        <div className="max-w-[1440px] mx-auto">
            <Toaster position="top-right" reverseOrder={false} />

            <div className='lg:flex md:flex gap-4 p-8'>
                <figure className='bg-white'>
                    <img className='w-80' src={image} alt={title} />
                </figure>
                <div className="w-full p-4">
                    <h2 className="text-left text-[20px] lg:text-[32px] md:text-[28px] font-bold">{title}</h2>
                    <p className='text-gray-500'>
                        Developed by <span className='font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#632ee3] to-[#9f62f2]'>{companyName}</span>
                    </p>

                    <div className="card-actions flex p-2 lg:gap-16 md:gap-10 gap-4 my-4">
                        <div className="flex lg:flex-col gap-2 md:flex-col items-center">
                            <img src={download} alt="Downloads" />
                            <h4>Downloads</h4>
                            <h1 className='text-4xl font-bold'>{downloads}</h1>
                        </div>
                        <div className="flex lg:flex-col gap-2 md:flex-col items-center">
                            <img src={star} alt="Ratings" />
                            <h4>Average Ratings</h4>
                            <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div className="flex lg:flex-col gap-2 md:flex-col items-center">
                            <img src={review} alt="Reviews" />
                            <h4>Total Reviews</h4>
                            <h1 className='text-4xl font-bold'>{ratingAvg}K</h1>
                        </div>
                    </div>

                    <button
                        onClick={handleAddToInstallation}
                        className='btn mt-4 text-white bg-[#00d390]'
                        disabled={installed}
                    >
                        {installed ? 'Installed' : `Install Now (${size}) MB`}
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <h3 className='font-semibold text-2xl mb-4'>Rating</h3>
                <div className='rounded-xl p-4 h-90'>
                    <ResponsiveContainer width="100%" height={300}>
                        <ComposedChart layout="vertical" data={ratings}>
                            <XAxis dataKey="count" type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" barSize={20} fill="#ff8811" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='p-4'>
                <h2 className='font-semibold text-2xl mb-2'>Description</h2>
                <p className='text-gray-700'>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;
