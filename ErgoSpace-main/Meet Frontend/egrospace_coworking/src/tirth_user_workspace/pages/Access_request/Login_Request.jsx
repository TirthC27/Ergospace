import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const LoginRequired = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Lock className="w-12 h-12 text-red-500" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Login Required</h2>
        <p className="text-gray-600 mb-6">
          You must be logged in to access this page.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default LoginRequired;
