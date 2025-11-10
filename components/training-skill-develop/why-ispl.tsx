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

      <div className="relative mx-auto px-4 md:px-6 w-full max-w-[1100px] z-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-['Albert_Sans'] font-semibold text-[28px] md:text-[48px] leading-[1.3] md:leading-[70px] tracking-[0%] text-center capitalize text-white px-4">
            Why ISPL?
          </h2>
          <p className="mt-2 md:mt-3 font-['Albert_Sans'] font-normal text-[14px] md:text-base leading-[150%] md:leading-[23px] tracking-[0%] text-center text-white max-w-[880px] mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod. Maecenas sed est mollis,
            convallis nisi convallis, imperdiet massa.
          </p>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center">
          <div className="w-full max-w-[1108px] min-h-[324px] rounded-[24px] md:rounded-[40px] overflow-hidden relative bg-[#000000A8] opacity-100 shadow-lg">
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

            <div className="relative z-10 px-4 md:px-6 py-8 md:py-10 lg:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 justify-center px-2 md:px-10 py-2 md:py-5 items-center">
                {/* Stat item */}
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-full max-w-[258px] h-[180px] md:h-[203px] rounded-[24px] md:rounded-[40px] bg-[#000000A8] opacity-100">
                    <div className="flex flex-col gap-2">
                      <div className="font-['Albert_Sans'] font-semibold text-[36px] md:text-[48px] leading-[100%] tracking-[0%] text-center text-[#EA580C]">
                        5000+
                      </div>
                      <div className="mt-1 font-['Albert_Sans'] font-normal text-[16px] md:text-[20px] leading-6 tracking-[0%] text-center text-[#EA580C]">
                        Candidates Placed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-full max-w-[258px] h-[180px] md:h-[203px] rounded-[24px] md:rounded-[40px] bg-[#000000A8] opacity-100">
                    <div className="flex flex-col gap-2">
                      <div className="font-['Albert_Sans'] font-semibold text-[36px] md:text-[48px] leading-[100%] tracking-[0%] text-center text-white">
                        11,500+
                      </div>
                      <div className="mt-1 font-['Albert_Sans'] font-normal text-[16px] md:text-[20px] leading-6 tracking-[0%] text-center text-white">
                        Candidates Trained
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-full max-w-[258px] h-[180px] md:h-[203px] rounded-[24px] md:rounded-[40px] bg-[#000000A8] opacity-100">
                    <div className="flex flex-col gap-2">
                      <div className="font-['Albert_Sans'] font-semibold text-[36px] md:text-[48px] leading-[100%] tracking-[0%] text-center text-[#259351]">
                        20+
                      </div>
                      <div className="mt-1 font-['Albert_Sans'] font-normal text-[16px] md:text-[20px] leading-6 tracking-[0%] text-center text-[#259351]">
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
        <div className="pb-10 md:pb-16 lg:pb-20" />
      </div>
    </section>
  );
}
