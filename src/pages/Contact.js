import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import Notiflix from "notiflix";
import { userContact } from "./http/api"; 

const Contact = (props) => {
  useDocTitle("SWC");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [project, setProject] = useState("");
  const [media, setMedia] = useState("");
  const [errors, setErrors] = useState([]);

  const clearErrors = () => setErrors([]);

  const clearInput = () => {
    setName("");
    setLastname("");
    setEmail("");
    setPhone("");
    setAddress("");
    setZip("");
    setMessage("");
    setService("");
    setProject("");
    setMedia("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";

    try {
      // Pass an object with name, email, and message
      const registration = await userContact({
        name,
        lastname,
        email,
        phone,
        address,
        zip,
        message,
        service,
        project,
        media,
      });
      console.log("Send Data:", registration);

      // Clear inputs and show success message
      clearInput();
      Notiflix.Report.success(
        "Success",
        "Your message has been sent successfully!",
        "Okay"
      );
    } catch (error) {
      const { response } = error;
      if (response?.status === 500) {
        Notiflix.Report.failure(
          "An error occurred",
          response.data.message,
          "Okay"
        );
      }
      if (response?.data?.errors) {
        setErrors(response.data.errors);
      }
    } finally {
      document.getElementById("submitBtn").disabled = false;
      document.getElementById("submitBtn").innerHTML = "Send Message";
    }
  };

  return (
    <>
      <NavBar />
      <div
        id="contact"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24"
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <form onSubmit={handleSubmit}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                  Get In Touch
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                {/* First Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700">First Name*</label>
                  <input
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors?.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                {/* Last Name */}
                <div>
                  <label htmlFor="lastname" className="block text-gray-700">Last Name*</label>
                  <input
                    id="lastname"
                    name="lastname"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors?.lastname && (
                    <p className="text-red-500 text-sm">{errors.lastname}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email*</label>
                  <input
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors?.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700">Phone*</label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors?.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 mt-5">
                <div>
                  <label htmlFor="service" className="block text-gray-700">Select a Service*</label>
                  <select
                    id="service"
                    className="w-full bg-gray-100 text-gray-400 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                    <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                    <option value="Laundry Room Remodeling">Laundry Room Remodeling</option>
                    <option value="Flooring">Flooring</option>
                    <option value="Quartz">Quartz</option>
                  </select>
                  {errors?.service && (
                    <p className="text-red-500 text-sm">{errors.service}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="project" className="block text-gray-700">When are you planning to start your project?*</label>
                  <select
                    id="project"
                    className="w-full bg-gray-100 text-gray-400 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="0 - 3 Months">0 - 3 Months</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="+6 Months">+6 Months</option>
                  </select>
                  {errors?.project && (
                    <p className="text-red-500 text-sm">{errors.project}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <label htmlFor="address" className="block text-gray-700">Home Address*</label>
                  <input
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors?.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="zip" className="block text-gray-700">Zip Code*</label>
                  <input
                    id="zip"
                    name="zip"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors?.zip && (
                    <p className="text-red-500 text-sm">{errors.zip}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 mt-5">
                <div>
                  <label htmlFor="media" className="block text-gray-700">How did you hear about us?*</label>
                  <select
                    id="media"
                    className="w-full bg-gray-100 text-gray-400 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    value={media}
                    onChange={(e) => setMedia(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Google">Google</option>
                    <option value="Magazine">Magazine</option>
                    <option value="Radio">Radio</option>
                  </select>
                  {errors?.media && (
                    <p className="text-red-500 text-sm">{errors.media}</p>
                  )}
                </div>
              </div>

              <div className="my-4">
                <label htmlFor="message" className="block text-gray-700">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors?.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <div className="my-2 text-center">
                <button
                  id="submitBtn"
                  type="submit"
                  className="bg-blue-700 text-white py-3 px-6 rounded-lg w-full"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
