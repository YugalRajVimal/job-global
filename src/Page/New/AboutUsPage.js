import { Building2, Users, Globe2 } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative pt-28 pb-20 text-center px-4"
        style={{
          backgroundImage: `url(/banner2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Learn More <span className="text-[#d1af75]">About Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white mb-8">
            Discover our mission, values, and the passionate team behind our
            platform. We connect people with opportunities in hospitality,
            driving, healthcare, and more.
          </p>
          <div className="flex justify-center gap-4">
            {/* <a
              href="/careers"
              className="px-6 py-3 bg-[#d1af75] text-black rounded shadow hover:bg-yellow-600"
            >
              View Careers →
            </a> */}
            <a
              href="/contact-us"
              className="px-6 py-3 bg-[#d1af75] text-black rounded shadow hover:bg-yellow-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Life at KS. Job Global */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
              Life at <span className="text-[#d1af75]">KS. Job Global</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              KS. Job Global is one of the biggest private sector employers
              globally. With a robust, consistent framework for people
              management, we maintain an inclusive, progressive,
              high-performance environment. Our people are enabled with
              purpose-driven talent and unparalleled opportunities for growth.
            </p>
            <ul className="space-y-4 text-gray-800 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-[#d1af75] text-xl">✔</span> Inclusive and
                progressive culture
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#d1af75] text-xl">✔</span> Great Place to
                Work
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#d1af75] text-xl">✔</span> Access to
                global career opportunities
              </li>
            </ul>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/team1.jpeg"
              alt="Job Global Team"
              className="rounded-xl shadow-lg w-full h-64 sm:h-80 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
            />
            <img
              src="/team2.jpeg"
              alt="Job Global Staff"
              className="rounded-xl shadow-lg w-full h-64 sm:h-80 object-cover sm:mt-12 transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          Our Global Impact
        </h2>

        {/* Industries Served */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Building2,
              title: "Hospitality",
              desc: "Global hotels & resorts staffing.",
            },
            {
              icon: Users,
              title: "Healthcare",
              desc: "Connecting skilled caregivers.",
            },
            {
              icon: Globe2,
              title: "Driving & Logistics",
              desc: "Reliable workforce for transport.",
            },
            {
              icon: Building2,
              title: "Retail",
              desc: "Trusted staff for global retail.",
            },
            {
              icon: Users,
              title: "Events & Catering",
              desc: "Staffing for special occasions.",
            },
            {
              icon: Globe2,
              title: "Senior Living",
              desc: "Support for elder care homes.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Icon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="text-center">
          <h3 className=" font-serif text-2xl font-semibold mb-4">
            We Provide Labour to International Companies
          </h3>
          <p className="text-gray-600 mb-6">
            Our workforce is trusted by top organizations across the globe.
          </p>
          <div className="flex justify-center gap-6 text-lg">
            <span>🇦🇪 Dubai</span>
            <span>🇳🇱 Netherlands</span>
            <span>🇷🇺 Russia</span>
            <span>🇪🇺 Europe</span>
          </div>
        </div>
      </section>
    </div>
  );
}
