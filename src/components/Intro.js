import React from "react";
import img from "../images/Kitchen/kitchen.jpeg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="w-full p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          {/* Left Side: Text Content */}
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl text-blue-900 font-bold">
              Professional Renovation and Remodeling Services in Atlanta, GA
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Swaminarayan Construction Kitchens and Remodeling is recognized as Georgia’s most
                skilled and detail-oriented kitchen installation expert. Based
                in Atlanta, GA, our team of carpenters brings over 5 years of
                combined experience to every project. Founded by a dedicated
                husband-and-wife team, we are a fully licensed, bonded, and
                insured remodeling contractor specializing in kitchen
                remodeling, bathroom remodeling, and flooring. For years, we’ve
                been transforming homes with stunning kitchen and bathroom
                designs that exceed expectations. At Swaminarayan Construction, we pride ourselves
                on offering exceptional prices and top-notch installation
                services for cabinets, countertops, and flooring.
              </p>

              <h3 className="text-3xl text-blue-900 font-bold">
                Luxurious Comfort Meets Modern Design
              </h3>
            </div>
            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="card img"
              className="rounded-t w-full h-auto object-cover"
              src={img}
              data-aos="fade-left"
              data-aos-delay="700"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;