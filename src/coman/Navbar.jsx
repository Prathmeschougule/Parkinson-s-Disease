import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-300 text- w-full fixed top-0  z-10 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Brand */}
          <h1 className="text-[17px] lg:text-xl font-bold tracking-wide">
            MoveWell Parkinson
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to={"/"}> <a href="#" className="hover:text-white transition text-lg">Home</a></Link>
            <Link to={"/Exercise"}><a href="#" className="hover:text-white transition text-lg">Exercises</a></Link>
            <a href="#" className="hover:text-white transition text-lg">Notes</a>
            <a href="#" className="hover:text-white transition text-lg">About</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-50 px-4 pb-4 space-y-3">
          <a href="#" className="block hover:text-blue-200" onClick={() => setOpen(!open)}>Home</a>
          <a href="#" className="block hover:text-blue-200">Exercises</a>
          <a href="#" className="block hover:text-blue-200">About</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
