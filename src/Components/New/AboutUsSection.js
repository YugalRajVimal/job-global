import React from "react";

export default function AboutUsSection() {
  return (
    <section className="bg-[#d1af75] py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-8">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-white mb-4">
            Life at Job Global
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Why work at Job Global?
          </h3>
          <p className="text-white text-lg mb-8 leading-relaxed">
            Job Global is one of the biggest private sector employers globally.
            With a robust, consistent framework for people management, Job
            Global maintains an inclusive, progressive, high-performance
            environment, enabling purpose-driven talent with unparalleled access
            to opportunities for growth.
          </p>
          <div className="flex gap-4"></div>
        </div>
        {/* Right Side: Images and Badge */}
        <div className="md:w-1/2 flex flex-wrap gap-4 justify-center items-center">
          <div className="flex flex-col gap-4">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=280&q=80"
              alt="Job Global Employee"
              className="w-44 h-56 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=140&q=80"
              alt="Job Global Team"
              className="w-44 h-28 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow-lg flex items-center justify-center w-44 h-28">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Great_Place_to_Work_logo.png"
                alt="Great Place To Work"
                className="h-16"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=140&q=80"
              alt="Job Global Staff"
              className="w-44 h-28 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
