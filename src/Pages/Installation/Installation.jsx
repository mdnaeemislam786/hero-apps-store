import React, { useEffect, useState } from 'react';
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";

const Installation = () => {
    const [install, setInstall] = useState([])
    useEffect(() => {
        const installedapps = JSON.parse(localStorage.getItem('installed'))
        if(installedapps) setInstall(installedapps)
    }, [])
    return (
        <div className='bg-[#f5f5f5]'>
            <div>
                <h1 className='text-center font-bold text-4xl mt-15 mb-5'>Your Installed Apps</h1>
                <p className='text-center text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mx-5 my-10'>
                <span>({install.length}) Apps Found</span>
                <select defaultValue="Pick a color" className="select w-[40px] sm:w-auto appearance-none">
                    <option disabled={true}>Sort By Size</option>
                    <option>High-Low</option>
                    <option>Low-High</option>
                </select>
            </div>


            <div>
                <div className='mx-1 sm:mx-3 md:mx-10 flex flex-col gap-5'>
                    {
                        install.map(apps => (
                        <div className="card card-side bg-[#ffffff] shadow-sm items-center p-1 sm:p-3">
                            <figure>
                                <img
                                className='w-[80px] rounded-xl border h-[80px]'
                                src={apps.image} />
                            </figure>
                            <div className="p-1 sm:p-3 ml-0 sm:ml-2 flex w-full items-center justify-between">
                                <div className='w-full'>
                                    <h2 className="font-bold -mb-5 text-2xl">{apps.title}</h2>
                                    {/* <p>Developed by {apps.companyName}</p> */}
                                    <div className='flex gap-2'>
                                        <div className='my-5 items-center flex '>
                                            <img className='h-4' src={download} alt="" />
                                            <h1 className='font-bold text-green-500'>{apps.downloads}</h1>
                                        </div>
                                        <div className='my-5 items-center flex '>
                                            <img className='h-4' src={rating} alt="" />
                                            <h1  className='font-bold text-red-500'>{apps.ratingAvg}</h1>
                                        </div>
                                        <div className='my-5 items-center flex'>
                                            <h1 className='font-bold text-gray-500'>{apps.size}MB</h1>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <button className="btn px-1 sm:px-5 btn-success">Uninstall</button>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;