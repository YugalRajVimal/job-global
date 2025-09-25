// src/components/LeadershipTeam.js

import React from "react";

const leaders = [
  {
    name: "Viraj Sharma",
    role: "Managing Director",
    image: "",
  },
  {
    name: "Mohd. Rustam",
    role: "General Manager",
    image: "",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="mb-4">
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
          Leadership
        </span>
      </div>
      <h2 className="text-4xl font-bold mb-12">Meet Our Leadership</h2>

      <div className="flex flex-col md:flex-row justify-evenly max-w-5xl mx-auto items-center gap-12 px-4">
        {leaders.map((leader, index) => (
          <div key={index} className="flex flex-col items-center">
            {leader.image ? (
              <img
                src={leader.image}
                alt={leader.name}
                className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-zinc-200 shadow-md mb-4"></div>
            )}
            <h3 className="text-xl font-semibold">{leader.name}</h3>
            <p className="text-gray-600">{leader.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
