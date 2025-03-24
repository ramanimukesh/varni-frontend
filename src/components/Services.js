import React from "react";
import { Link } from "react-router-dom";
import img from "../images/Kitchen/kitchen.jpeg";
import img2 from "../images/Bathroom/image2.jpg";
import img3 from "../images/Laundry/laundry.jpg";
import img4 from "../images/Flooring/vinyl-floor.jpg";
import img5 from "../images/Basement/image2.jpg";
import img6 from "../images/Deck/image1.jpg";
import img7 from "../images/Roof/image4.jpg";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/kitchen" className="hover:text-gray-300">
                    Kitchen Remodeling
                  </Link>
                </h2>
                <p className="text-md font-medium">
                  Transform your kitchen into a stunning and functional space
                  with our expert remodeling services. From sleek countertops to
                  custom cabinetry, we craft designs that combine style and
                  practicality. Let us bring your dream kitchen to life!
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link
                    to="/bathroom"
                    className="hover:text-gray-300"
                  >
                    Bathroom Remodeling
                  </Link>
                </h2>
                <p className="text-md font-medium">
                  Transform your bathroom into a luxurious retreat with our
                  expert remodeling services. From modern fixtures to elegant
                  finishes, we design spaces that blend comfort, style, and
                  functionality. Elevate your home with a bathroom makeover that
                  reflects your unique taste.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img3}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link
                    to="/laundry"
                    className="hover:text-gray-300"
                  >
                    Laundry Room Remodeling
                  </Link>
                </h2>
                <p className="text-md font-medium">
                  Transform your laundry room into a stylish and efficient space
                  with our expert remodeling services. Maximize storage, improve
                  functionality, and elevate the aesthetics of your home—all
                  designed to simplify your daily routine.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img5}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link
                    to="/basement"
                    className="hover:text-gray-300"
                  >
                    Basement Remodeling
                  </Link>
                </h2>
                <p className="text-md font-medium">
                  Transform your basement into a functional and stylish living
                  space with our expert remodeling services. Whether it's a cozy
                  retreat, home office, or entertainment zone, we turn your
                  vision into reality.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img6}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/deck" className="hover:text-gray-300">
                    Deck & Fencing
                  </Link>
                </h2>
                <p className="text-md font-medium">
                  Transform your outdoor space into a stylish retreat with
                  expert deck remodeling services, designed to enhance both
                  aesthetics and functionality for year-round enjoyment.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img7}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/roof" className="hover:text-gray-300">
                    Roof Replacement
                  </Link>
                </h2>
                <p className="text-md font-medium">
                  Upgrade your home with a durable, high-quality roof
                  replacement that enhances curb appeal and protects against the
                  elements for years to come.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/flooring" className="hover:text-gray-300">
                    Flooring
                  </Link>
                </h2>
                <p className="text-md font-medium">
                  Transform your space with stunning flooring solutions that
                  combine durability, elegance, and style. Whether you're
                  upgrading your home or business, our expert remodeling
                  services deliver flawless finishes tailored to your vision.
                  Step into comfort and beauty with flooring designed to last.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/quartz" className="hover:text-gray-300">
                    Quartz
                  </Link>
                </h2>
                <p className="text-md font-medium">
                  Elevate your home with stunning quartz countertops, blending
                  style, functionality, and lasting quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
