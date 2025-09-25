import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 transition-all duration-2000 ease-in-out mx-auto overflow-hidden h-[8vh]
        ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-lg rounded-none"
            : "absolute top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white backdrop-blur-lg rounded-full shadow-xl"
        }`}
    >
      <nav className="flex items-center justify-between px-6  transition-all duration-500 ease-in-out">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-16 w-auto" />
          <span className="font-bold text-xl">Job Global</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-black">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">About</li>
          <li className="hover:text-green-600 cursor-pointer">Solutions</li>
          <li className="hover:text-green-600 cursor-pointer">Pages</li>
          <li className="hover:text-green-600 cursor-pointer">Blog</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
