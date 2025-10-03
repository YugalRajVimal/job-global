import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";

export default function ContactUsComp() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    passportNumber: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      fullName,
      fatherName,
      passportNumber,
      country,
      state,
      city,
      phone,
      message,
    } = formData;

    // Validate mandatory fields
    if (
      !fullName ||
      !fatherName ||
      !passportNumber ||
      !country ||
      !state ||
      !city ||
      !phone ||
      !message
    ) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/send-mail`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // if your server uses credentials
        }
      );

      alert(res.data || "Message sent successfully!");
      setFormData({
        fullName: "",
        fatherName: "",
        passportNumber: "",
        country: "",
        state: "",
        city: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white w-full px-6 py-10 flex flex-col items-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-5xl font-serif text-gray-900 mb-2"
      >
        Contact Us
      </motion.h1>

      <div className="flex flex-col lg:flex-row w-full mt-4 gap-12">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl text-gray-800 mb-3">Get in touch</h2>
          <h3 className="text-lg text-blue-700 font-semibold mb-2">
            Corporate office
          </h3>

          {/* Address */}
          <div className="flex items-start gap-2 text-gray-700 mb-2">
            <FaMapMarkerAlt className="text-lg" />
            <span>Gaur City Mall ,Office 9111, Noida West.</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <a
              href="mailto:support@ksjobglobal.com"
              className="flex items-center gap-2 text-blue-700 hover:underline"
            >
              <FaEnvelope className="text-lg" />
              <span>support@ksjobglobal.com</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <a
              href="https://wa.me/+918505811996?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20KS%20Job%20Global."
              className="flex items-center gap-2 text-blue-700 hover:underline"
            >
              <FaWhatsappSquare className="text-xl" />
              <span>+91 85058 11996</span>
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-gray-700 mb-6">
            <a
              href="tel:+918505811997"
              className="flex items-center gap-2 text-blue-700 hover:underline"
            >
              <FaPhone className="text-lg rotate-[90deg]" />
              <span>+91 85058 11997</span>
            </a>
          </div>

          {/* Social Media */}
          <div>
            <div className="text-gray-800 font-medium mb-3">
              Socialize with us
            </div>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#cfa44d] w-9 h-9 flex items-center justify-center rounded-full text-white hover:opacity-90"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="mt-6">
            <div className="text-gray-800 font-medium mb-3">Our Location</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.814188997582!2d77.42525007592465!3d28.605350585313772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffedab57a97%3A0xc2547c83859b2c05!2sgaur%20city%20mall!5e0!3m2!1sen!2sin!4v1759469172578!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-md"
              title="Our Location on Google Maps"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Panel: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 bg-[#fdf0db] px-8 py-8 min-w-[340px] rounded-md flex flex-col gap-6"
        >
          <div className="text-gray-700 text-sm">
            Fields marked with * are mandatory
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
            />
            <input
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's Name*"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
            />
            <input
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              placeholder="Passport Number*"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
            >
              <option value="">Select Country*</option>
              <option value="India">India</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
            >
              <option value="">Select State*</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Delhi">Delhi</option>
            </select>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City*"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No.*"
              type="tel"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Id (Optional)"
              type="email"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#cfa44d] text-white px-6 py-3 mt-4 font-semibold text-lg rounded hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
