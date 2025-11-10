import Image from "next/image";

export default function Purpose() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about/purpose.png"
          alt="purpose background"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
        {/* dark overlay to match screenshot */}
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2
            className="text-white text-center text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] md:leading-[1.1] lg:leading-[100%]"
            style={{
              fontFamily: "Albert Sans, sans-serif",
              fontWeight: 700,
              letterSpacing: "0%",
            }}
          >
            Our Purpose
          </h2>
          <p
            className="max-w-2xl mx-auto mt-2 md:mt-3 text-white/70 text-center text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] md:leading-[1.75] lg:leading-[28px] px-4"
            style={{
              fontFamily: "Albert Sans, sans-serif",
              fontWeight: 400,
              letterSpacing: "0%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {/* Mission - orange */}
          <div
            className="relative rounded-[16px] md:rounded-[20px] p-6 md:p-8 lg:py-10 lg:px-4 text-white shadow-xl overflow-hidden"
            style={{ background: "#EA580CB3" }}
          >
            <div className="flex flex-col items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-[8px] md:rounded-[10px] bg-white/95 flex items-center justify-center shrink-0">
                <Image
                  src="/about/mission.png"
                  alt="mission icon"
                  width={24}
                  height={24}
                  className="md:w-[28px] md:h-[28px]"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">Mission</h3>
              </div>
            </div>

            <p className="mt-2 text-[13px] md:text-sm leading-[1.6] md:leading-relaxed text-white/95">
              We strive to safeguard people, property, and peace of mind with
              integrity and vigilance.
            </p>
          </div>

          {/* Vision - light */}
          <div
            className="relative rounded-[16px] md:rounded-[20px] p-6 md:p-8 lg:py-10 lg:px-4 text-gray-900 shadow-xl overflow-hidden"
            style={{ background: "#FFFFFFB3" }}
          >
            <div className="flex flex-col items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-[8px] md:rounded-[10px] bg-[#f3f4f6] flex items-center justify-center shrink-0">
                <Image
                  src="/about/vision.png"
                  alt="vision icon"
                  width={24}
                  height={24}
                  className="md:w-[28px] md:h-[28px]"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">Vision</h3>
              </div>
            </div>

            <p className="mt-2 text-[13px] md:text-sm leading-[1.6] md:leading-relaxed text-gray-700">
              Our vision is to redefine security standards globally through
              innovation and trust, protecting every life and asset with
              dedication.
            </p>
          </div>

          {/* Values - green */}
          <div
            className="relative rounded-[16px] md:rounded-[20px] p-6 md:p-8 lg:py-10 lg:px-4 text-white shadow-xl overflow-hidden"
            style={{ background: "#23874AB3" }}
          >
            <div className="flex flex-col items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-[8px] md:rounded-[10px] bg-white/95 flex items-center justify-center shrink-0">
                <Image
                  src="/about/values.png"
                  alt="values icon"
                  width={24}
                  height={24}
                  className="md:w-[28px] md:h-[28px]"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">Values</h3>
              </div>
            </div>

            <p className="mt-2 text-[13px] md:text-sm leading-[1.6] md:leading-relaxed text-white/95">
              Our values guide every action we take—honesty, reliability,
              dedication. With a client-first approach, we deliver security
              solutions you depend on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
