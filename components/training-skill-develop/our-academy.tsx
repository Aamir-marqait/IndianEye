"use client";

import React, { useState } from "react";
import Image from "next/image";

type AccordionItem = {
  title: string;
  content: string;
  images: string[];
};

type Props = {
  /**
   * Background image for the whole section (you said you have this image).
   * Pass it like: <OurAcademy bgImage="/images/your-bg.jpg" />
   * Default is empty string per your request.
   */
  bgImage?: string;
};

export default function OurAcademy({
  bgImage = "",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first accordion open by default
  const [current, setCurrent] = useState(0);

  const accordion: AccordionItem[] = [
    {
      title: "Facilities",
      content:
        "Training center at Belgundi, Karnataka. Spread over 100 acres of land with residential facilities. 3 well equipped classrooms and 5 dorms.",
      images: ["/tsd/img.png", "/tsd/img.png", "/tsd/img.png"],
    },
    {
      title: "Amenities",
      content:
        "Comfortable accommodation, mess facility, medical support and recreational spaces for trainees.",
      images: ["/tsd/img.png", "/tsd/img.png", "/tsd/img.png"],
    },
    {
      title: "Location",
      content:
        "Situated in a strategic rural location with easy access to training fields and drone testing areas.",
      images: ["/tsd/img.png", "/tsd/img.png", "/tsd/img.png"],
    },
    {
      title: "Obstacle Course",
      content:
        "Comprehensive obstacle course for endurance, agility and team-based physical training programs.",
      images: ["/tsd/img.png", "/tsd/img.png", "/tsd/img.png"],
    },
  ];

  // Get current accordion's images
  const currentImages = openIndex !== null ? accordion[openIndex].images : accordion[0].images;

  function toggleAccordion(i: number) {
    setOpenIndex(openIndex === i ? null : i);
    setCurrent(0); // Reset to first image when switching accordion
  }

  function prevPhoto() {
    setCurrent((c) => (c - 1 + currentImages.length) % currentImages.length);
  }
  function nextPhoto() {
    setCurrent((c) => (c + 1) % currentImages.length);
  }

  return (
    <section className="w-full relative overflow-hidden bg-black py-16">
      {/* Background image you own - left empty by default */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${bgImage}")`,
          // subtle dark overlay ensures readability
          opacity: bgImage ? 0.18 : 0,
        }}
      />

      {/* soft green corner accent (like reference) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 hidden md:block"
        style={{
          width: 220,
          height: 220,
          background:
            "radial-gradient(72px 72px at 10% 10%, rgba(16,185,129,0.06), transparent 30%)",
        }}
      />

      <div className="mx-auto px-6 w-full max-w-[1100px]">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-[48px] leading-[70px] font-semibold text-white capitalize"
            style={{ fontFamily: "Albert Sans" }}
          >
            Our Academy
          </h2>
          <p
            className="mt-3 text-[20px] leading-6 font-normal text-white max-w-[850px] mx-auto"
            style={{ fontFamily: "Albert Sans" }}
          >
            Where quality training meets real-world opportunities.
          </p>
        </div>

        {/* Main layout: left accordion, right image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Accordion */}
          <div className="space-y-4">
            {accordion.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.title} className="bg-transparent">
                  <button
                    onClick={() => toggleAccordion(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between py-4 px-4 rounded-md hover:bg-white/3 transition"
                  >
                    <div>
                      <div
                        className={`text-[24px] leading-[100%] font-medium align-middle ${
                          isOpen ? "text-[#EA580C] text-left" : "text-white"
                        }`}
                        style={{ fontFamily: "Albert Sans" }}
                      >
                        {item.title}
                      </div>
                      {isOpen && (
                        <div
                          className="mt-2 text-[16px] leading-6 font-normal text-white max-w-xl text-left"
                          style={{ fontFamily: "Albert Sans" }}
                        >
                          {item.content}
                        </div>
                      )}
                    </div>

                    <svg
                      className={`w-5 h-5 text-gray-300 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* collapsed content (for items that are not the active one show preview text only) */}
                  {!isOpen && (
                    <div className="px-4 mt-2 text-sm text-gray-400 max-w-prose">
                      {/* show short preview of content */}
                      {item.content.length > 120
                        ? item.content.slice(0, 120) + "…"
                        : item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Image / carousel */}
          <div className="flex flex-col justify-center md:justify-end">
            <div className="w-full h-[362px] rounded-[12px] overflow-hidden opacity-100 relative">
              <Image
                src={currentImages[current]}
                alt={`Academy photo ${current + 1}`}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>

            {/* carousel controls - below image, right aligned */}
            <div className="flex gap-3 items-center justify-end mt-4">
              <button
                onClick={prevPhoto}
                aria-label="Previous"
                className="w-[37.75px] h-[37.75px] rounded-[100px] bg-transparent border border-[#555555] flex items-center justify-center hover:border-[#FFFFFF33] transition"
              >
                <span className="text-white text-xl">←</span>
              </button>
              <button
                onClick={nextPhoto}
                aria-label="Next"
                className="w-[37.75px] h-[37.75px] bg-accent rounded-[100px] border border-[#FFFFFF33] flex items-center justify-center hover:border-[#555555] transition"
              >
                <span className="text-[#D3363B] text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* bottom spacing */}
      <div className="pb-12" />
    </section>
  );
}
