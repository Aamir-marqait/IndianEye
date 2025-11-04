"use client";

import React from "react";
import Image from "next/image";

export default function WhyISPL() {
  return (
    <section className="w-full relative overflow-hidden bg-black">
      {/* Background image layer */}
      <div className="absolute inset-10 z-0 blur-[90px] w-full h-full">
        <Image
          src="/tsd/bg.png"
          alt="Background"
          fill
          className="object-cover object-center blur-[100px]"
          priority
        />
      </div>

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 z-5 bg-black/10" />

      <div className="relative mx-auto px-6 w-full max-w-[1100px] z-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-['Albert_Sans'] font-semibold text-[48px] leading-[70px] tracking-[0%] text-center capitalize text-white">
            Why ISPL?
          </h2>
          <p className="mt-3 font-['Albert_Sans'] font-normal text-base leading-[23px] tracking-[0%] text-center text-white max-w-[880px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod. Maecenas sed est mollis,
            convallis nisi convallis, imperdiet massa.
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <div className="w-[1108px] h-[324px] rounded-[40px] overflow-hidden relative bg-[#000000A8] opacity-100 shadow-lg">
            <div
              aria-hidden
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url("/tsd/why.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.5,
              }}
            />

            <div className="relative z-10 px-6 py-10 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 justify-center px-10 py-5 items-center">
                {/* Stat item */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-[258px] h-[203px] rounded-[40px] bg-[#000000A8] opacity-100">
                    <div className="flex flex-col gap-2">
                      <div className="font-['Albert_Sans'] font-semibold text-[48px] leading-[100%] tracking-[0%] text-center text-[#EA580C]">
                        5000+
                      </div>
                      <div className="mt-1 font-['Albert_Sans'] font-normal text-[20px] leading-6 tracking-[0%] text-center text-[#EA580C]">
                        Candidates Placed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-center text-center">
                  <div className="inline-flex items-center justify-center w-[258px] h-[203px] rounded-[40px] bg-[#000000A8] opacity-100">
                    <div className="flex flex-col gap-2">
                      <div className="font-['Albert_Sans'] font-semibold text-[48px] leading-[100%] tracking-[0%] text-center text-white">
                        11,500+
                      </div>
                      <div className="mt-1 font-['Albert_Sans'] font-normal text-[20px] leading-6 tracking-[0%] text-center text-white">
                        Candidates Trained
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                  <div className="inline-flex items-center justify-center w-[258px] h-[203px] rounded-[40px] bg-[#000000A8] opacity-100">
                    <div className="flex flex-col gap-2">
                      <div className="font-['Albert_Sans'] font-semibold text-[48px] leading-[100%] tracking-[0%] text-center text-[#259351]">
                        20+
                      </div>
                      <div className="mt-1 font-['Albert_Sans'] font-normal text-[20px] leading-6 tracking-[0%] text-center text-[#259351]">
                        Departments in Pan India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small spacing at bottom */}
        <div className="pb-16 md:pb-20" />
      </div>
    </section>
  );
}
