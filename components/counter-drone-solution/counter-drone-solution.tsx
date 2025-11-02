export default function CounterDroneSolution() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: `url('/cds/bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 lg:py-36">
        <div className="text-center text-white">
          <h1 className="font-albert-sans font-semibold  md:text-[65px] text-5xl leading-[100%] tracking-[0%] text-white align-middle">
            Counter-Drone Solutions
          </h1>

          <p className="mt-8 mx-auto font-albert-sans font-normal md:text-[20px] text-xl w-full md:max-w-4xl leading-[150%] tracking-[0%] text-center text-white/90 align-middle">
            Advanced Counter-Drone solutions designed to detect, track, and
            neutralize unauthorized drones — ensuring secure airspace for
            military, commercial, and private zones.
          </p>
        </div>
      </div>

      {/* Optional: subtle gradient bottom fade to black for smooth footer transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
