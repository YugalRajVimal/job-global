import { Building2, Users, Globe2 } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="pt-28 pb-20 text-center bg-white shadow-sm px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Find Your Next <span className="text-blue-600">Career Here</span>
        </h1>
        <p className="max-w-2xl mx-auto  text-base sm:text-lg text-gray-600 mb-8">
          Explore thousands of jobs and connect with top employers in
          hospitality, driving, healthcare, and more.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/about-us"
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          >
            About Us →
          </a>
          <a
            href="/contact-us"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded shadow hover:bg-blue-50"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Life at KS. Job Global */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Life at KS. Job Global</h2>
            <p className="text-gray-600 mb-6">
              KS. Job Global is one of the biggest private sector employers
              globally. With a robust, consistent framework for people
              management, we maintain an inclusive, progressive,
              high-performance environment. Our people are enabled with
              purpose-driven talent and unparalleled opportunities for growth.
            </p>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✅ Inclusive and progressive culture</li>
              <li>✅ Great Place to Work</li>
              <li>✅ Access to global career opportunities</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <img
              src="/team1.jpg"
              alt="Job Global Team"
              className="rounded-lg shadow-lg w-1/2 object-cover"
            />
            <img
              src="/team2.jpg"
              alt="Job Global Staff"
              className="rounded-lg shadow-lg w-1/2 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
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
          <h3 className="text-2xl font-semibold mb-4">
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
