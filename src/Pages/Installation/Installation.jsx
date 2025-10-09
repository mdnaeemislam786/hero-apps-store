import React, { useEffect, useState } from 'react';
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";

const Installation = () => {
    const [install, setInstall] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
     useEffect(() => {
        const installedapps = JSON.parse(localStorage.getItem('installed'))
        if(installedapps) setInstall(installedapps)
    }, [])

    const sortApp = ( () => {
        if ( sortOrder === 'high-low' ){
            return [...install].sort((a,b) => a.size - b.size)
        }else if(sortOrder === 'low-high') {
            return [...install].sort((a,b)=> b.size - a.size)
        }else{
            return install
        }
    })()

    const uninstallApp = (id) => {
        const installedapps = JSON.parse(localStorage.getItem('installed'))
        let updateApp = installedapps.filter(p => p.id !== id)
        setInstall(updateApp)
        localStorage.setItem('installed', JSON.stringify(updateApp))
        alert("App Uninstall")
    }

    return (
        <div className='bg-[#f5f5f5]'>
            <div>
                <h1 className='text-center font-bold text-4xl pt-15 mb-5'>Your Installed Apps</h1>
                <p className='text-center text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mx-5 my-10'>
                <span>({install.length}) Apps Found</span>
                <select 
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
                className="select w-[40px] sm:w-auto appearance-none">
                    <option value='none' disabled={true}>Sort By Size</option>
                    <option value='high-low'>Low-High</option>
                    <option value='low-high'>High-Low</option>
                </select>
            </div>


            <div className='pb-[60vh]'>
                <div className='mx-1 sm:mx-3 md:mx-10 flex flex-col gap-5'>
                    {
                        sortApp.map(apps => (
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
                                    <button onClick={() => uninstallApp(apps.id)} className="btn px-1 sm:px-5 btn-success">Uninstall</button>
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