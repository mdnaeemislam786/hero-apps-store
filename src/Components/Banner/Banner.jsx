import React from 'react';
import hero from "../../assets/hero.png"
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router';

const Banner = () => {
    return (
        // Banner section 
        <section>
            <div className='mt-20 text-center'>
                <h1 className='text-7xl font-bold'>We Build <br /> <span className='text-[#915ded]'>Productive</span> Apps</h1>
                <p className='mt-4 text-gray-400'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='py-10 flex justify-center gap-4'>
                    <Link to="/" className='btn '><FaGooglePlay></FaGooglePlay> Google Play</Link>
                    <Link to="/" className='btn'><FaAppStore></FaAppStore> App Store</Link>
                </div>
            </div>
            <div className='flex justify-center px-2'>
                <img src={hero} alt="hero image" />
            </div>
        </section>
    );
};

export default Banner;