import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#home">
        HOME
      </HashLink>
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
        ABOUT
      </HashLink>

      {/* Wrap both button and dropdown inside the same "group" div */}
      <div className="relative inline-block group">
        {/* Add HashLink here to navigate to the 'services' section */}
        <HashLink to="/#services" smooth>
          <button className="px-4 font-extrabold text-gray-500 hover:text-blue-900">
            SERVICES
          </button>
        </HashLink>

        <ul className="hidden group-hover:block absolute left-0 mt-2 w-40 bg-white border shadow-md rounded-md">
          <li>
            <HashLink className="block px-4 py-2 hover:bg-gray-100" smooth to="/#service1">
              Service 1
            </HashLink>
          </li>
          <li>
            <HashLink className="block px-4 py-2 hover:bg-gray-100" smooth to="/#service2">
              Service 2
            </HashLink>
          </li>
          <li>
            <HashLink className="block px-4 py-2 hover:bg-gray-100" smooth to="/#service3">
              Service 3
            </HashLink>
          </li>
        </ul>
      </div>

      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
        RECENT PROJECTS
      </HashLink>
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
        REVIEWS
      </HashLink>
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
        BLOG
      </HashLink>
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
        PRESS
      </HashLink>
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
        CONTACT
      </HashLink>
      <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
        Demo our products
      </HashLink>
    </>
  );
};

export default NavLinks;
