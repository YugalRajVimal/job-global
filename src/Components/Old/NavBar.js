import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // install react-icons if needed

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`z-50 transition-all duration-500 ease-in-out mx-auto overflow-hidden h-[8vh] flex items-center justify-between w-full
        ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-lg rounded-none"
            : "absolute top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white backdrop-blur-lg rounded-full shadow-xl"
        }`}
      >
        <nav className="flex items-center justify-between px-6 w-full transition-all duration-500 ease-in-out">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="h-16 w-auto" />
            <span className="font-bold text-xl">Job Global</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-medium text-black">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Solutions</li>
            <li className="hover:text-green-600 cursor-pointer">Pages</li>
            <li className="hover:text-green-600 cursor-pointer">Blog</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-3xl text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[12vh] left-0 w-full bg-white shadow-lg md:hidden z-40">
          <ul className="flex flex-col items-center gap-4 py-6 font-medium text-black">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Solutions</li>
            <li className="hover:text-green-600 cursor-pointer">Pages</li>
            <li className="hover:text-green-600 cursor-pointer">Blog</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}
