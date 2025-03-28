import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import '../../styles/tooltip.css';

const NavLinks = ({ scrollToTop }) => {
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
      setIsOpen(false);
    }
  };

  // Close dropdown if clicking outside
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
        to="/#"
        onClick={scrollToTop}
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
          onClick={() => setIsOpen((prev) => !prev)}
          ref={buttonRef}
        >
          SERVICES ▼
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-2xl">
            {[
              { label: "Kitchen Remodeling", id: "service1", path: "/kitchen" },
              { label: "Bathroom Remodeling", id: "service2", path: "/bathroom" },
              { label: "Laundry Room Remodeling", id: "service3", path: "/laundry" },
              { label: "Basement Remodeling", id: "service4", path: "/basement" },
              { label: "Deck & Fencing", id: "service5", path: "/deck" },
              { label: "Roof Replacement", id: "service6", path: "/roof" },
              { label: "Flooring", id: "service7", path: "/flooring" },
              { label: "Quartz", id: "service8", path: "/quartz" },
            ].map(({ label, id, path }) => (
              <li key={id}>
                <Link
                  className="block px-6 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 transition"
                  to={path}
                  onClick={() => smoothScroll(id)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/"
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
        to="/contact"
        onClick={scrollToTop}
      >
        CONTACT
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/vendor"
        onClick={scrollToTop}
      >
        VENDOR
      </Link>
      <button
        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
      >
        <Phone className="w-5 h-5 mr-2" /> 
        <label htmlFor="phone" className="tooltip">
              855-557-9264
              {/* Tooltip Text */}
              <span className="tooltip-text">
                {/* Phone Icon and Text */}
                <span className="tooltip-icon">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="tooltip-text-content">855-55-SWAMI</span>
              </span>
        </label>
      </button>
    </>
  );
};

export default NavLinks;
