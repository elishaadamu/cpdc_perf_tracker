import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // Adjust the path as necessary
import TPLogo from "../assets/tracker.png"; // Adjust the path as necessary

function Navbar() {
  return (
    <div className="navbar sticky top-0  bg-white shadow-md w-full z-50">
      {/* Remove fixed class, navbar will scroll with main content */}
      <nav className="p-2 max-w-[1280px] mx-auto">
        <div className="">
          <div className="flex gap-10 items-center flex-wrap justify-between">
            <Link to="/" className="flex gap-1 items-center">
              <img
                src={TPLogo}
                alt="Logo"
                className="h-auto w-10 md:w-15 rounded-full mr-2"
              />
              <div className="text-[#008085] text-[14px] md:text-[18px] font-semibold">
                Tri-Cities Area MPO Performance Tracker
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="flex items-center">
          <img src={Logo} alt="TP Logo" className="h-auto w-20  md:w-40 ml-2" />
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
