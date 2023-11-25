import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <a
          href="/auth/google"  // Replace with your actual OAuth login route
          className="block bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded cursor-pointer"
        >
          Log in with Google
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
