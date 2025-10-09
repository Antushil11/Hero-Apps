import React, { useEffect, useState } from 'react';
import download from "../../public/Images/icon-downloads.png";
import star from "../../public/Images/icon-ratings.png";
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';
import { toast, Toaster } from 'react-hot-toast';

const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');
    const { loading } = useApps();

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installation'));
        if (savedList) setInstallation(savedList);
    }, []);

    const parseDownloads = (str) => {
        if (!str) return 0;
        str = str.replace('+', '').toUpperCase();
        if (str.includes('M')) return parseFloat(str) * 1_000_000;
        if (str.includes('K')) return parseFloat(str) * 1_000;
        return parseInt(str);
    };

    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installation].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
        } else if (sortOrder === 'downloads-dsc') {
            return [...installation].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
        }
        return installation;
    })();

    const handleremove = (id) => {
        const existingList = JSON.parse(localStorage.getItem('installation'));
        const updatedList = existingList.filter(p => p.id !== id);
        setInstallation(updatedList);
        localStorage.setItem('installation', JSON.stringify(updatedList));
        toast.success('App unInstalled Successfully!');
    };

    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className='max-w-[1440px] mx-auto'>
                    <div className='space-y-6'>
                        <div>
                            <div className='text-center mt-20 mb-4'>
                                <h1 className='font-bold text-[40px] md:text-5xl lg:text-5xl mb-2'>Your Installed Apps</h1>
                                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
                            </div>
                            <div className='lg:flex md:flex justify-between ml-2  items-center mb-4'>
                                <h2 className='font-semibold text-2xl mb-2'>
                                    <span>{installation.length}</span> Apps Found
                                </h2>
                                <label className='form-control w-full max-w-xs '>
                                    <select
                                        value={sortOrder}
                                        className='select select-bordered'
                                        onChange={e => setSortOrder(e.target.value)}
                                    >
                                        <option value="none">Sort by Size</option>
                                        <option value="downloads-asc">Low→High</option>
                                        <option value="downloads-dsc">High→Low</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            {sortedItem.map(p => (
                                <div key={p.id} className="card card-side bg-base-100 max-h-28 p-2">
                                    <figure className='max-w-20 max-h-60 bg-gray-200 p-2'>
                                        <img src={p.image} alt="App" />
                                    </figure>
                                    <div className="flex justify-between items-center w-full p-4">
                                        <div>
                                            <h2 className="lg:text-[20px] md:text-[16px] font-semibold">{p.title}</h2>
                                            <div className='flex gap-4 mt-2'>
                                                <div className="flex items-center gap-2">
                                                    <img className='max-w-4 max-h-4' src={download} alt="Downloads" />
                                                    <h1 className='text-[#00d390]'>{p.downloads}</h1>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <img className='max-w-4 max-h-4' src={star} alt="Ratings" />
                                                    <h1 className='text-[#ff8811]'>{p.ratingAvg}</h1>
                                                </div>
                                                <div>
                                                    <h1 className='text-gray-600 text-[14px] md:text-[16px] lg:text-[16px]'>{p.size} MB</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleremove(p.id)}
                                                className="btn text-white bg-[#00d390]"
                                            >
                                                Uninstall
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Installation;
