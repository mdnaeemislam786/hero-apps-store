import React from 'react';
import img from "../../assets/App-Error.png"
import { Link } from 'react-router';

const NoAppFound = () => {
    return (
        <div className='flex flex-col justify-center items-center m-5 md:m-20'>
            <img src={img} className='h-auto w-[60%]' alt="No apps Found erro image" />
            <h1 className='font-bold text-4xl my-5'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-400 my-2'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to="/" className='btn rounded-xl bg-linear-to-br text-white from-[#9f62f2] to-[#632ee3]'>Go Back!</Link>
        </div>
    );
};

export default NoAppFound;