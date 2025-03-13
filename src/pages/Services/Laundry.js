import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/Laundry/laundry1.webp";
import img2 from "../../images/Laundry/laundry2.webp";
import img3 from "../../images/Laundry/laundry.jpg";
import img4 from "../../images/Laundry/laundry3.webp";
import img5 from "../../images/Laundry/laundry4.webp";
import img6 from "../../images/Laundry/laundry5.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer";

const Laundry = () => {
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
                  Laundry Remodeling in Atlanta Georgia
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
              className="rounded-t w-full h-[600px] object-cover"
              src={img4}
              data-aos="fade-left"
              data-aos-delay="700"
            />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="my-2  text-3xl text-blue-900 uppercase font-bold">
              Laundry Room Remodeling
            </h2>
            <h3 className="text-3xl text-blue-900 font-bold ">
              Turn Your Laundry Room into a Stylish and Functional Space with
              Swaminarayan
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold text-justify">
                Transform your outdated Laundry Room interiors into a stunning
                oasis with Swaminarayan Construction! Don’t let your morning
                routine be ruined by an uninviting and crumbling Laundry Room.
                As your trusted partner for Home Remodeling Services in Atlanta,
                Georgia, we specialize in delivering impeccable Laundry Room
                renovation solutions that are sure to impress. Our experienced
                team of accredited remodelers has been winning the hearts of
                countless homeowners in Atlanta, Georgia, for years with their
                exceptional workmanship, attention to detail, and commitment to
                completing projects on time and within budget. We understand
                that every Laundry Room has its unique set of requirements, and
                we take the time to understand your needs and preferences to
                deliver a customized and functional space. From high-quality
                fittings to stunning interiors, we’ve got you covered.
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
            LAUNDRY Remodeling From A-Z with attention to the smallest
            detail
          </h2>

          <div className="flex justify-center">
            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[img1, img2, img3, img4, img5, img6].map((img, index) => (
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

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-4xl text-blue-900 uppercase font-bold ">
          LAUNDRY ROOM REMODELLING WITH SWAMINARAYAN CONSTRUCTION{" "}
        </h2>
        <p className="w-3/4 text-xl text-gray-700">
          Renovating or rebuilding the laundry room in a house can increase its
          usability, effectiveness, and aesthetic appeal. It aspires to produce
          a tidy environment that makes washing laundry simpler and more fun.
        </p>
      </div>
      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Here are some factors that are often considered while redesigning a
          laundry room:{" "}
        </h2>
        <ul className=" text-2xl text-gray-600 my-3 text-xl text-gray-600 ">
          <li>
            <strong>Upgraded Appliances:</strong> Modern washers and dryers
            offer energy efficiency, larger capacities, intelligent controls,
            and customized cycles for various fabric types, enhancing usability
            and effectiveness.
          </li>
          <li>
            <strong>Countertops and Sinks:</strong> Installing countertops and
            sinks provides a convenient space for folding clothes, sorting
            laundry, and removing stains. Durable, easy-to-clean surfaces work
            best.
          </li>
          <li>
            <strong>Layout & Design:</strong> A well-planned laundry room layout
            optimizes space and efficiency. Proper placement of sinks,
            countertops, and storage cabinets ensures a seamless workflow.
          </li>
          <li>
            <strong>Storage Solutions:</strong> Adequate storage helps keep
            detergents, cleaning supplies, and ironing essentials organized.
            Adding cabinets, shelves, or specialized laundry storage solutions
            maximizes space and functionality.
          </li>
          <li>
            <strong>Lighting & Ventilation:</strong> Proper lighting enhances
            visibility, while good ventilation prevents excessive humidity and
            odors. In rooms without windows, adequate airflow is essential for
            maintaining a fresh environment.
          </li>
        </ul>

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
export default Laundry;
