import React from 'react';
import { Link } from 'react-router';

const ErrorApp = () => {
    return (
        <div className='pt-[40vh] bg-red-100 pb-[40vh] flex flex-col justify-center items-center space-y-10'>
            <h1 className='text-center font-bold text-7xl '>
                App not found
            </h1>
            <Link className='btn bg-linear-to-br text-white from-[#9f62f2] to-[#632ee3]' to="/apps">Go Back</Link>
        </div>
    );
};

export default ErrorApp;