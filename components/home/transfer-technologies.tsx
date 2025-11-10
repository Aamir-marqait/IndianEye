import Image from "next/image";
import React from "react";

export default function TransferTechnologies() {
  return (
    <section className="w-full relative bg-black py-10 md:py-16">
      <div className="absolute top-0 right-0 w-20 h-20 md:w-120 md:h-120  pointer-events-none">
        <Image
          src="/home/right.png"
          alt="Decorative element"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="mx-auto px-4 md:px-6 w-full max-w-[1100px]">
        {/* Title */}
        <h2 className="font-albert-sans text-center text-[28px] md:text-[48px] font-bold leading-[110%] md:leading-none tracking-[-0.04em] text-white mb-6 md:mb-10">
          Transfer Of Technologies
        </h2>

        {/* Card */}
        <div
          className="rounded-2xl py-6 px-2 md:py-4 md:px-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-transparent overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg, #171717 0%, #323335 25%, rgba(90, 90, 90, 0) 50%, #323335 75%, #171717 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
            {/* Left: image */}
            <div className="w-full">
              <div className="relative  overflow-hidden">
                <div className="w-full h-48 md:h-[360px] lg:h-80 relative">
                  <Image
                    src="/home/tot.png" // replace with your path or external URL
                    alt="Transfer of technologies"
                    layout="fill"
                    objectFit="contain"
                    // className="object-center"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="w-full">
              <div className="bg-transparent rounded-xl p-4 md:p-6">
                <h3 className="font-albert-sans text-[22px] md:text-[28px] font-semibold leading-[120%] md:leading-none tracking-normal text-white mb-3 md:mb-4">
                  Where innovation meets trusted security!
                </h3>

                <p className="font-albert-sans text-[14px] md:text-base font-normal leading-[150%] tracking-normal text-white max-w-prose">
                  Comprehensive solutions blending advanced technology with
                  decades of security expertise, empowering organizations to
                  achieve unmatched efficiency, resilience, and innovation. Our
                  approach integrates intelligent systems, real-time analytics,
                  and adaptive security frameworks that evolve with modern
                  challenges — ensuring seamless operations, smarter
                  decision-making, and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
