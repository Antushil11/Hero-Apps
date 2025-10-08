import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from "../../public/Images/icon-downloads.png"
import star from "../../public/Images/icon-ratings.png"
import review from "../../public/Images/icon-review.png"

const AppsDetails = () => {
    const { id } = useParams()

    const { apps, loading } = useApps()

    const app = apps.find(p => String(p.id) === id)
    if (loading) return <p>Loading ...... </p>

    const { title, image, downloads, ratingAvg } = app

    return (

        <div className="flex gap-4 border-2 max-w-[1440px] mx-auto ">
            <figure className='bg-white border-2'>
                <img className='w-72 '
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="border-2 w-full">
                <h2 className=" text-left text-[20px]">
                    {title}
                </h2>
                <p className='text-gray-500'>Developed by <span className='font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#632ee3] to-[#9f62f2]'>productive.io </span></p>
                <p className='border-2 max-w-full'></p>
                <div className="card-actions  flex border-2">
                    <div className=" ">
                        <img  src={download} alt="" />{downloads}
                        <h4>Downloads</h4>
                        <h1>8M</h1>
                    </div>
                    <div className=" ">
                        <img c src={star} alt="" />{ratingAvg}
                        <h4>Downloads</h4>
                        <h1>8M</h1>
                    </div>
                    <div className=" ">
                        <img c src={review} alt="" />{ratingAvg}
                        <h4>Downloads</h4>
                        <h1>8M</h1>
                    </div>
                </div>
                <button className='btn'>Install Now (291 MB)</button>
            </div>
            
        </div>



    );
};

export default AppsDetails;