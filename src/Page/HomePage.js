import React from "react";
import HeroSection from "../Components/HomePage/HeroSection";
import StaffingSection from "../Components/HomePage/StaffingSection";
import MovingBanner from "../Components/HomePage/MovingBanner";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs";
import IndustriesServed from "../Components/HomePage/IndustriesServed";
import LeadershipTeam from "../Components/HomePage/LeadershipTeam";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <StaffingSection />
      <MovingBanner />
      <WhyChooseUs />
      <IndustriesServed />
      <LeadershipTeam />
    </div>
  );
};

export default HomePage;
