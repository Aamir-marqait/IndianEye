import HeroSection from "./hero-section";
import ProductsSection from "./product-section";
import ServicesUAV from "./ServicesUAV";
import Survey from "./survey";
import WhatWeDo from "./what-we-do";

function page() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <ServicesUAV />
      <Survey />
      <WhatWeDo />
    </div>
  );
}

export default page;
