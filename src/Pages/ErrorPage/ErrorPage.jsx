import React from 'react';
import errorimg from '../../assets/error-404.png'
import { Link } from 'react-router';


const ErrorPage = ({ message='The page you are looking for is not available.' }) => {
  return (
    <div className="flex flex-col text-center items-center justify-center h-screen bg-red-50 text-red-700">
        <img src={errorimg} alt="" />
      <h1 className="text-3xl font-bold mb-4">Oops, page not found!</h1>
      <p className="text-lg">{message || 'Unknown error occurred.'}</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;

