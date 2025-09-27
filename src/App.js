import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/New/HomePage";
import OldHomePage from "./Page/Old/HomePage";
import JobGlobalNavbar from "./Components/New/NewNavBar";
import Footer from "./Components/New/Footer";

// A simple component for the home page
const Home = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold h-[200vh] text-blue-600">
        Welcome to the App!
      </h1>
      <p className="mt-2 text-gray-700">
        This is the home page rendered by React Router DOM.
      </p>
    </div>
  );
};

// A simple component for an about page (optional, but good for demonstration)
const About = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold text-green-600">About Us</h1>
      <p className="mt-2 text-gray-700">
        Learn more about our amazing application.
      </p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-gray-100 flex flex-col items-center justify-center">
        <JobGlobalNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/old" element={<OldHomePage />} />

          <Route path="/about" element={<About />} />
          {/* You can add more routes here */}
          {/* Example of a 404 page */}
          <Route
            path="*"
            element={
              <h1 className="text-red-500 text-2xl">404 - Page Not Found</h1>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
