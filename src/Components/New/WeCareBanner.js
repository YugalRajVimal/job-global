import React from "react";

const JobGlobalWeCare = () => {
  return (
    <div className="bg-[#fef6e7] flex flex-col items-center justify-center text-center py-16 px-4">
      {/* JOB GLOBAL Styled Text */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6">
        <span className="inline-block bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mr-2">
          KS.
        </span>{" "}
        <span className="inline-block bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mr-2">
          JOB
        </span>{" "}
        <span className="inline-block bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center">
          GLOBAL
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl md:text-2xl text-black max-w-3xl leading-relaxed">
        Job Global is the leading hospitality staffing platform, connecting
        skilled professionals with businesses worldwide to build growth in
        careers.
      </p>
    </div>
  );
};

export default JobGlobalWeCare;
