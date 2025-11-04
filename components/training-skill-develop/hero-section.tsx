import React from "react";
import Image from "next/image";

type Props = {
  onCTAClick?: () => void;
};

export default function HeroSection({ onCTAClick }: Props) {
  return (
    <section className="w-full relative overflow-hidden bg-black">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0 blur-3xl w-full h-full">
        <Image
          src="/tsd/bg.png"
          alt="Background"
          fill
          className="object-cover object-center "
          priority
        />
      </div>

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 z-5 bg-black/10" />

      <div className="relative mx-auto px-6 w-full max-w-[1100px] z-10">
        <div className="pt-16 md:pt-20 pb-20 md:pb-28 text-center">
          <h2 className="font-['Albert_Sans'] font-semibold text-[64px] leading-[100%] tracking-[0%] text-center text-white max-w-5xl mx-auto">
            Empowering the Guardians of Tomorrow
          </h2>

          <p className="mt-4 font-['Albert_Sans'] font-normal text-2xl leading-[100%] tracking-[0%] text-center text-[#F5F5F6] max-w-2xl mx-auto">
            Training Excellence and Security Solutions for a Safer India.
          </p>

          <div className="mt-6">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center gap-3 bg-[#EA580C] hover:bg-[#dc2626] font-['Albert_Sans'] font-normal text-[19px] leading-[100%] tracking-[0%] align-middle text-white px-5 py-3 rounded-full shadow-md transition"
            >
              Get Involved
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Image card */}
          <div className="mt-10 md:mt-12 flex justify-center">
            <div className="w-full sm:w-[92%] md:w-[88%] lg:w-[1120px] rounded-[28px] overflow-hidden shadow-2xl">
              <div className="relative w-full h-80 sm:h-[360px] md:h-[400px] lg:h-[520px]">
                <Image
                  src={"/tsd/hero.png"}
                  alt="Guardians marching"
                  layout="fill"
                  objectFit="cover"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
