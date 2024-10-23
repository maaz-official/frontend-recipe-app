import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaPlusCircle } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`bg-gray-800 text-white h-screen fixed top-0 left-0 transition-all duration-300 flex flex-col justify-between ${
        isOpen ? 'w-64' : 'w-20'
      }`} // Full height and fixed position
    >
      {/* Sidebar content (Top section) */}
      <div className="p-6">
        <nav>
          <ul className="space-y-4 mt-16">
            <li>
              <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaHome className="text-xl" /> {/* Icon */}
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Dashboard</span> {/* Label */}
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaPlusCircle className="text-xl" /> 
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>All Recipes</span> 
              </Link>
            </li>
            <li>
              <Link to="/create" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaPlusCircle className="text-xl" /> {/* Icon */}
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Create Recipe</span> {/* Label */}
              </Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </div>

      {/* Toggle button (Bottom section) */}
      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600"
        >
          {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle between open/close icons */}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
