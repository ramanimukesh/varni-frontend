import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
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

      {/* Wrap both button and dropdown inside the same "group" div */}
      <div className="relative inline-block group">
        <Link
          to="/service"
          onClick={() => smoothScroll("services")}
        >
          <button className="px-4 font-extrabold text-blue-900 hover:text-blue-900">
            SERVICES
          </button>
        </Link>

        <ul className="hidden group-hover:block absolute left-0 mt-2 w-40 ">
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
      </div>

      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/recent-projects"
      >
        RECENT PROJECTS
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/"
        onClick={() => smoothScroll("portfolio")}
      >
        REVIEWS
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/blog"
      >
        BLOG
      </Link>
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/press"
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
        444-444-4444
      </Link>
    </>
  );
};

export default NavLinks;