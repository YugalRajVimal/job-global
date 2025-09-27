import React from "react";
import JobGlobalHero from "../../Components/New/NewHeroSection";
import JobGlobalWeCare from "../../Components/New/WeCareBanner";
import BusinessSection from "../../Components/New/BusinessSection";
import OurImpactSection from "../../Components/New/OurImpact";
import AboutUsSection from "../../Components/New/AboutUsSection";

const HomePage = () => {
  return (
    <div className="w-screen">
      <JobGlobalHero />
      <JobGlobalWeCare />
      <AboutUsSection />
      <BusinessSection />
      <OurImpactSection />
    </div>
  );
};

export default HomePage;
