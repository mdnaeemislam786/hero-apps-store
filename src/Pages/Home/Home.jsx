import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Hero from '../../Components/Hero/Hero';
import HomeApps from '../../Components/HomeApps/HomeApps';
import { Link  } from 'react-router';
import useApps from '../../hooks/useApps';
const Home = () => {
    const {apps , loading, error } = useApps()
    const homeApps = apps.slice(0, 8);

    // console.log(apps);
    return (
        <>
            <Banner></Banner>
            <Hero></Hero>

        <div className="px-5 py-20 md:p-20 items-center text-center">
                <h1 className="text-5xl font-bold mb-4 text-center">Trending Apps</h1>
                <p className="text-center text-gray-400">
                Explore All Trending Apps on the Market developed by us
                </p>


            <div className="grid my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    homeApps.map(cart => (
                        <HomeApps key={cart.id} cart={cart}></HomeApps>
                    ))
                }
            </div>

            <Link
                className="btn bg-linear-to-br text-white from-[#9f62f2] to-[#632ee3] rounded-md px-6 "
                to="/apps"
            >
                Show All
            </Link>
        </div>
        </>
    );
};

export default Home;