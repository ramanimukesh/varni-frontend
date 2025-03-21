import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import Notiflix from "notiflix";
import { userContact } from "../Connection/api";

const Contact = () => {
  useDocTitle("SWC");

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    message: "",
    service: "",
    project: "",
    media: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    service: "",
    project: "",
    media: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === "phone" || name === "zip") && !/^\d*$/.test(value)) return; // Allow only numbers
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault(); // Prevent non-numeric key press
    }
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = !value ? "Email is required" : !emailRegex.test(value) ? "Enter a valid email address" : "";
        break;
      case "phone":
        const phoneRegex = /^[0-9]{10}$/;
        newErrors.phone = !value ? "Phone number is required" : !phoneRegex.test(value) ? "Enter a valid 10-digit phone number" : "";
        break;
      case "zip":
        const zipRegex = /^[0-9]{5}$/;
        newErrors.zip = !value ? "Zip code is required" : !zipRegex.test(value) ? "Enter a valid 5-digit zip code" : "";
        break;
      case "name":
        newErrors.name = !value ? "First Name is required" : "";
        break;
      case "lastname":
        newErrors.lastname = !value ? "Last Name is required" : "";
        break;
      case "address":
        newErrors.address = !value ? "Address is required" : "";
        break;
      case "service":
        newErrors.service = !value ? "Please select a service" : "";
        break;
      case "project":
        newErrors.project = !value ? "Please specify your project start time" : "";
        break;
      case "media":
        newErrors.media = !value ? "Please select how you heard about us" : "";
        break;
      case "message":
        newErrors.message = !value ? "Message is required" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    let formValid = true;
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validateField(key, formData[key]);
        formValid = false;
      }
    });
    return formValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";

    try {
      const response = await userContact(formData);
      Notiflix.Report.success("Success", "Your message has been sent successfully!", "Okay");
      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        message: "",
        service: "",
        project: "",
        media: ""
      });
    } catch (error) {
      Notiflix.Report.failure("Error", error.response?.data?.message || "An error occurred", "Okay");
    } finally {
      document.getElementById("submitBtn").disabled = false;
      document.getElementById("submitBtn").innerHTML = "Send Message";
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Get In Touch</h1>
              <h3 className="my-3 text-xl text-gray-600 font-semibold text-left text-justify">Have a kitchen or bathroom remodeling project in mind? Let Swaminarayan Construction’ years of knowledge and experience work for you. Fill out our online form now to schedule your in-home consultation and cost estimate.</h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                {["name", "lastname", "email", "phone"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-gray-700">
                      {field === "name" ? "First Name" : field === "lastname" ? "Last Name" : field.charAt(0).toUpperCase() + field.slice(1)} *
                    </label>
                    <input
                      id={field}
                      name={field}
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={handleChange}
                      onKeyPress={field === "phone" || field === "zip" ? handleKeyPress : null}
                    />
                    {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-5 mt-5">
                {["service", "project"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-gray-700">
                      {field === "service" ? "Select a Service" : "When are you planning to start your project?"} *
                    </label>
                    <select
                      id={field}
                      name={field}
                      className="w-full bg-gray-100 text-gray-400 mt-2 p-3 rounded-lg focus:outline-none"
                      value={formData[field]}
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      {field === "service" && (
                        <>
                          <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                          <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                          <option value="Laundry Room Remodeling">Laundry Room Remodeling</option>
                          <option value="Flooring">Flooring</option>
                          <option value="Quartz">Quartz</option>
                        </>
                      )}
                      {field === "project" && (
                        <>
                          <option value="0 - 3 Months">0 - 3 Months</option>
                          <option value="3 - 6 Months">3 - 6 Months</option>
                          <option value="+6 Months">+6 Months</option>
                        </>
                      )}
                    </select>
                    {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-5 mt-5">
                {["address", "zip"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-gray-700">
                      {field === "address" ? "Home Address" : "Zip Code"} *
                    </label>
                    <input
                      id={field}
                      name={field}
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                      type="text"
                      value={formData[field]}
                      onChange={handleChange}
                      onKeyPress={field === "zip" ? handleKeyPress : null}
                    />
                    {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <label htmlFor="media" className="block text-gray-700">
                  How did you hear about us? *
                </label>
                <select
                  id="media"
                  name="media"
                  className="w-full bg-gray-100 text-gray-400 mt-2 p-3 rounded-lg focus:outline-none"
                  value={formData.media}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="Social Media">Social Media</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Referral">Referral</option>
                  <option value="Others">Others</option>
                </select>
                {errors.media && <p className="text-red-500 text-sm">{errors.media}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-gray-700">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  id="submitBtn"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
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
