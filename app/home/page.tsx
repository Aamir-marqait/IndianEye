import HeroBanner from "@/components/home/hero-section";
import ServicesSection from "@/components/home/product-and-service";
import TransferOfTechnologies from "@/components/home/transfer-technologies";
import WhyChooseUs from "@/components/home/why-choose-us";
import Image from "next/image";

function page() {
  return (
    <div className="relative">
      <HeroBanner />
      <ServicesSection />

      <div className="absolute top-250 blur-3xl right-0 w-32 h-32 md:w-120 md:h-120  pointer-events-none">
        <Image
          src="/home/right.png"
          alt="Decorative element"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <TransferOfTechnologies />
      <WhyChooseUs />
    </div>
  );
}

export default page;
