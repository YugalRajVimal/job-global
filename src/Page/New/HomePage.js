import React from "react";
import JobGlobalHero from "../../Components/New/NewHeroSection";
import JobGlobalWeCare from "../../Components/New/WeCareBanner";
import BusinessSection from "../../Components/New/BusinessSection";
import OurImpactSection from "../../Components/New/OurImpact";
import AboutUsSection from "../../Components/New/AboutUsSection";
import AffilatedBy from "../../Components/New/AffiliatedBy";
import LabourCountries from "../../Components/New/LabourCountries";
import ContactUs from "../../Components/New/ContactUsComp";

const HomePage = () => {
  return (
    <div className="w-screen">
      <JobGlobalHero />
      <AffilatedBy />
      <JobGlobalWeCare />
      <AboutUsSection />
      <BusinessSection />
      <LabourCountries />
      <OurImpactSection />
      <ContactUs />
    </div>
  );
};

export default HomePage;
