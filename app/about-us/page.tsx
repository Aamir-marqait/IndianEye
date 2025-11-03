import CoreService from "@/components/about-us/core-service";
import AboutHeroSection from "@/components/about-us/hero-section";
import Purpose from "@/components/about-us/purpose";
import React from "react";

function page() {
  return (
    <div>
      <AboutHeroSection />
      <CoreService />
      <Purpose />
    </div>
  );
}

export default page;
