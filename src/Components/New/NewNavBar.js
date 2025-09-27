import { useEffect, useState } from "react";
import { Headphones, Sun, Search } from "lucide-react";

export default function JobGlobalNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[10vh] min-h-[90px] ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between px-10 py-2 ">
        {/* Logo */}
        <div className="flex items-center space-x-2 h-full">
          <img src="/logo.jpg" alt="Job Global Logo" className="h-full aspect-[1/1]" />
          <div className="flex flex-col leading-tight">
            <span
              className={`text-xl font-bold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Job Global
            </span>
            <span
              className={`text-sm ${
                scrolled ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Growth in Careers
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {[
            "Home",
            "About Us",
            "Services",
            "Contact Us"
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`transition-colors ${
                scrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Section */}
        {/* <div className="flex items-center space-x-5">
          <a
            href="#"
            className={`text-sm ${
              scrolled
                ? "text-gray-800 hover:text-blue-600"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Contact Us
          </a>
          <Headphones
            className={`h-5 w-5 cursor-pointer ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          />
          <Sun
            className={`h-5 w-5 cursor-pointer ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          />
          <Search
            className={`h-5 w-5 cursor-pointer ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          />
        </div> */}
      </div>
    </nav>
  );
}
