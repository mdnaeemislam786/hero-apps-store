import React from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { useNavigate } from "react-router";
import AppDetails from "../../Pages/AppDetails/AppDetails";


const HomeApps = ({cart}) => {
    const navigate = useNavigate();

  const cartClick = (cart) => {
    navigate(`/app-details/${cart.id}`);
    <AppDetails cart={cart}></AppDetails>
  }
  return (
    <div >

      <div onClick={() => cartClick(cart)}>
          <div key={cart.id} className="p-4 hover:scale-101 hover:transition bg-[#ffffff] rounded-2xl shadow-2xl">
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
      </div>


    </div>
  );
};

export default HomeApps;
