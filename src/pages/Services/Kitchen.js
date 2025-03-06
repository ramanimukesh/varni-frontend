import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/Kitchen/kitchen.jpeg"; // Ensure this file exists
import img2 from "../../images/Kitchen/kitchen1.jpeg"; // Ensure this file exists
import img3 from "../../images/Kitchen/kitchen2.jpg"; // Ensure this file exists
import img4 from "../../images/Kitchen/kitchen3.jpeg"; // Ensure this file exists
import img5 from "../../images/Kitchen/kitchen4.jpeg"; // Ensure this file exists

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Kitchen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  const images = [img1, img2];
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="relative h-[50vh]">
              {" "}
              {/* Set height to half screen */}
              <img
                alt="carousel img"
                className="w-full h-full object-cover"
                src={img}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                  Kitchen Remodeling in Atlanta Georgia
                </h1>
                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                  <Link
                    to="/contact"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                  >
                    Contact Us
                    <svg
                      className="w-4 h-4 ml-1"
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
              </div>
            </div>
          ))}
        </Slider>
      </div>
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
              src={img2}
              data-aos="fade-left"
              data-aos-delay="700"
            />
          </div>
        </div>
      </div>
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Luxury Kitchen Remodeling From A-Z with attention to the smallest
            detail
          </h2>

          <div className="flex justify-center">
            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[img1, img2, img3, img4, img5].map((img, index) => (
                  <div
                    key={index}
                    className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"
                  >
                    <div className="m-2 text-justify text-sm">
                      <img
                        alt="card img"
                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full h-[350px] object-cover"
                        src={img}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold mb-6">
          Kitchen Design Styles
        </h2>
        <div className="w-full h-screen bg-gray-100">
          <div className="bg-white w-full h-auto px-6 py-10 text-gray-700 text-center shadow-2xl mb-8">
            <h2 className="font-semibold mb-4 text-4xl">
              Modern Kitchen Style
            </h2>
            <p className="text-lg font-medium">
              Sleek, clean lines, minimalism, and a focus on functionality
              define modern kitchen design. You are providing your kitchen with
              a more opulent and seductive appearance.
            </p>
          </div>
          <div className="bg-white w-full h-auto px-6 py-10 text-gray-700 text-center shadow-2xl mb-8">
            <h2 className="font-semibold mb-4 text-4xl">
              Transitional Kitchen Style
            </h2>
            <p className="text-lg font-medium">
              A transitional kitchen is a well-liked design that combines
              traditional and modern components. It gives a balanced and
              timeless appearance, fusing traditional and contemporary elements
              to produce a peaceful environment.
            </p>
          </div>
          <div className="bg-white w-full h-auto px-6 py-10 text-gray-700 text-center shadow-2xl mb-8">
            <h2 className="font-semibold mb-4 text-4xl">
              Contemporary Kitchen Style
            </h2>
            <p className="text-lg font-medium">
              Contemporary style is a current or modern approach to design,
              building, fashion, or art. It is distinguished by its focus on
              clarity, minimalism, and clean lines while adding contemporary and
              futuristic aesthetic elements. Modern design frequently reflects
              current fashions and interests and might differ based on cultural
              influences and personal preferences.
            </p>
          </div>
          <div className="bg-white w-full h-auto px-6 py-10 text-gray-700 text-center shadow-2xl mb-8">
            <h2 className="font-semibold mb-4 text-4xl">
              Farmhouse Kitchen Style
            </h2>
            <p className="text-lg font-medium">
              Traditional, country, and vintage design elements combine to
              create the rustic and endearing aesthetics defining
              farmhouse-style kitchens. Common characteristics and design
              components in farmhouse-style kitchens: Countertops: Popular
              options for farmhouse kitchen countertops are butcher block,
              granite, or soapstone. They match the overall decor while also
              creating a cozy and welcoming atmosphere. Large, apron-front sinks
              are a distinguishing feature of a farmhouse kitchen. These sinks,
              which often have deep basins and are composed of materials like
              fireclay or cast iron, give the room a vintage feel.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kitchen;
