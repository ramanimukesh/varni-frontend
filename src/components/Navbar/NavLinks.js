import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const buttonRef = useRef(null);

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

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); 
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

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

      <div className="relative inline-block" ref={dropdownRef}>
        <button
          className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
          onClick={handleDropdownToggle} // Toggle dropdown on button click
          ref={buttonRef}
        >
          SERVICES
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-2xl">
            <li>
              <Link
                className="block px-6 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 transition"
                to="/kitchen"
                onClick={() => smoothScroll("service1")}
              >
                Kitchen Remodeling
              </Link>
            </li>
            <li>
              <Link
                className="block px-6 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 transition"
                to="/bathroom"
                onClick={() => smoothScroll("service2")}
              >
                Bathroom Remodeling
              </Link>
            </li>
            <li>
              <Link
                className="block px-6 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 transition"
                to="/laundry"
                onClick={() => smoothScroll("service3")}
              >
                Laundry Room Remodeling
              </Link>
            </li>
            <li>
              <Link
                className="block px-6 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 transition"
                to="/flooring"
                onClick={() => smoothScroll("service4")}
              >
                Flooring
              </Link>
            </li>
            <li>
              <Link
                className="block px-6 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 transition"
                to="/quartz"
                onClick={() => smoothScroll("service5")}
              >
                Quartz
              </Link>
            </li>
          </ul>
        )}


      </div>

      {/* <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/#recent-projects"
      >
        RECENT PROJECTS
      </Link> */}
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
      {/* <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/#press"
      >
        PRESS
      </Link> */}
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
        <Phone className="w-5 h-5 mr-2" /> {/* Phone Icon */}
        855-55-SWAMI
      </Link>
    </>
  );
};

export default NavLinks;
