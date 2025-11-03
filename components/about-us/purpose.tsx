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

      <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Title */}
        <div className="text-center mb-10">
          <h2
            className="text-white text-center"
            style={{
              fontFamily: "Albert Sans, sans-serif",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Our Purpose
          </h2>
          <p
            className="max-w-2xl mx-auto mt-3 text-white/70 text-center"
            style={{
              fontFamily: "Albert Sans, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Mission - orange */}
          <div
            className="relative rounded-[20px] p-8 md:py-10 md:px-4 text-white shadow-xl overflow-hidden"
            style={{ background: "#EA580CB3" }}
          >
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-[10px] bg-white/95 flex items-center justify-center shrink-0">
                <Image
                  src="/about/mission.png"
                  alt="mission icon"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mission</h3>
              </div>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-white/95">
              We strive to safeguard people, property, and peace of mind with
              integrity and vigilance.
            </p>
          </div>

          {/* Vision - light */}
          <div
            className="relative rounded-[20px] p-8 md:py-10 md:px-4 text-gray-900 shadow-xl overflow-hidden"
            style={{ background: "#FFFFFFB3" }}
          >
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-[10px] bg-[#f3f4f6] flex items-center justify-center shrink-0">
                <Image
                  src="/about/vision.png"
                  alt="vision icon"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Our vision is to redefine security standards globally through
              innovation and trust, protecting every life and asset with
              dedication.
            </p>
          </div>

          {/* Values - green */}
          <div
            className="relative rounded-[20px] p-8 md:py-10 md:px-4 text-white shadow-xl  overflow-hidden"
            style={{ background: "#23874AB3" }}
          >
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-[10px] bg-white/95 flex items-center justify-center shrink-0">
                <Image
                  src="/about/values.png"
                  alt="values icon"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Values</h3>
              </div>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-white/95">
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
