import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen min-w-full bg-blue-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">Welcome to DocuSphere</h1>
      <p className="text-lg text-blue-700 mb-8">Your ultimate cloud document management solution.</p>
      <div className="flex space-x-4">
        <Link to="/login" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
          Log In
        </Link>
        <Link to="/register" className="px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition duration-300">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
