import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import Logout from './Logout';
import {Link} from "react-router-dom";
const Navbar = () => {
  const {  isAuthenticated } = useAuth0();
  return (
    <div>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
      
      <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        AddDetails
      </Link>
      <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
         Pools Details
      </Link>
      <Link to="/about" className=" px-4 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About
      </Link>
      <Link to="/contact" className=" px-4 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Contact
      </Link>
    </div>
   { isAuthenticated ? (
    <div >
      <Logout/>
      
    </div>
   
    ):(
      <div>
      <Login/>
      
    </div>
    )}
    
    
  </div>
</nav>

    </div>
  )
}

export default Navbar
