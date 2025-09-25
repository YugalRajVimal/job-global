// src/components/IndustriesServed.js

import React from "react";
import {
  FaHotel,
  FaLifeRing,
  FaIndustry,
  FaStore,
  FaCalendarAlt,
  FaHardHat,
  FaTruck,
  FaUserCog,
} from "react-icons/fa";

const industries = [
  { icon: <FaHotel size={40} />, name: "Hotel", staffs: 2853 },
  { icon: <FaLifeRing size={40} />, name: "Hospitality", staffs: 2256 },
  { icon: <FaIndustry size={40} />, name: "Kitchen", staffs: 1408 },
  { icon: <FaStore size={40} />, name: "Retail", staffs: 1740 },
  { icon: <FaCalendarAlt size={40} />, name: "Special Events", staffs: 3948 },
  { icon: <FaHardHat size={40} />, name: "General Labor", staffs: 2984 },
  { icon: <FaTruck size={40} />, name: "Driving", staffs: 4509 },
  { icon: <FaUserCog size={40} />, name: "Senior Living", staffs: 1039 },
];

const IndustriesServed = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="mb-4">
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
          Industries
        </span>
      </div>
      <h2 className="text-4xl font-bold mb-12">Industries Served</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 text-black">{industry.icon}</div>
            <h3 className="text-xl font-semibold">{industry.name}</h3>
            <p className="text-gray-600">{industry.staffs} Staffs</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesServed;
