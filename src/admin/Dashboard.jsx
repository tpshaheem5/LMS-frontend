import React from 'react';
import { Link  } from 'react-router-dom';
// import { useCookies } from 'react-cookie';
import { deleteCookie } from 'cookies-next';


const Dashboard = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(['token']);
  // const adminToken = cookies.adminToken

 
  const adminLogout = () => {
    deleteCookie('adminToken');
    window.location.href = '/'; 
  };
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-shrink-0 bg-indigo-600 text-white p-6">
        <div className="flex items-center justify-center">
          <span className="text-2xl font-semibold">Admin Dashboard</span>
        </div>
        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <Link to="/bookctrl" className="text-white hover:text-gray-300 block p-2 rounded transition duration-300">
              Book Controller
              </Link>
            </li>
            <li>
              <Link to="/addbooks" className="text-white hover:text-gray-300 block p-2 rounded transition duration-300">
              Add books
              </Link>
            </li>
            <li>
              <Link to="/userctrl" className="text-white hover:text-gray-300 block p-2 rounded transition duration-300">
                User Controller
              </Link>
            </li>
            {/* <li>
              <Link to="/" className="text-white hover:text-gray-300 block p-2 rounded transition duration-300">
                Home
              </Link>
            </li> */}
            <li>
            <button onClick={adminLogout} className="text-white hover:text-gray-300 block p-2 rounded transition duration-300">
                Logout
            </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-10">
        <h1 className="text-3xl font-semibold mb-6">Welcome to the Dashboard</h1>
        
      </main>
    </div>
  );
};

export default Dashboard;
