import Banner from "@/components/about-us/banner";
import CoreService from "@/components/about-us/core-service";
import AboutHeroSection from "@/components/about-us/hero-section";
import Purpose from "@/components/about-us/purpose";
import Testimonial from "@/components/about-us/testimonial";
import React from "react";

function page() {
  return (
    <div>
      <AboutHeroSection />
      <CoreService />
      <Purpose />
      <Testimonial />
      <Banner />
    </div>
  );
}

export default page;
