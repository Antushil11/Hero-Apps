import React, { useEffect, useState } from 'react';
import download from "../../public/Images/icon-downloads.png";
import star from "../../public/Images/icon-ratings.png";
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';

const Installation = () => {

    const [installation, setInstallation] = useState([])

    const [sortOrder, setSortOrder] = useState('none')

    const { loading } = useApps();

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installation'))
        if (savedList) setInstallation(savedList)
    }, [])

    const parseDownloads = (str) => {
        if (!str) return 0;
        str = str.replace('+', '').toUpperCase();

        if (str.includes('M')) {
            return parseFloat(str) * 1_000_000;
        } else if (str.includes('K')) {
            return parseFloat(str) * 1_000;
        } else {
            return parseInt(str);
        }
    };

    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installation].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
        } else if (sortOrder === 'downloads-dsc') {
            return [...installation].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
        } else {
            return installation;
        }
    })();


    const handleremove = (id) => {
        const existingList = JSON.parse(localStorage.getItem('installation'));
        let updatedList = existingList.filter(p => p.id !== id);


        setInstallation(updatedList);

        localStorage.setItem('installation', JSON.stringify(updatedList));

    };










    return (

        <div>
            {
                loading ? <LoadingSpinner></LoadingSpinner> : (

                    <div className='max-w-[1440px] mx-auto'>
                        <div className='space-y-6'>
                            <div>
                                <div className='text-center mt-20 mb-4'>
                                    <h1 className='font-bold text-5xl mb-2'>Your Installed Apps</h1>
                                    <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
                                </div>

                                <div className='flex justify-between items-center mb-4'>
                                    <h2 className='font-semibold text-2xl '><span className=''>{installation.length}</span> Apps Found</h2>

                                    <label className='form-control w-full max-w-xs'>
                                        <select
                                            value={sortOrder}
                                            className='select select-bordered'
                                            onChange={e => setSortOrder(e.target.value)}
                                        >
                                            <option value="none">Sort by Downloads</option>
                                            <option value="downloads-asc">Low→High</option>
                                            <option value="downloads-dsc">High→Low</option>
                                        </select>

                                    </label>
                                </div>
                            </div>

                            <div className='space-y-4'>
                                {sortedItem.map(p =>
                                    <div key={p.id} className="card card-side bg-base-100 shadow-sm">
                                        <figure className='w-38'>
                                            <img
                                                src={p.image}
                                                alt="App" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{p.title}</h2>
                                            <p>Click the button to watch on Jetflix app.</p>
                                            <div className="flex flex-col items-center">
                                                <img src={download} alt="Downloads" />
                                                <h4>Downloads</h4>
                                                <h1>{p.downloads}</h1>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <img src={star} alt="Ratings" />
                                                <h4>Rating</h4>
                                                <h1>{p.ratingAvg}</h1>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <button onClick={() => handleremove(p.id)} className="btn btn-primary">Uninstall</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                )
            }
        </div>



    );
};

export default Installation;
