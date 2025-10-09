import React from 'react';
import download from "../../public/Images/icon-downloads.png"
import star from "../../public/Images/icon-ratings.png"
import { Link } from 'react-router';

const AppsCards = ({ app }) => {
    // console.log(app)
    const { downloads, image, title, ratingAvg,id } = app
    return (
        <Link to={`/app/${id}`}>
            <div className="card bg-base-100  shadow-sm hover:scale-106 p-4 ">
                <figure className='bg-[#d9d9d9]'>
                    <img className='w-72 '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-left text-[20px]">
                        {title}
                    </h2>
                    <div className="card-actions justify-between flex ">
                        <div className="badge  bg-[#f1f5e8] text-[#00d390]"><img className='w-4' src={download} alt="" />{downloads}</div>
                        <div className="badge  bg-[#fff0e1] text-[#ff8811]"><img className='w-4' src={star} alt="" />{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppsCards;