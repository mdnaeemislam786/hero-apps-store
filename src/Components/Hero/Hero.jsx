import React from 'react';

const Hero = () => {
    return (
        <div className='p-20  font-bold bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white'>
            <h1 className='text-5xl text-center mb-6'>Trusted by Millions, Built for You</h1>
            <div className='justify-center flex gap-20 text-center'>
                <div>
                    <span>Total Downloads</span>
                    <h1 className='text-7xl'>29.6M</h1>
                    <span>21% more than last month</span>
                </div>
                <div>
                    <span>Total Reviews</span>
                    <h1 className='text-7xl'>906K</h1>
                    <span>46% more than last month</span>
                </div>
                <div>
                    <span>Active Apps</span>
                    <h1 className='text-7xl'>132+</h1>
                    <span>31 more will Launch</span>
                </div>

            </div>
        </div>
    );
};

export default Hero;