import React from 'react';
import AllApps from '../../Components/AllApps/AllApps';

const Apps = () => {
    return (
        <div className='px-5'>
            <div>
                <h1 className='text-5xl font-bold text-center mt-20 mb-4'>Our All Applications</h1>
                <p className='text-center text-gray-400 mb-10'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <AllApps></AllApps>
        </div>
    );
};

export default Apps;