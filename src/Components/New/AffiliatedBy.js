import React from "react";

export default function AffilatedBy() {
  return (
    <section className="bg-[#d1af75] py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 gap-8">
        
        {/* Image / Logo */}
        <img
          src="/SatyaMevJayte.png" // replace with your actual image path
          alt="Ministry of External Affairs"
          className="w-40 h-40 object-contain"
        />

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-white">
            Affiliated by
          </h2>
          <p className="font-serif text-3xl md:text-5xl font-bold text-white mt-2">
            Ministry of External Affairs
          </p>
        </div>
      </div>
    </section>
  );
}
