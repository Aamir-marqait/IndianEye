import AchievementsCarousel from "@/components/training-skill-develop/achievment";
import HeroSection from "@/components/training-skill-develop/hero-section";
import OurAcademy from "@/components/training-skill-develop/our-academy";
import ServicesGrid from "@/components/training-skill-develop/service-grid";
import WhyISPL from "@/components/training-skill-develop/why-ispl";

function page() {
  return (
    <div>
      <HeroSection />
      <WhyISPL />
      <ServicesGrid />
      <OurAcademy />
      <AchievementsCarousel />
    </div>
  );
}

export default page;
