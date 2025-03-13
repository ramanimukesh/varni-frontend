import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/Kitchen/kitchen.jpeg";
import img2 from "../../images/Kitchen/kitchen1.jpeg";
import img3 from "../../images/Kitchen/kitchen2.jpg";
import img4 from "../../images/Kitchen/kitchen3.jpeg";
import img5 from "../../images/Kitchen/kitchen4.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer";

const Kitchen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
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
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="card img"
              className="rounded-t w-full h-auto object-cover"
              src={img2}
              data-aos="fade-left"
              data-aos-delay="700"
            />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="my-2 text-3xl text-blue-900 uppercase font-bold ">
              Kitchen Remodeling
            </h2>
            <h3 className="text-3xl text-blue-900 font-bold ">
              Professional Renovation and Remodeling Services in Atlanta, GA
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold text-justify">
                Swaminarayan Construction Kitchens and Remodeling is recognized
                as Georgia’s most skilled and detail-oriented kitchen
                installation expert. Based in Atlanta, GA, our team of
                carpenters brings over 5 years of combined experience to every
                project. Founded by a dedicated husband-and-wife team, we are a
                fully licensed, bonded, and insured remodeling contractor
                specializing in kitchen remodeling, bathroom remodeling, and
                flooring. For years, we’ve been transforming homes with stunning
                kitchen and bathroom designs that exceed expectations. At
                Swaminarayan Construction, we pride ourselves on offering
                exceptional prices and top-notch installation services for
                cabinets, countertops, and flooring.
              </p>
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

      {/* <div>
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold mb-4">
          Kitchen Design Styles
        </h2>
        <div className="w-full bg-gray-100">
          <div className="bg-white w-full h-auto px-6 py-10 text-gray-700 text-center shadow-2xl">
            <h2 className="font-semibold mb-4 text-4xl">
              Modern Kitchen Style
            </h2>
            <p className="text-lg font-medium">
              Sleek, clean lines, minimalism, and a focus on functionality
              define modern kitchen design. You are providing your kitchen with
              a more opulent and seductive appearance.
            </p>
          </div>
          <div className="bg-white w-full h-auto px-6 py-10 text-gray-700 text-center shadow-2xl mt-6">
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
          <div className="bg-white w-full h-auto px-6 py-10 text-gray-700 text-center shadow-2xl mt-6">
            <h2 className="font-semibold mb-4 text-4xl">
              Contemporary Kitchen Style
            </h2>
            <p className="text-lg font-medium">
              Contemporary style is a current or modern approach to design,
              building, fashion, or art. It is distinguished by its focus on
              clarity, minimalism, and clean lines while adding contemporary and
              futuristic aesthetic elements.
            </p>
          </div>
        </div>
      </div> */}

      <div className="w-full py-12 bg-gray-100">
        <h2 className="text-center text-4xl text-blue-900 font-extrabold uppercase mb-10">
          Kitchen Design Styles
        </h2>

        {/* Top Section: Modern Kitchen Style */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Modern Kitchen Style
            </h2>
            <p className="text-lg text-gray-600">
              Sleek, clean lines, minimalism, and a focus on functionality
              define modern kitchen design, giving your kitchen an opulent and
              stylish look.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Transitional Kitchen Style
            </h2>
            <p className="text-lg text-gray-600">
              A blend of traditional and modern elements creates a timeless and
              harmonious kitchen atmosphere with both elegance and function.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contemporary Kitchen Style
            </h2>
            <p className="text-lg text-gray-600">
              Defined by clarity, minimalism, and clean lines, contemporary
              kitchens incorporate futuristic aesthetics for a sleek and modern
              feel.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Features of Kitchen Renovation
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Electrical and plumbing equipment
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  To improve the operation of your kitchen, you might want to
                  change your appliances and fixtures as well. We have countless
                  solutions to boost efficiency and change the drab appearance
                  of your kitchen.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Backsplashes
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  You must put backsplashes in your kitchen if elegance is your
                  thing. Backsplashes are a great way to give your kitchen a
                  facelift and make it more upscale and inviting for your family
                  and guests.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Kitchen Islands and Countertops
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  You may create the kitchen of your dreams by replacing your
                  countertops or building valuable islands. Various styles,
                  colors, and countertop materials are available to match your
                  taste and style. Similarly, if you want to expand your
                  kitchen, consider adding an island.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Cabinetry
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  Cabinets are a beautiful and valuable addition to any kitchen.
                  It's likely that if your kitchen cabinets were installed many
                  years ago, they are now out-of-date, harmed, and unsightly.
                  With custom kitchen cabinets from KDO Kitchens and Remodeling,
                  you can make a statement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Scheduling & Consultation for Kitchen Renovation
        </h2>
        <p className="w-3/4 text-lg text-gray-700">
          Being a leading provider of kitchen remodeling services, delivering
          “pure gold” in artistry and material quality is KDO Kitchens and
          Remodeling. We complete all renovations without worry, whether you
          want to add more space, enhance efficiency, create a universal kitchen
          design, or create a kid-friendly kitchen.
        </p>
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
      <Footer />
    </>
  );
};

export default Kitchen;
