import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import reviwe from "../../assets/icon-review.png";


const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const app = apps.find(p => String(p.id) === id);

  if (loading || !app) {
    return <div className="text-center p-10">Loading app details...</div>;
  }

  const { image, ratingAvg, size, title, companyName } = app;
  const img = "../../../public"+image

  return (
    <>
    <div className='flex p-20 '>
        <div>
            <img
            className='h-[350px] w-[350px] border mr-45'
            src={img}
            alt={title}
            />
        </div>
        <div className='w-full'>
            <div>
                <h1 className='text-5xl font-black'>SmPlan: {title}</h1>
                <p className='text-2xl font-bold my-5 text-gray-400'>Developed by <span className='text-blue-400'>{companyName}</span></p>
            </div><hr />
            <div className="flex my-5 gap-6">
                <div className='my-5 items-center flex flex-col'>
                  <img src={download} alt="" />
                  <span>Downloads</span>
                  <h1 className='font-bold text-3xl'>8M</h1>
                </div>
                <div className='my-5 items-center flex flex-col'>
                  <img src={rating} alt="" />
                  <span>Average Ratings</span>
                  <h1  className='font-bold text-3xl'>{ratingAvg}</h1>
                </div>
                <div className='my-5 items-center flex flex-col'>
                  <img src={reviwe} alt="" />
                  <span>Total Reviews</span>
                  <h1  className='font-bold text-3xl'>8M</h1>
                </div>
            </div>
        
            <button className="btn bg-green-500 rounded-xl text-white">Install Now ({size} MB)</button>
        </div>
  
    </div>
    <hr />
        <div className='m-10'>
          
        </div>
    
    </>
  );
};

export default AppDetails;