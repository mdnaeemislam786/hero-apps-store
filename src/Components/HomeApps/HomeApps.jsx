import React from 'react';
import { Link, useLoaderData } from 'react-router';
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"

const HomeApps = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className='px-5 py-20 md:p-20 items-center text-center'>
            <h1 className='text-5xl font-bold mb-4 text-center' >Trending Apps</h1>
            <p className='text-center text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                data.map(cart => <div key={cart.id} cart={cart} className=' p-4 bg-[#ffffff] rounded-md shadow-2xl'>
                    <img className='w-full h-70' src={cart.image} alt="" />
                    <h1 className='text-left text-2xl font-bold my-4'>{cart.companyName}</h1>
                    <div className='flex justify-between'>
                        <div className='flex bg-[#f1f5e8] p-2 rounded-xl items-center'>
                            <span className='text-xl text-[#1cac0d] font-bold'>{cart.downloads}</span>
                            <img className='h-5 ml-3' src={download} alt="" />
                        </div>
                        <div className='flex bg-[#fff0e1] items-center rounded-xl px-3'>
                            <span className='text-xl text-[#ff692e] font-bold'>{cart.ratingAvg}</span>
                            <img className='h-5 ml-3' src={rating} alt="" />
                        </div>
                    </div>
                </div>)
            }
            </div>
            <Link className="btn bg-linear-to-br text-white from-[#9f62f2] to-[#632ee3] rounded-md px-6 " to="/apps">Show All</Link>
        </div>
    );
};

export default HomeApps;