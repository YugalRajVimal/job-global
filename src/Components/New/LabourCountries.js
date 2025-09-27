import React from "react";

export default function LabourCountries() {
  const countries = [
    { name: "Gulf Dubai", flag: "🇦🇪" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Russia", flag: "🇷🇺" },
    { name: "Europe", flag: "🇪🇺" },
  ];

  return (
    <section className="bg-[#d1af75] py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          We Provide Labour to International Companies
        </h2>
        <p className="text-white/90 text-lg mb-10">
          Our workforce is trusted by top organizations across the globe.  
          Currently, we are proudly providing skilled labour in the following regions:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className="bg-white/20 text-white font-semibold py-6 rounded-lg shadow-md hover:bg-white/30 transition"
            >
              <span className="block text-4xl mb-2">{country.flag}</span>
              <span className="text-lg">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
