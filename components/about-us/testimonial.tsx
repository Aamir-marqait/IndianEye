"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "It is a great pleasure for me to enjoy such a beautiful show by the young boys. And I am trusting Indianeye People to give us proper training of running an Airport and I hope and trust that we will get very good training from Indianeye people as far as managing of an Airport is concern.”",
    name: "Mr. Bhaskar Rao",
    position: "IPS IGP - Northern Range, Belgaum",
  },
  {
    id: 2,
    quote:
      "It is a great pleasure for me to enjoy such a beautiful show by the young boys. And I am trusting Indianeye People to give us proper training of running an Airport and I hope and trust that we will get very good training from Indianeye people as far as managing of an Airport is concern.”",
    name: "Mr. Bhaskar Rao",
    position: "IPS IGP - Northern Range, Belgaum",
  },
  {
    id: 3,
    quote:
      "It is a great pleasure for me to enjoy such a beautiful show by the young boys. And I am trusting Indianeye People to give us proper training of running an Airport and I hope and trust that we will get very good training from Indianeye people as far as managing of an Airport is concern.”",
    name: "Mr. Bhaskar Rao",
    position: "IPS IGP - Northern Range, Belgaum",
  },
  {
    id: 4,
    quote:
      "It is a great pleasure for me to enjoy such a beautiful show by the young boys. And I am trusting Indianeye People to give us proper training of running an Airport and I hope and trust that we will get very good training from Indianeye people as far as managing of an Airport is concern.”",
    name: "Mr. Bhaskar Rao",
    position: "IPS IGP - Northern Range, Belgaum",
  },
];

// Testimonials section replicating the red gradient banner with portrait, quote, and decorative quote icons
export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="w-screen min-h-[90vh] relative bg-[#0B0B0B]">
      <Image
        src="/about/quote.png"
        alt=""
        width={180}
        height={200}
        className="pointer-events-none absolute bottom-10 left-0 opacity-100"
        loading="lazy"
      />
      <DecorQuotes
        side="right"
        size={132}
        className="hidden md:block pointer-events-none absolute top-16 right-58 opacity-100"
      />

      <div className="mx-auto max-w-[1100px] px-6 md:px-8 py-14 md:py-16 lg:py-20">
        <div className="flex items-center gap-2 mb-4 md:mb-5">
          <span className="h-5 w-1 rounded-full bg-[#EA580C]" />
          <span
            className="text-base leading-[100%] font-bold uppercase text-[#EA580C] tracking-[0%]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            CLIENT Testimonials
          </span>
        </div>

        <h2
          className="text-[36px] leading-[100%] font-bold text-white tracking-[0%] mb-8 md:mb-10"
          style={{ fontFamily: "Albert Sans, sans-serif" }}
        >
          Our Client Experience in Their Own Words
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-10">
          {/* Quote + meta */}
          <div className="flex-1">
            <blockquote
              className="text-[24px] leading-[150%] font-semibold text-white tracking-[0%] transition-all duration-500"
              style={{ fontFamily: "Albert Sans, sans-serif" }}
            >
              &#34;{currentTestimonial.quote}&#34;
            </blockquote>

            <div className="mt-6 flex flex-col gap-2 md:mt-7">
              <p
                className="text-[20px] leading-[100%] font-bold text-white tracking-[0%] transition-all duration-500"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {currentTestimonial.name}
              </p>
              <p
                className="text-[20px] leading-[100%] font-normal text-white/65 tracking-[0%] transition-all duration-500"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {currentTestimonial.position}
              </p>
            </div>

            <div className="mt-10  flex items-center justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentSlide ? "h-2 w-16" : "h-2 w-2"
                  }`}
                  style={{
                    background:
                      index === currentSlide
                        ? "var(--primary-foreground)"
                        : "color-mix(in oklab, var(--primary-foreground), transparent 55%)",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecorQuotes({
  side,
  size = 120,
  className = "",
}: {
  side: "left" | "right";
  size?: number;
  className?: string;
}) {
  const isRight = side === "right";
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      style={{ transform: "scaleX(-1)" }}
    >
      <path
        d="M30 70c-8 0-14-6-14-14V28c0-8 6-14 14-14h26v26H46c-1 8-8 14-16 14z"
        stroke="white"
        strokeWidth="6"
        opacity={isRight ? 0.85 : 1}
      />
      <path
        d="M86 70c-8 0-14-6-14-14V28c0-8 6-14 14-14h26v26H102c-1 8-8 14-16 14z"
        stroke="white"
        strokeWidth="6"
        opacity={isRight ? 0.85 : 1}
      />
    </svg>
  );
}
