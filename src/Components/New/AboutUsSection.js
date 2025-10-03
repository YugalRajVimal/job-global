import React from "react";

export default function AboutUsSection() {
  return (
    <section className="bg-[#d1af75] py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-8">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h2 className="font-serif text-5xl font-bold text-white mb-4">
            Life at KS. Job Global
          </h2>
          <h3 className="font-serif text-2xl font-semibold text-white mb-6">
            Why work at KS. Job Global?
          </h3>
          <p className="text-white text-lg mb-8 leading-relaxed">
            KS. Job Global is one of the biggest private sector employers
            globally. With a robust, consistent framework for people management,
            Job Global maintains an inclusive, progressive, high-performance
            environment, enabling purpose-driven talent with unparalleled access
            to opportunities for growth.
          </p>
          <div className="flex gap-4"></div>
        </div>
        {/* Right Side: Images and Badge */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Left Column of Images */}
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <img
                src="/img1.jpg"
                alt="Job Global Employee"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/img2.jpg"
                alt="Job Global Team"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Right Column of Images, slightly offset */}
            <div className="flex flex-col gap-4 w-full sm:w-1/2 sm:mt-8">
              <img
                src="/img4.jpeg"
                alt="Great Place To Work"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/img3.jpg"
                alt="Job Global Staff"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
