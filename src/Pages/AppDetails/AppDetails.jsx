import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import reviwe from "../../assets/icon-review.png";
import { ToastContainer, toast } from 'react-toastify';
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LoadingSpiner from '../../Components/LoadingSpiner/LoadingSpiner';
import ErrorApp from '../../Components/ErrorApp/ErrorApp';


const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find(p => String(p.id) === id);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem('installed')) || [];
    const installed = existingList.some(p => String(p.id) === id);
    setIsInstalled(installed);
  }, [id]);

  if (loading) {
    return <LoadingSpiner></LoadingSpiner>;
  }
  if (!app) {
  return <ErrorApp />;
  }

  const { image, ratingAvg, size, title, companyName, ratings, description, detailedDescription, downloads, reviews } = app;

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem('installed')) || [];
    
    const isDuplicate = existingList.some(p => String(p.id) === id);
    if (isDuplicate) {
      toast('App is already installed!');
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem('installed', JSON.stringify(updatedList));
    setIsInstalled(true);
    toast('App installed successfully!');
  };

  return (
    <>
      <ToastContainer />
      <div className='m-3 flex flex-col md:flex-row text-center md:text-left items-center md:items-start md:flex md:p-20 '>
        <div>
          <img
            className='sm:h-[350px] rounded-xl w-[350px] border md:mr-45'
            src={image}
            alt={title}
          />
        </div>
        <div className='w-full sm:ml-5'>
          <div>
            <h1 className='text-2xl md:text-5xl font-black'>SmPlan: {title}</h1>
            <p className='md:text-2xl font-bold my-5 text-gray-400'>Developed by <span className='text-blue-400'>{companyName}</span></p>
          </div>
          <div className='flex flex-col-reverse md:block '>
          <div className="sm:flex justify-center md:justify-start my-5 gap-6">
            <div className='my-5 items-center flex flex-col'>
              <img src={download} alt="" />
              <span>Downloads</span>
              <h1 className='font-bold text-3xl'>{downloads}</h1>
            </div>
            <div className='my-5 items-center flex flex-col'>
              <img src={rating} alt="" />
              <span>Average Ratings</span>
              <h1 className='font-bold text-3xl'>{ratingAvg}</h1>
            </div>
            <div className='my-5 items-center flex flex-col'>
              <img src={reviwe} alt="" />
              <span>Total Reviews</span>
              <h1 className='font-bold text-3xl'>{reviews}</h1>
            </div>
          </div>
          <div className='flex md:items-center md:justify-start justify-center'>
            <button
              onClick={handleInstall}
              className={`btn rounded-xl mt-5 sm:mt-0 text-black ${isInstalled ? 'bg-green-800' : 'bg-green-500'}`}
              disabled={isInstalled}
            >
              {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
            </button>
          </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='md:m-10 h-[500px]'>
        <h1 className='font-bold text-3xl ml-3 md:ml-10 mb-10'>Ratings</h1>
        <ResponsiveContainer className="pb-10" width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={ratings}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 20,
            }}
            barSize={120}
          >
            <XAxis type="number" /> 
            <YAxis type="category" dataKey="name" width={80} />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="count" fill="#ff8811" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <hr />
      <div className='m-3 md:m-20'>
        <h1 className='font-bold text-3xl  my-10'>Description</h1>
        <p>{description}</p>
        <br />
        <p>{detailedDescription}</p>
      </div>
    </>
  );
};

export default AppDetails;