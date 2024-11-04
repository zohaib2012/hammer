import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navv = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-blue-600 mt-3 ">
              
              
              <img className='w-20 h-20 rounded-lg' src="https://avatars.mds.yandex.net/i?id=ea6e17f0d187067bdf69eafe8bf7ff219f4bd6b7-5086977-images-thumbs&n=13" alt="" />
              </a>
            </div>
            <div className="hidden md:flex space-x-4 ml-52 mt-3">
              <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/Createpatientformm" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Register patient
              </a>

              {/* <a href="/gettreatment" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
            Treatments
              </a> */}
              <a href="/sendmessageform" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Talk to me
              </a>
             
              <a href="/createappointment" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              
              Get Appointment
              </a>
             
             
              <a href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Login & Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 focus:outline-none"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Signup
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-900 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/Createpatientformm" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/Createpatientformm" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Createpatientformm
            </a>
            <a href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>

            {/* Mobile Login & Signup Buttons */}
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// export default Navbar;
