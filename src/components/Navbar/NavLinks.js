import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown container
  const buttonRef = useRef(null); // Ref for the services button

  // Smooth scroll function
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Toggle the dropdown visibility on button click
  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close dropdown if click is outside
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/"
        onClick={() => smoothScroll("home")}
      >
        HOME
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/"
        onClick={() => smoothScroll("about")}
      >
        ABOUT
      </Link>

      {/* Services Dropdown */}
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
          onClick={handleDropdownToggle} // Toggle dropdown on button click
          ref={buttonRef}
        >
          SERVICES
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-xl">
            <li>
              <Link
                className="block px-4 py-2 hover:bg-gray-100"
                to="/kitchen"
                onClick={() => smoothScroll("service1")}
              >
                Kitchen Remodeling
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-gray-100"
                to="/bathroom"
                onClick={() => smoothScroll("service2")}
              >
                Bathroom Remodeling
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-gray-100"
                to="/laundry"
                onClick={() => smoothScroll("service3")}
              >
                Laundry Room Remodeling
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-gray-100"
                to="/flooring"
                onClick={() => smoothScroll("service4")}
              >
                Flooring
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-gray-100"
                to="/quartz"
                onClick={() => smoothScroll("service5")}
              >
                Quartz
              </Link>
            </li>
          </ul>
        )}
      </div>

      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/#recent-projects"
      >
        RECENT PROJECTS
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/#"
        onClick={() => smoothScroll("portfolio")}
      >
        REVIEWS
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/#blog"
      >
        BLOG
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/#press"
      >
        PRESS
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/contact"
      >
        CONTACT
      </Link>
      <Link
        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        to="/get-demo"
      >
        855-55-SWAMI
      </Link>
    </>
  );
};

export default NavLinks;
