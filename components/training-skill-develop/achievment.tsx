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

export default function AchievementsCarousel() {
  const [active, setActive] = useState<number>(1); // start with second item visible like reference
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip scroll on initial mount to prevent auto-scrolling to this section
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Scroll the active slide into view centered (only on user interaction)
    const node = slideRefs.current[active];
    if (node && containerRef.current) {
      // Only scroll horizontally within the container, not the whole page
      const container = containerRef.current;
      const nodeLeft = node.offsetLeft;
      const containerWidth = container.offsetWidth;
      const nodeWidth = node.offsetWidth;

      container.scrollTo({
        left: nodeLeft - (containerWidth / 2) + (nodeWidth / 2),
        behavior: "smooth"
      });
    }
  }, [active]);

  useEffect(() => {
    // keyboard support
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        setActive((s) => (s + 1) % ACHIEVEMENTS.length);
      } else if (e.key === "ArrowLeft") {
        setActive((s) => (s - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function prev() {
    setActive((s) => (s - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
  }
  function next() {
    setActive((s) => (s + 1) % ACHIEVEMENTS.length);
  }

  return (
    <section className="w-full bg-[#171717] text-white py-5 relative overflow-hidden">
      {/* Decorative element in right corner */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <Image
          src="/tsd/element2.png"
          alt=""
          width={300}
          height={300}
          className="opacity-50"
        />
      </div>

      <div className="mx-auto px-12 w-full max-w-screen relative z-10">
        <div className="text-center mb-8">
          <h2
            className="text-[48px] leading-[70px] font-semibold text-white text-center capitalize"
            style={{ fontFamily: "Albert Sans" }}
          >
            Our Achievements
          </h2>
          <p
            className="mt-3 text-[16px] leading-[23px] font-normal text-white text-center max-w-[820px] mx-auto"
            style={{ fontFamily: "Albert Sans" }}
          >
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
                    ref={(el) => {
                      slideRefs.current[i] = el;
                    }}
                    onClick={() => setActive(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(i);
                      }
                    }}
                    className={`shrink-0 w-[444px] h-[149px] snap-center rounded-2xl transition-all duration-400 outline-none pt-10 pr-8 pb-10 pl-8 flex items-center gap-2
                      ${i === active ? "scale-100" : "scale-95 opacity-70"}
                    `}
                    style={{
                      background:
                        "linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)",
                      backdropFilter: "blur(50px)",
                    }}
                  >
                    <p
                      className={`text-[16px] leading-[100%] font-normal ${
                        i === active ? "text-white" : "text-gray-300"
                      }`}
                      style={{ fontFamily: "Poppins" }}
                    >
                      {a.text}
                    </p>
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
