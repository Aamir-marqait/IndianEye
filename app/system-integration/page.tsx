import HeroSection from "./hero-section";
import IndustriesWeServe from "./IndustriesWeServe";
import IntegratedCCTV from "./IntegratedCCTV";
import SIService from "./si-service";
import SmartTower from "./smart-tower";

function page() {
  return (
    <div>
      <HeroSection />
      <SIService />
      <IntegratedCCTV />
      <SmartTower />
      <IndustriesWeServe />
    </div>
  );
}

export default page;
