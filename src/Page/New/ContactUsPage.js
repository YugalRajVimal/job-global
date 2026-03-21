import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import ContactUsComp from "../../Components/New/ContactUsComp";

export default function ContactUs() {
  // Form states
  const [formData, setFormData] = useState({
    enquiryType: "",
    country: "",
    state: "",
    city: "",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      enquiryType,
      country,
      state,
      city,
      firstName,
      lastName,
      email,
      contact,
      message,
    } = formData;

    if (
      !enquiryType ||
      !country ||
      !state ||
      !city ||
      !firstName ||
      !lastName ||
      !email ||
      !contact ||
      !message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Build WhatsApp message
    const text = `New Contact Enquiry:
• Enquiry Type: ${enquiryType}
• Country: ${country}
• State: ${state}
• City: ${city}
• Name: ${firstName} ${lastName}
• Email: ${email}
• Contact: ${contact}
• Message: ${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918505811996?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <section className="bg-white w-full pt-[100px] min-h-screen px-6 py-10 flex flex-col items-center">
      {/* Breadcrumb */}
      {/* <div className="w-full  text-sm text-gray-600 mb-6">
        <span>Home &gt; Contact Us</span>
      </div> */}

      {/* Heading */}
      <ContactUsComp />
    </section>
  );
}
