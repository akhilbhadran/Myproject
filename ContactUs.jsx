'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_wy5iq5p',     // replace with your EmailJS service ID
      'template_cboerit',    // replace with your template ID
      formData,
      'hFbHoIT2Qx0r2DWkW'         // replace with your public key
    ).then(() => {
      alert("Your inquiry has been submitted!We'll be in touch shortly.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    }).catch((error) => {
      console.error("FAILED...", error);
      alert("Message failed to send. Try again.");
    });
  };

  return (
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] -mb-32 relative z-0">


      {/* Left Side - Contact Info */}
      <div className="bg-[#7A0F0F] text-white p-10 flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-lg">We are here to help you</p>

        <div className="space-y-6 mt-6 text-base">
          <div className="flex items-center gap-4">
            <i className="fas fa-phone text-2xl"></i>
            <span>052-8326933</span>
          </div>
          <div className="flex items-center gap-4">
            <i className="fas fa-envelope text-2xl"></i>
            <span>afcleaning.pest@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <i className="fas fa-map-marker-alt text-2xl"></i>
            <span>Ras Al Khaima, UAE</span>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-[#eafafa] p-10 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Let’s Talk</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white bg-opacity-70 backdrop-blur-lg border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#7A0F0F] transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white bg-opacity-70 backdrop-blur-lg border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#7A0F0F] transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-white bg-opacity-70 backdrop-blur-lg border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#7A0F0F] transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-white bg-opacity-70 backdrop-blur-lg border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#7A0F0F] transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#7A0F0F] to-[#500c0c] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
