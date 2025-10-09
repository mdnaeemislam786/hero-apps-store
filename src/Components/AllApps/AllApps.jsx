import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import AppDetails from '../../Pages/AppDetails/AppDetails';
import useApps from '../../hooks/useApps';

import LoadingSpiner from '../LoadingSpiner/LoadingSpiner';
import NoAppFound from '../NoAppFound,/NoAppFound';

const AllApps = () => {
      const {apps, loading} = useApps();
      const [search, setSearch] = useState('')
      const [searchLoading, setSearchLoading] = useState(false)

      const term = search.trim().toLocaleLowerCase()
      const searchApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps 

      const handleSearchChange = (e) => {
        setSearch(e.target.value)
        setSearchLoading(true)
        
        setTimeout(() => {
          setSearchLoading(false)
        }, 300)
      }

      const navigate = useNavigate();

      const cartClick = (cart) => {
        navigate(`/app-details/${cart.id}`);
        <AppDetails cart={cart}></AppDetails>
      };
    
    return (
        <div>
            <div className='flex-col sm:flex-row flex justify-between items-center mx-5'>
                <span className='my-5 sm:m-0'>Apps Found ({searchApps.length})</span>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                     value={search}
                     onChange={handleSearchChange} 
                     type="search"  
                     placeholder="Search" />
                </label>
            </div>
            
            {loading || searchLoading ? <LoadingSpiner></LoadingSpiner> : 
                <div>
                {searchApps.length == 0 ? <NoAppFound></NoAppFound> :

                <div className="cursor-pointer grid my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
                > 
                    {searchApps.map((cart) => (
                    <div onClick={() => cartClick(cart)} key={cart.id} className="p-4 hover:scale-101 hover:transition bg-[#ffffff] rounded-2xl shadow-2xl">
                        <img className="w-full rounded-2xl h-70" src={cart.image} alt="" />
                        <h1 className="text-left text-2xl font-bold my-4">
                        {cart.title}
                        </h1>
                        <div className="flex justify-between">
                        <div className="flex bg-[#f1f5e8] p-2 rounded-xl items-center">
                            <span className="text-xl text-[#1cac0d] font-bold">
                            {cart.downloads}
                            </span>
                            <img className="h-5 ml-3" src={download} alt="" />
                        </div>
                        <div className="flex bg-[#fff0e1] items-center rounded-xl px-3">
                            <span className="text-xl text-[#ff692e] font-bold">
                            {cart.ratingAvg}
                            </span>
                            <img className="h-5 ml-3" src={rating} alt="" />
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            }
            </div>   
            } 
        </div>
    );
};

export default AllApps;