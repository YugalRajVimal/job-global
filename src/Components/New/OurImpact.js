import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "impact",
    title: "Our Impact",
    heading: "Our Global Impact",
    text: "At Job Global, we are dedicated to empowering lives and bridging opportunities worldwide. We connect talented individuals with industries across hospitality, retail, healthcare, logistics, and more. Through global staffing solutions, we create pathways for employment, uplift communities, and fuel organizational growth.",
    image:
      "https://images.unsplash.com/photo-1582719478191-6c0f4c21c1dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "innovation",
    title: "Innovation",
    heading: "Driving Innovation in Workforce",
    text: "We constantly innovate recruitment practices to meet the changing needs of industries worldwide. By integrating technology, personalized screening, and cultural adaptability, Job Global ensures that businesses thrive with the right workforce while professionals build rewarding careers.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    heading: "Sustainable Growth for All",
    text: "Sustainability for Job Global means creating long-term value for people and organizations. We provide fair opportunities, support diversity, and promote responsible recruitment practices that not only meet business needs but also strengthen global communities.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
];

const OurImpactSection = () => {
  const [active, setActive] = useState("impact");

  const currentTab = tabs.find((t) => t.id === active);

  return (
    <div className="bg-[#003366] text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Top Navigation */}
      <div className="flex justify-center gap-12 mb-12 text-lg font-medium ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative pb-1 transition flex-1 text-xl text-left ${
              active === tab.id ? "text-yellow-400" : "text-gray-200"
            }`}
          >
            <div
              className={`w-full h-[2px] mb-2 ${
                active === tab.id ? "bg-yellow-400" : "bg-gray-200"
              }`}
            ></div>
            {tab.title}
            {/* {active === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-400"
              />
            )} */}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 font-serif">
                {currentTab.heading}
              </h2>
              <p className="text-lg leading-relaxed mb-6">{currentTab.text}</p>
              <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                read more →
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Section */}
        <div className="rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentTab.image}
              src={currentTab.image}
              alt={currentTab.heading}
              className="w-full h-[350px] md:h-[450px] object-cover rounded-lg"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OurImpactSection;
