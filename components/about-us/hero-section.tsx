"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutHeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="w-full bg-black text-white py-16 px-6 relative">
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
        <div className="flex flex-col w-full gap-10 items-start">
          {/* Text column */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl font-semibold leading-none tracking-normal text-white mb-4">
              {/* Color the A and U letters to match the reference */}
              <span className="inline-block mr-1">
                <span className="text-[#EA580C]">A</span>bout
              </span>
              <span className="inline-block ml-1">
                <span className="text-[#259351]">U</span>s
              </span>
            </h2>

            <p className="text-2xl font-normal leading-[150%] tracking-normal text-white max-w-xl">
              Security is more than a service—its our promise. Every client,
              every time, with unwavering dedication
            </p>
          </div>

          {/* Video container */}
          <div className="w-full">
            <div className="relative p-0.5 rounded-2xl bg-linear-to-r from-[rgba(255,255,255,0.36)] to-[rgba(153,153,153,0.36)]">
              <div className="rounded-2xl overflow-hidden bg-[#0000004D] relative">
                {!isPlaying ? (
                  <>
                    <Image
                      src="/about/thumbnail.jpg"
                      alt="About media thumbnail"
                      width={1000}
                      height={460}
                      className="w-full h-[380px] sm:h-[420px] md:h-[460px] object-cover block"
                    />
                    <button
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play video"
                      className="cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transform transition"
                    >
                      <svg
                        width="146"
                        height="146"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 8L28 18L12 28V8Z" fill="#EA580C" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <iframe
                    className="w-full h-[380px] sm:h-[420px] md:h-[460px]"
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
