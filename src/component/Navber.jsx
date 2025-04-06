import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import Search from "./Search";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { ThemeContext } from "../context/TheamContext";

const Navber = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const {darkMode, setDarkMode} = useContext(ThemeContext)
  // console.log(darkMode);
  

  // Todo: colormode
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className=" bg-white shadow-md">
      <nav>
        {/* dectop manu and mobile button */}
        <div className=" container mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          {/* logo */}
          <div>
            <a href="/">
              <img src="/logo.png" alt="logo" />
            </a>
          </div>
          {/* menu items */}

          <ul className="md:flex hidden items-center justify-center md:gap-1 lg:gap-8 text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-900"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-900"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-900"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-900"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* search bar and light/Dark mode */}
          <div className="md:flex hidden md:space-x-1 space-x-8">
            {/* search ber */}
            <Search />
            {/* color switch */}
            <div className={`w-14 h-8 flex items-center rounded-full bg-[#E8E8EA] p-1 cursor-pointer transition-colors duration-300 ${darkMode ? "justify-end" : "justify-start"}`}>
              <button
                onClick={()=> setDarkMode((darkMode)=> !darkMode)}
                className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300"
              >
                {darkMode ? (
                  <FaMoon className="text-cyan-200" />
                ) : (
                  <FaSun className="text-gray-600" />
                )}
              </button>
            </div>
          </div>
          {/* mobile manu ber */}
          <div className="md:hidden block">
            <button onClick={toggleMobileMenuOpen}>
              {isMobileMenuOpen ? (
                <IoMdClose className="size-6 text-2xl font-bold text-gray-900" />
              ) : (
                <FaBars className="size-6 text-2xl font-bold text-gray-900" />
              )}
            </button>
          </div>
        </div>
        {/* mobile manu items */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <ul className="flex flex-col items-center justify-center space-y-4 text-xl font-bold">
              <li onClick={toggleMobileMenuOpen}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-900"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li onClick={toggleMobileMenuOpen}>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-900"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li onClick={toggleMobileMenuOpen}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-900"
                  }
                >
                  About
                </NavLink>
              </li>
              <li onClick={toggleMobileMenuOpen}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-900"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="pb-4">
                <Search/>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navber;
