import { Building2, Utensils, Users, Car, Briefcase } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-gray-50 text-gray-80 w-full">
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
            Our <span className="text-[#d1af75]">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white mb-8">
            We provide tailored staffing and recruitment solutions across
            hospitality, driving, healthcare, and more — connecting talent with
            the right opportunities.
          </p>
          <div className="flex justify-center gap-4">
            {/* <a
              href="/industries"
              className="px-6 py-3 bg-[#d1af75] text-black rounded shadow hover:bg-yellow-600"
            >
              Explore Industries →
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

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          Industries Served
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: "Hospitality",
              desc: "Connecting professionals with hotels & resorts globally.",
            },
            {
              icon: Utensils,
              title: "Kitchen & Catering",
              desc: "Skilled kitchen and catering staff for events & businesses.",
            },
            {
              icon: Users,
              title: "Retail",
              desc: "Reliable workforce for international retail operations.",
            },
            {
              icon: Briefcase,
              title: "General Labor",
              desc: "Providing skilled labor across industries and regions.",
            },
            {
              icon: Car,
              title: "Driving & Logistics",
              desc: "Trusted staff for transport, logistics, and delivery.",
            },
            {
              icon: Users,
              title: "Senior Living",
              desc: "Caring professionals for elder care and senior homes.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <Icon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2 font-serif">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          Our Global Presence
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { flag: "🇦🇪", country: "Dubai (Gulf)" },
            { flag: "🇳🇱", country: "Netherlands" },
            { flag: "🇷🇺", country: "Russia" },
            { flag: "🇪🇺", country: "Europe" },
          ].map(({ flag, country }) => (
            <div
              key={country}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <div className="text-4xl mb-3">{flag}</div>
              <h3 className="text-lg font-semibold">{country}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Impact & Commitment */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          Our Global Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "Modern staffing solutions that transform industries.",
            },
            {
              title: "Sustainability",
              desc: "Responsible employment driving community upliftment.",
            },
            {
              title: "Growth",
              desc: "Building career pathways and fueling global businesses.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white text-center"
            >
              <h3 className="text-xl font-semibold mb-3 font-serif">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
