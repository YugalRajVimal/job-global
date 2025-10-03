import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger & close

export default function JobGlobalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { linkText: "Home", link: "/" },
    { linkText: "About Us", link: "/about-us" },
    { linkText: "Services", link: "/services" },
    { linkText: "Contact Us", link: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[10vh] min-h-[90px] ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between px-2 md:px-10 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2 h-full">
          <img
            src="/logo.svg"
            alt="Job Global Logo"
            className="h-full aspect-[1/1]"
          />
          <div className="flex flex-col leading-tight">
            <span
              className={`text-xl font-bold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              KS. Job Global
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

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((item) => (
            <a
              key={item.linkText}
              href={item.link}
              className={`transition-colors ${
                scrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.linkText}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X
                className={`h-7 w-7 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-7 w-7 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden flex flex-col space-y-4 px-6 pb-6 bg-white shadow-lg transition-all duration-300`}
        >
          {navLinks.map((item) => (
            <a
              key={item.linkText}
              href={item.link}
              className="text-gray-800 hover:text-blue-600 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.linkText}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
