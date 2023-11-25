import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        {/* Navigation Content */}
        <ul className="flex space-x-4 text-white font-semibold">
          <li>
            <a href="/home" className="hover:text-blue-300">Home</a>
          </li>
          <li>
            <a href="/profile" className="hover:text-blue-300">Profile</a>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
