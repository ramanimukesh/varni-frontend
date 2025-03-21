import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import Notiflix from "notiflix";
import {userVendor } from "../Connection/api";

const services = [
  "Plumber",
  "Electrician",
  "Tiling",
  "Flooring",
  "Roofing",
  "Drywall",
  "Paint",
  "Trim Work",
  "Other",
];

const Vendor = () => {
  useDocTitle("SWC");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    address: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^[0-9]*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await userVendor(formData);
      Notiflix.Report.success("Success", "Your message has been sent successfully!", "Okay");
      setFormData({ name: "", company: "", address: "", phone: "", service: "", message: "" });
      setErrors({});
    } catch (error) {
      Notiflix.Report.failure("Error", error.response?.data?.message || "An error occurred", "Okay");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl lg:w-9/12">
            <h1 className="font-bold text-center text-blue-900 uppercase text-4xl">Get In Touch</h1>
            <div className="grid grid-cols-1 gap-5 mt-5">
              {["name", "company", "address", "phone", "message"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-gray-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)} *
                  </label>
                  <input
                    id={field}
                    name={field}
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                    type={field === "phone" ? "text" : "text"}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                </div>
              ))}

              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block text-gray-700">
                  Service *
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
              </div>
            </div>

            <div className="mt-8">
              <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vendor;

