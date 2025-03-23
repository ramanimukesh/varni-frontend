import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/Roof/image1.jpg";
import img2 from "../../images/Roof/image2.jpg";
import img3 from "../../images/Roof/image3.jpg";
import img4 from "../../images/Roof/image4.jpg";
import img5 from "../../images/Roof/image5.jpg";
import img6 from "../../images/Roof/image6.jpg";
import img7 from "../../images/Roof/image7.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer";

const Roof = () => {
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
                  Roof Remodeling in Atlanta Georgia
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
              className="rounded-t h-auto object-cover ml-2"
              src={img3}
              data-aos="fade-right"
              data-aos-delay="700"
            />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="my-2 text-3xl text-blue-900 uppercase font-bold">
              Roof Remodeling
            </h2>
            <h3 className="text-3xl text-blue-900 font-bold">
              Transform Your Roof with the Best Remodeling Contractor in
              Atlanta, GA
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold text-left">
                Transform your outdated bathroom interiors into a stunning oasis
                with Swaminarayan Construction! Don’t let your morning routine
                be ruined by an uninviting and crumbling bathroom. As your
                trusted partner for Home Remodelling Services in Atlanta
                Georgia, we specialize in delivering impeccable bathroom
                renovation solutions that are sure to impress. Our experienced
                team of accredited remodelers has been winning the hearts of
                countless homeowners in Atlanta Georgia for years with their
                exceptional workmanship, attention to detail, and commitment to
                completing projects on time and within budget. We understand
                that every bathroom has its unique set of requirements, and we
                take the time to understand your needs and preferences to
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
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold ">
            Luxury Bathroom Remodeling From A-Z with attention to the smallest
            detail
          </h2>

          <div className="flex justify-center">
            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[img1, img2, img4, img5,img6, img7].map((img, index) => (
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
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Scheduling & Consultation for Roof Renovation
        </h2>
        <p className="w-3/4 text-lg text-gray-700">
        "Swaminarayan Construction and Remodeling offers expert roof remodeling services, perfect for those seeking elegance and durability. Quartz surfaces provide a sleek, modern look while being low-maintenance and highly functional. Whether upgrading countertops or backsplashes, we ensure your space combines beauty with long-lasting quality."
        </p>
        <Link
          to="/contact"
          className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
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
export default Roof;
