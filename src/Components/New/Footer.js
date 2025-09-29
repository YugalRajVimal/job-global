// src/components/Footer.js

import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo + Description + App Badges */}
          <div className="md:col-span-1 ">
            <div className="flex flex-col items-center mb-4">
              <div className=" p-2 rounded-full">
                <img src="/logo.jpg" alt="Logo" className="h-16 aspect-[1/1]" />
              </div>
              <span className="text-xl font-semibold ml-2">KS. Job Global</span>
            </div>
            <p className="text-gray-600 mb-4">
              Since 2018, Job Global has connecting hospitality workers to
              thousands of business, private events and universities.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">For Workers</h4>
            <ul className="text-gray-600 space-y-1">
              <li>Find Work</li>
              <li>Jobs in Dubai</li>
              <li>Jobs in Russia</li>
              <li>Jobs in Europe</li>
              <li>Jobs in Neitherlands</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">For Business</h4>
            <ul className="text-gray-600 space-y-1">
              <li>Merchandising</li>
              <li>Hospitality Staff</li>
              <li>General Labour</li>
              <li>Car Drivers</li>
              <li>Bus Driver</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
            <ul className="text-gray-600 space-y-1">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Help & Support</h4>
            <ul className="text-gray-600 space-y-1">
              <li>Contact Us</li>
              <li>General FAQ</li>
              <li>Support Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            Copyright © 2025{" "}
            <span className="text-green-500 font-semibold">Job Global</span> All
            rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-black font-medium">Follow Us On:</span>
            <div className="flex space-x-2">
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              >
                <FaDribbble />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
