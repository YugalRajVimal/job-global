import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Hospitality",
    desc: "Connecting skilled professionals to global hotels and resorts, helping maintain service excellence and create career opportunities.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Kitchen",
    desc: "Expert chefs, cooks, and kitchen staff supporting restaurants, catering, and large-scale food operations worldwide.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Retail",
    desc: "From merchandising to customer service, Job Global provides skilled talent that drives retail success across industries.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Special Events",
    desc: "Supporting private events, corporate functions, and large gatherings with professional staff for smooth execution.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "General Labor",
    desc: "Providing reliable workforce for logistics, warehousing, construction, and other essential industries.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Driving",
    desc: "Qualified drivers for cars, buses, and heavy vehicles ensuring safe and efficient transport services.",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Senior Living",
    desc: "Compassionate caregivers and support staff delivering quality services in senior living facilities worldwide.",
    image:
      "https://images.unsplash.com/photo-1582719478191-6c0f4c21c1dc?auto=format&fit=crop&w=1200&q=80",
  },
];

const BusinessSection = () => {
  const [active, setActive] = useState(data[0]);

  return (
    <div className="relative w-full h-[100vh] py-10 overflow-hidden text-white">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${active.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        {/* Left Text */}
        <div className="flex-2 flex flex-col justify-center px-10 md:px-20">
          <p className="uppercase tracking-wide text-yellow-400 font-semibold mb-3">
            Industries Served
          </p>
          <AnimatePresence mode="wait">
            <motion.h1
              key={active.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl mb-6 font-serif"
            >
              {active.title}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={active.desc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl"
            >
              {active.desc}
            </motion.p>
          </AnimatePresence>
          <button className="border border-white px-6 py-3 rounded-full w-fit hover:bg-white hover:text-black transition">
            read more →
          </button>
        </div>

        {/* Right List */}
        <div className="flex-1 flex flex-col justify-center px-10 md:px-20">
          <ul className="space-y-6 text-xl md:text-2xl font-medium font-serif">
            {data.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition ${
                  active.id === item.id
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`}
                onMouseEnter={() => setActive(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
