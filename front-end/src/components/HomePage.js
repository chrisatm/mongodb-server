import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Home</h1>
        
        {/* Add your home page content here */}
        <p className="text-gray-700">
          Welcome to the home page. This is where you can display your app's content.
        </p>
        
        {/* Example Logout Button */}
        <button
          onClick={() => {
            // Implement logout functionality here
          }}
          className="bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-2 px-4 rounded cursor-pointer mt-4"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
