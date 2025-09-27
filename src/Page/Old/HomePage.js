import React from "react";
import Navbar from "../../Components/Old/NavBar";
import HeroSection from "../../Components/Old/HomePage/HeroSection";
import IndustriesServed from "../../Components/Old/HomePage/IndustriesServed";
import LeadershipTeam from "../../Components/Old/HomePage/LeadershipTeam";
import MovingBanner from "../../Components/Old/HomePage/MovingBanner";
import StaffingSection from "../../Components/Old/HomePage/StaffingSection";
import WhyChooseUs from "../../Components/Old/HomePage/WhyChooseUs";
import Footer from "../../Components/New/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IndustriesServed />
      <LeadershipTeam />
      <MovingBanner />
      <StaffingSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default HomePage;
