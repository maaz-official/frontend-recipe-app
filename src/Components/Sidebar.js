import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaList, FaUtensils, FaTag, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutUserMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const userInfo = useSelector((state) => state.auth.userInfo);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout()); // Clear user data from Redux and localStorage
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <aside
      className={`bg-gray-800 text-white h-screen fixed top-0 left-0 transition-all duration-300 flex flex-col justify-between ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="p-6">
        <nav>
          <ul className="space-y-4 mt-16">
            <li>
              <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaHome className="text-xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaList className="text-xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>All Recipes</span>
              </Link>
            </li>
            <li>
              <Link to="/create" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaUtensils className="text-xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Create Recipe</span>
              </Link>
            </li>
            <li>
              <Link to="/create/tag" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FaTag className="text-xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Create Tag</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-4">
        {userInfo ? (
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-2 rounded bg-gray-700 hover:bg-gray-600 text-white"
          >
            <FaSignOutAlt className="text-xl" />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Logout</span>
          </button>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="flex items-center w-full p-2 rounded bg-gray-700 hover:bg-gray-600 text-white"
          >
            <FaSignInAlt className="text-xl" />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Login</span>
          </button>
        )}
        <button
          onClick={toggleSidebar}
          className="text-2xl text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600 mt-4"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
