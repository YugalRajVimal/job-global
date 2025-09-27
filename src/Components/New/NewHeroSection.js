import React, { useEffect, useState } from "react";

export default function JobGlobalHero() {
  const images = ["/banner1.jpg", "/banner2.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // change every 2 sec
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center justify-start text-left text-white transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 left-0" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-7xl mb-4 font-serif">
            Find Your Next <br /> Career Here
          </h1>
          <p className="text-lg">
            Explore thousands of jobs and connect with top employers in
            hospitality, driving, healthcare, and more.
          </p>
          <div className="w-[300px] h-1 bg-[#d1af75] my-6"></div>
          <div className="flex justify-start space-x-4">
            <a
              href="#about"
              className="px-3 py-1 md:px-6 md:py-3 bg-[#d1af75] text-black font-semibold rounded-full shadow hover:bg-yellow-600"
            >
              About Us →
            </a>
            <a
              href="#history"
              className="px-3 py-1 md:px-6 md:py-3 border border-white rounded-full hover:bg-white hover:text-black"
            >
              Our History
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
