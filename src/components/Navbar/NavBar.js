import React, { useState, useEffect } from "react";
import NavLinks from "../Navbar/NavLinks";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    const scrollHandler = () =>
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition duration-300 ease-in-out ${
        !top ? "bg-white shadow-lg" : ""
      }`}
      style={{ overflow: "visible" }}
    >
      <div className="flex items-center justify-between py-3 px-4 lg:px-12 w-full">
        {/* Left Side - Logo & Hamburger (Closer in mobile) */}
        <div className="flex items-center">
          {/* Hamburger Menu - Mobile Only */}
          <button className="p-1 text-blue-900 lg:hidden mr-2" onClick={handleClick}>
            {isOpen ? "✖️" : "☰"}
          </button>

          {/* Logo */}
          <HashLink smooth to="/#hero">
            <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-900 whitespace-nowrap">
              Swaminarayan Construction
            </h1>
          </HashLink>
        </div>

        {/* NavLinks - Web View Only */}
        <div className="hidden lg:flex space-x-6 items-center">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Sidebar - Not covering the full screen */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-xl z-40 p-6 flex flex-col space-y-4 lg:hidden"
          style={{ maxWidth: "75vw" }} // Sidebar takes only 75% of screen width
        >
          <button className="self-end text-xl" onClick={handleClick}>
            ✖️
          </button>
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
