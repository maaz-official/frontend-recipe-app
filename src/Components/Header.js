import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg fixed w-full z-10"> {/* Fixed to the top */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link to="/">Admin Dashboard</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-400">Dashboard</Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-gray-400">Create Recipe</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
