import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';
import { userContact } from '../Connection/api';

const Contact = () => {
    useDocTitle('SWC');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const clearErrors = () => setErrors({});

    const clearInput = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Loading...';

        try {
            const registration = await userContact({ name, email, message });
            console.log('Send Data:', registration);

            clearInput();
            Notiflix.Report.success(
                'Success',
                'Your message has been sent successfully!',
                'Okay'
            );
        } catch (error) {
            const { response } = error;
            
            if (response?.status === 400) {
                Notiflix.Report.failure(
                    'Validation Error',
                    'Please fill in all required fields correctly.',
                    'Okay'
                );
            } else if (response?.status === 500) {
                Notiflix.Report.failure(
                    'Server Error',
                    response.data?.message || 'An unexpected error occurred. Please try again later.',
                    'Okay'
                );
            }
            
            // Handle backend error structure (if errors are returned as array or object)
            if (response?.data?.errors) {
                const formattedErrors = response.data.errors.reduce((acc, error) => {
                    acc[error.path] = error.message;
                    return acc;
                }, {});
                setErrors(formattedErrors);
            }
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
    };

    return (
        <>
            <NavBar />
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <form onSubmit={handleSubmit}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                                    Get In Touch
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Name*"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors?.name && (
                                        <p className="text-red-500 text-sm">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors?.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors?.message && (
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                )}
                            </div>

                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-gray-400">
                                        7785 Cavendish Place, Suwanee GA 30024
                                    </p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: 855-55-SWAMI</p>
                                    <div className="mt-5">
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">
                                            swaminarayanconstructionllc@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
