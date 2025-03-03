import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import img1 from '../images/kitchen.jpeg'; // Ensure this file exists
import img2 from '../images/bathroom.jpeg'; // Ensure this file exists
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    };

    const images = [img1, img2];

    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} className="relative h-screen">
                            <img 
                                alt="card img" 
                                className="w-full h-full object-cover" 
                                src={img} 
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                                    Transform Your Home with Atlanta’s Premier Remodeling Experts
                                </h1>
                                <div className="text-xl font-semibold tracking-tight mb-5 text-white">
                                    Get Your Free Kitchen & Bath Remodeling Quote Today!
                                </div>
                                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                    <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                        Contact Us
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Hero;