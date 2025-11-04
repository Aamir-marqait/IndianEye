"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Achievement = {
  id: string;
  text: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    text: "ISL has been empaneled with Maharashtra State Skill Development Society (MSSDS) for MultiSkill Training.",
  },
  {
    id: "a2",
    text: "ISL has become the Training Partner with UNDP for skill development program in the state of Karnataka.",
  },
  {
    id: "a3",
    text: "ISL will provide technical assistance and training resources to enhance the employability of youth in the region.",
  },
  {
    id: "a4",
    text: "ISL partnered with local authorities to scale training across multiple districts and improve placement outcomes.",
  },
  {
    id: "a5",
    text: "ISL introduced advanced simulation and field training modules to raise standards of practical readiness.",
  },
];

export default function AchievementsCarousel({
  bgImage = "",
}: {
  bgImage?: string;
}) {
  const [active, setActive] = useState<number>(1); // start with second item visible like reference
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Scroll the active slide into view centered
    const node = slideRefs.current[active];
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  useEffect(() => {
    // keyboard support
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        setActive((s) => Math.min(s + 1, ACHIEVEMENTS.length - 1));
      } else if (e.key === "ArrowLeft") {
        setActive((s) => Math.max(s - 1, 0));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function prev() {
    setActive((s) => Math.max(s - 1, 0));
  }
  function next() {
    setActive((s) => Math.min(s + 1, ACHIEVEMENTS.length - 1));
  }

  return (
    <section className="w-full bg-black text-white py-16">
      {/* note: as requested background is kept black only.
          If you want to use a decorative background image, pass bgImage prop,
          currently it's not rendered visually to keep background pure black.
          An invisible Image element with src is included below so you can easily set src="" as requested. */}
      <div className="mx-auto px-12 w-full max-w-screen ">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Our Achievements
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-[820px] mx-auto">
            Comprehensive solutions blending advanced technology with decades of
            security expertise.
          </p>
        </div>

        {/* Carousel area */}
        <div className="relative">
          {/* Left arrow */}
          <button
            aria-label="Previous achievement"
            onClick={prev}
            className="hidden md:flex items-center justify-center absolute left-[-18px] top-1/2 -translate-y-1/2 z-20 w-10 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            aria-label="Next achievement"
            onClick={next}
            className="hidden md:flex items-center justify-center absolute right-[-18px] top-1/2 -translate-y-1/2 z-20 w-10 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable track with snap */}
          <div
            ref={containerRef}
            className="px-2 md:px-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div
              className="flex gap-6 items-stretch py-6"
              style={{
                // ensure horizontal centering on large screens by adding padding equal to container side space
                paddingLeft: "28px",
                paddingRight: "28px",
              }}
            >
              {ACHIEVEMENTS.map((a, i) => {
                return (
                  <div
                    key={a.id}
                    ref={(el) => (slideRefs.current[i] = el)}
                    onClick={() => setActive(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActive(i);
                    }}
                    className={`shrink-0 w-[290px] sm:w-[340px] md:w-[360px] lg:w-[380px] snap-center rounded-2xl transition-all duration-400 outline-none
                      ${
                        i === active
                          ? "scale-100 ring-2 ring-emerald-500/90"
                          : "scale-95"
                      }
                    `}
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.015))",
                      minHeight: "160px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className={`m-4 md:m-6 p-4 md:p-6 rounded-xl w-full h-full flex items-center transition-colors duration-300 ${
                        i === active ? "bg-transparent" : "bg-black/40"
                      }`}
                    >
                      <p
                        className={`text-sm md:text-base leading-relaxed text-gray-200 ${
                          i === active ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {a.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {ACHIEVEMENTS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === active ? "bg-orange-500" : "bg-gray-500/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* invisible image placeholder so you can set src="" per your workflow (kept hidden to ensure background remains pure black) */}
      <div className="hidden" aria-hidden>
        <Image src={bgImage ?? ""} alt="" width={1600} height={600} />
      </div>

      <style jsx>{`
        /* hide native scrollbar for modern browsers while keeping scroll accessible */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
