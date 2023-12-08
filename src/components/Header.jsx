import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useCookies } from 'react-cookie';
import { getCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next'; 

function Header() {
  const getCookies = getCookie("userToken")
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 

  useEffect(() => {
    if (getCookies) {
      setLoggedIn(true);
    } 
  },[]);

  const handleLogout = () => {
    deleteCookie('userToken');
    setLoggedIn(false);
  };


  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">BookWise</Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <nav className={`hidden lg:flex space-x-4 ${menuOpen ? 'hidden' : 'hidden lg:flex'}`}>
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/catalog" className="text-white hover:underline">Catalog</Link>
          <Link to="/allbooks" className="text-white hover:underline">Books</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-white hover:underline">Logout</button>
            ) : (
              <Link to="/login" className="text-white hover:underline">Login</Link>
              )}
           {isLoggedIn ? (
              <Link to="/profile" className="text-white hover:underline">Profile</Link>
              ) : (
                <Link to="/signup" className="text-white hover:underline">Sign Up</Link>        
            )}
          
          
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col items-center space-y-2">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <Link to="/catalog" className="text-white hover:underline">Catalog</Link>
            <Link to="/allbooks" className="text-white hover:underline">Books</Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-white hover:underline">Logout</button>
            ) : (
              <Link to="/login" className="text-white hover:underline">Login</Link>
            )}
            {isLoggedIn ? (
              <button>Profile</button>
              ) : (
                <Link to="/signup" className="text-white hover:underline">Sign Up</Link>        
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
