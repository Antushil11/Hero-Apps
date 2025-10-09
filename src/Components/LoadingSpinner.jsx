import React from 'react';

const LoadingSpinner = (count = 6) => {
    return (
        <div className=' mx-auto max-w-[1440px]'>

            {
                Array.from({ length: count }).map((_, index) => (
                    <div key={index} className="flex w-52 flex-col gap-4">
                        <span className="loading loading-dots loading-xs"></span>
                        <span className="loading loading-dots loading-sm"></span>
                        <span className="loading loading-dots loading-md"></span>
                        <span className="loading loading-dots loading-lg"></span>
                        <span className="loading loading-dots loading-xl"></span>

                    </div>

                ))}


        </div>
    );
};

export default LoadingSpinner;