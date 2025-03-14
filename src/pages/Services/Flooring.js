import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import Slider from "react-slick";
import img1 from "../../images/Flooring/flooring1.png";
import img2 from "../../images/Flooring/vinyl-floor.jpg";
import img3 from "../../images/Flooring/Hardwood-Flooring.webp";
import img4 from "../../images/Flooring/Marble-Flooring.webp";
import img5 from "../../images/Flooring/Natural-Stone-Flooring-.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer";

const Flooring = () => {
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
                  Flooring Remodeling in Atlanta Georgia
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
              className="rounded-t max-w-[80%] h-auto object-cover mx-auto"
              src={img2}
              data-aos="fade-left"
              data-aos-delay="700"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start w-full lg:w-1/2 px-8 h-full"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="my-2 text-3xl text-blue-900 uppercase font-bold text-center">
              Flooring Remodeling
            </h2>
            <h3 className="text-3xl text-blue-900 font-bold text-center">
              Transform Your Flooring with the Best Remodeling Contractor in
              Atlanta, GA
            </h3>
            <p className="my-3 text-xl text-gray-600 font-semibold">
              Transform your outdated flooring interiors into a stunning oasis
              with Swaminarayan Construction! Don’t let your morning routine be
              ruined by an uninviting and crumbling flooring. We specialize in
              delivering impeccable flooring renovation solutions that are sure
              to impress.
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
        </div>
      </div>

      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            WHAT WE DO
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Experience The Ultimate In Luxury With Our Flooring Remodels
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                src: img4,
                title: "Marble Flooring",
                desc: "Indulge in the luxurious beauty and elegance of marble flooring with swaminarayan construction' exceptional flooring services in Atlanta, Georgia. Marble flooring is a statement of sophistication, adding a touch of opulence to any room. Our team of experts understands the intricacies of working with this exquisite material, ensuring every cut and installation is flawless. With its timeless appeal, marble flooring adds value to your home and creates an inviting atmosphere that is second to none. Let us help you transform your space into a work of art with our high-quality materials and impeccable attention to detail.",
              },
              {
                src: img5,
                title: "Natural Stone Flooring",
                desc: "The timeless beauty and durability of natural stone flooring can elevate any space to new heights. At swaminarayan construction, we offer a wide range of options to suit your style and needs, from sleek and modern to warm and rustic. Our knowledgeable installers bring out the best in each unique piece, creating stunning and lasting results. Natural stone flooring adds unparalleled elegance and sophistication to any room, making it a smart and luxurious investment for your home or business. Choose swaminarayan construction to experience exceptional flooring services that exceed your expectations, and let us help you transform your space into a breathtaking masterpiece.",
              },
              {
                src: img3,
                title: "Hardwood Flooring",
                desc: "Discover the timeless beauty of hardwood flooring with Swaminarayan Construction. Our expert team of craftsmen provides top-quality flooring services in Atlanta, Georgia. Each plank is carefully selected for its unique character and grain, creating an exotic and luxurious look that will elevate the style of your home or business. From traditional oak to sleek and modern walnut, we offer a wide variety of hardwood species to suit your individual taste and design aesthetic. Trust us to bring warmth, sophistication, and durability to your floors with our expert installation and exceptional customer service. Contact us today to schedule your consultation and see the transformative power of hardwood flooring",
              },
              {
                src: img1,
                title: "Vinyl Flooring",
                desc: "Vinyl flooring is a stylish and practical choice for any space in your home or business. With KDO Kitchens' flooring services in Atlanta, you can experience the durability and versatility of vinyl flooring in a variety of colors, textures, and patterns. Our team of experts will help you choose the perfect vinyl flooring that complements your interior design and suits your lifestyle. Whether it's for your kitchen, bathroom, or office space, we'll ensure that your vinyl flooring is installed with precision and care. Count on us to provide you with exceptional flooring services that exceed your expectations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"
              >
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                    src={item.src}
                  />
                  <h2 className="font-semibold my-6 text-2xl text-center">
                    {item.title}
                  </h2>
                  <p className="text-lg font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Scheduling & Consultation for Flooring Renovation
        </h2>
        <p className="w-3/4 text-lg text-gray-700">
        Swaminarayan Construction and Remodeling offers top-quality flooring remodeling services with expert craftsmanship and premium materials. Whether you prefer elegant hardwood, stylish tile, or durable vinyl, we provide tailored solutions to enhance your space. Our team ensures a seamless renovation, delivering beautiful, long-lasting flooring that elevates your home’s comfort and style.
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
export default Flooring;
