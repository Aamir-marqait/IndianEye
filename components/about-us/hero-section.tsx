"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutHeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="w-full bg-black text-white py-8 md:py-12 lg:py-16 px-4 md:px-6 relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/about/lines.png"
          alt="Background Lines"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute blur-[70px] inset-30 flex items-center justify-center overflow-hidden opacity-100">
        <Image
          src="/about/bg-color.png"
          alt="Background"
          width={1920}
          height={1080}
          className="object-cover"
        />
      </div>
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="flex flex-col w-full gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Text column */}
          <div className="lg:col-span-5">
            <h2 className="text-[32px] md:text-[40px] lg:text-5xl font-semibold leading-[1.2] md:leading-none tracking-normal text-white mb-3 md:mb-4">
              {/* Color the A and U letters to match the reference */}
              <span className="inline-block mr-1">
                <span className="text-[#EA580C]">A</span>bout
              </span>
              <span className="inline-block ml-1">
                <span className="text-[#259351]">U</span>s
              </span>
            </h2>

            <p className="text-[16px] md:text-xl lg:text-2xl font-normal leading-[150%] tracking-normal text-white max-w-xl">
              Security is more than a service—its our promise. Every client,
              every time, with unwavering dedication
            </p>
          </div>

          {/* Video container */}
          <div className="w-full">
            <div className="relative p-0.5 rounded-xl md:rounded-2xl bg-linear-to-r from-[rgba(255,255,255,0.36)] to-[rgba(153,153,153,0.36)]">
              <div className="rounded-xl md:rounded-2xl overflow-hidden bg-[#0000004D] relative">
                {!isPlaying ? (
                  <>
                    <Image
                      src="/about/thumbnail.jpg"
                      alt="About media thumbnail"
                      width={1000}
                      height={460}
                      className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[460px] object-cover block"
                    />
                    <button
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play video"
                      className="cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transform transition"
                    >
                      <svg
                        width="146"
                        height="146"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 md:w-10 md:h-10"
                      >
                        <path d="M12 8L28 18L12 28V8Z" fill="#EA580C" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <iframe
                    className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[460px]"
                    src="https://www.youtube.com/embed/fS-cxg2Bi3M?autoplay=1&hd=1&vq=hd1080"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
