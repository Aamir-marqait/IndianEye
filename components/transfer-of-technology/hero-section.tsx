export default function TransferOfTechnology() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: `url('/transfer-of-tech/bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for darker contrast */}
      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> */}

      {/* Content wrapper - centers content and constrains width */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 lg:py-36">
        <div className="text-center text-white">
          <h1 className="font-albert-sans font-semibold  md:text-[65px] text-5xl leading-[100%] tracking-[0%] text-white align-middle">
            Transfer of Technology
          </h1>

          <p className="mt-8 mx-auto font-albert-sans font-normal md:text-[20px] text-xl w-full md:max-w-4xl leading-[150%] tracking-[0%] text-center text-white/90 align-middle">
            Technology transfer bridges the gap between research and real-world
            application. It involves identifying promising innovations, securing
            intellectual property rights, and developing strategies for
            commercialization through licensing or startup creation — turning
            scientific discoveries into impactful, market-ready solutions.
          </p>
        </div>
      </div>

      {/* Optional: subtle gradient bottom fade to black for smooth footer transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
