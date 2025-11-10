export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh]"
      style={{
        backgroundImage: `url('/drone/hero.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for darker contrast */}
      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> */}

      {/* Content wrapper - centers content and constrains width */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 xl:py-56">
        <div className="text-center text-white">
          <h1 className="font-albert-sans font-semibold text-[36px] md:text-[48px] lg:text-[65px] leading-[1.2] md:leading-[100%] tracking-[0%] text-white align-middle">
            Drones
          </h1>

          <p className="mt-5 md:mt-6 lg:mt-8 mx-auto font-albert-sans font-normal text-[15px] md:text-[18px] lg:text-[20px] w-full max-w-4xl leading-[150%] tracking-[0%] text-center text-white/90 align-middle px-4">
            ISPL provides complete Drone Solution. We have vast experience
            generated from years of expertise in military,commercial, and
            private applications. We combine these experiences to develop
            efficient drone solutions. Solar farm Incpections, Wind turbine
            inspections, Survelliance drones, Emergrncy response Drone, Medical
            Drones, Anti Drones - We have them all.
          </p>
        </div>
      </div>

      {/* Optional: subtle gradient bottom fade to black for smooth footer transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 lg:h-24 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
