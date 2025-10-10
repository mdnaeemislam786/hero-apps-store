import React from 'react';
import { Link } from 'react-router';
import appError from "../../assets/App-Error.png"

const ErrorApp = () => {
    return (
        <div className='pt-[20vh] bg-red-100 pb-[20vh] flex flex-col justify-center items-center space-y-10'>
            <img src={appError} alt="" />
            <h1 className='text-center font-bold text-2xl md:text-7xl '>
                OPPS!! APP NOT FOUND
            </h1>
            <Link className='btn bg-linear-to-br text-white from-[#9f62f2] to-[#632ee3]' to="/apps">Go Back</Link>
        </div>
    );
};

export default ErrorApp;