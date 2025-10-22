import React from 'react';
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import githubimage from '../assets/github.png';
const Navbar = () => {
    return (
          <div className="navbar bg-base-100 px-4 sm:px-6 lg:px-10">
                   <div className="navbar-start">
                       <div className="dropdown">
                           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                               <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="2"
                                       d="M4 6h16M4 12h8m-8 6h16"
                                   />
                               </svg>
                           </div>
                           <ul
                               tabIndex={0}
                               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg">
                               <li>
                                   <NavLink
                                       to="/"
                                       className={({ isActive }) =>
                                           isActive ? "text-purple-600 font-bold" : "text-gray-500"
                                       }>
                                       Home 
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink
                                       to="/apps"
                                       className={({ isActive }) =>
                                           isActive ? "text-purple-600 font-bold" : "text-gray-500"
                                       }>
                                       App
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink
                                       to="/installed"
                                       className={({ isActive }) =>
                                           isActive ? "text-purple-600 font-bold" : "text-gray-500"
                                       }
                                   >
                                       Installation
                                   </NavLink>
                               </li>
                           </ul>
                       </div>
                       <NavLink to='/'>
                           <span className="btn btn-ghost text-base sm:text-lg md:text-xl px-2 sm:px-4">
                               <img className="h-6 w-6 sm:h-8 sm:w-8" src={logo} alt="Logo" />
                               <span className="bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] bg-clip-text text-transparent hidden sm:inline-block overflow-hidden whitespace-nowrap border-r-4 border-gray-400 animate-typing">
                                   HERO.IO
                               </span>
                           </span>
                       </NavLink>
                   </div>
                   <div className="navbar-center hidden lg:flex">
                       <ul className="menu menu-horizontal px-1 flex gap-4 xl:gap-6">
                           <li>
                               <NavLink
                                   to="/"
                                   className={({ isActive }) =>
                                       isActive ? "text-purple-600 font-bold" : "text-gray-500"
                                   }
                               >
                                   Home
                               </NavLink>
                           </li>
                           <li>
                               <NavLink
                                   to="/apps"
                                   className={({ isActive }) =>
                                       isActive ? "text-purple-600 font-bold" : "text-gray-500"
                                   }
                               >
                                   Apps
                               </NavLink>
                           </li>
                           <li>
                               <NavLink
                                   to="/installed"
                                   className={({ isActive }) =>
                                       isActive ? "text-purple-600 font-bold" : "text-gray-500"
                                   }
                               >
                                   Installation
                               </NavLink>
                           </li>
                       </ul>
                   </div>
                   <div className="navbar-end">
                       <a
                           className="btn btn-sm sm:btn-md bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] text-white border-none hover:opacity-90"
                           href='https://github.com/Sohag-Ali'>
                           <img className="w-5 h-5 sm:w-6 sm:h-6" src={githubimage} alt="GitHub" />
                           <span className="sm:inline">Contribute</span>
                       </a>
                   </div>
               </div>
        // <h1>navbar</h1>
    );
};

export default Navbar;