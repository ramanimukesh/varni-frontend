import React, { useState, useEffect, useRef } from "react";
import NavLinks from "../Navbar/NavLinks";
import img from "../../images/logo/company_logo.jpeg";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClick = () => setIsOpen(!isOpen);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg transition duration-300 ease-in-out"
      style={{ overflow: "visible" }}
    >
      <div className="flex items-center justify-between py-3 px-4 lg:px-12 w-full">
        {/* Left Side - Logo & Hamburger */}
        <div className="flex items-center">
          {/* Hamburger Menu - Mobile Only */}
          <button
            className="p-1 text-blue-900 lg:hidden mr-2"
            onClick={handleClick}
          >
            {isOpen ? "✖️" : "☰"}
          </button>

          {/* Logo */}
          <HashLink smooth to="/#hero">
            <img
              src={img}
              alt="Swaminarayan Construction Logo"
              className="h-16 sm:h-16 md:h-18 lg:h-22"
            />
          </HashLink>
        </div>

        {/* NavLinks - Desktop */}
        <div className="hidden lg:flex space-x-6 items-center">
          <NavLinks closeSidebar={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-xl z-40 p-6 flex flex-col space-y-4 lg:hidden"
          style={{ maxWidth: "75vw" }}
        >
          <button className="self-end text-xl" onClick={handleClick}>
            ✖️
          </button>
          <NavLinks closeSidebar={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
