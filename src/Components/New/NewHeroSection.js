import { useState } from "react";
import { Sun, Headphones, Search } from "lucide-react";

export default function JobGlobalHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      {/* <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">

        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Job Global Logo"
            className="h-10 w-10"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold">Job Global</span>
            <span className="text-xs text-gray-500">
              Connecting Talent Since 2018
            </span>
          </div>
        </div>


        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Solutions</a>
          <a href="#" className="hover:text-blue-600">Industries</a>
          <a href="#" className="hover:text-blue-600">Careers</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>


        <div className="flex items-center space-x-4">
          <Headphones className="h-5 w-5 cursor-pointer text-gray-700" />
          <Sun className="h-5 w-5 cursor-pointer text-gray-700" />
          <Search className="h-5 w-5 cursor-pointer text-gray-700" />
        </div>
      </nav> */}

      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center justify-start text-left text-white"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 left-0" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-7xl mb-4 font-serif">Find Your Next <br/> Career Here</h1>
          <p className="text-lg">
            Explore thousands of jobs and connect with top employers in hospitality,
            driving, healthcare, and more.
          </p>
          <div className="w-[300px] h-1 bg-[#d1af75] my-6">

          </div>
          <div className="flex justify-start space-x-4">
            <a
              href="#about"
              className="px-6 py-3 bg-[#d1af75] text-black font-semibold rounded-full shadow hover:bg-yellow-600"
            >
              About Us →
            </a>
            <a
              href="#history"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black"
            >
              Our History
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
