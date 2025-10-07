import React from 'react';
import logo from "../../assets/logo.png";
import {  FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer  className='bg-[#001931] text-white px-4 md:px-10 xl:px-20'>
            <div className='flex items-start justify-between pt-[35px]'>
                <div className='flex items-center'>
                    <img className='h-10' src={logo} alt="logo" />
                    <h1>HERO.IO</h1>
                </div>
                <div>
                    <h1>Social Links</h1>
                    <div className='flex gap-4 my-5'>
                        <i><FaTwitter></FaTwitter></i>
                        <i><FaLinkedin></FaLinkedin></i>
                        <i><FaFacebook></FaFacebook></i>
                    </div>
                </div>
            </div>
            <hr className='border-1 border-gray-800' />
            <div className='flex items-center justify-center py-[30px]'>
                <span className='text-center '>Copyright © 2025 - All right reserved</span>
            </div>
        </footer>
    );
};

export default Footer;