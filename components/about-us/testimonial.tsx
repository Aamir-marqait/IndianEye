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
    <section className="max-w-screen min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] relative bg-[#0B0B0B]">
      {/* Background color image - bottom layer */}
      <Image
        src="/about/bg-color.png"
        alt=""
        width={200}
        height={150}
        className="pointer-events-none blur-3xl absolute bottom-6 md:bottom-10 left-0 opacity-100 w-[200px] md:w-[280px]"
        loading="lazy"
      />
      {/* Quote image - top layer */}
      <Image
        src="/about/quote.png"
        alt=""
        width={120}
        height={140}
        className="pointer-events-none absolute bottom-6 md:bottom-10 left-0 opacity-100 z-10 w-[120px] md:w-[180px]"
        loading="lazy"
      />
      <DecorQuotes
        side="right"
        size={132}
        className="hidden lg:block pointer-events-none absolute top-16 right-58 opacity-100"
      />
      <div className="absolute top-0 right-0 w-[150px] md:w-[200px] lg:w-[250px] h-[300px] md:h-[400px] lg:h-[500px] pointer-events-none overflow-hidden">
        <Image
          src="/transfer-of-tech/ellipse.png"
          alt="ellipse-decoration"
          width={300}
          height={300}
          className="absolute -top-8 md:-top-12 lg:-top-16 -right-8 md:-right-12 lg:-right-16 object-contain opacity-100"
        />
        {/* Vector image overlay */}
        <Image
          src="/transfer-of-tech/Vector.png"
          alt="vector"
          width={40}
          height={250}
          className="absolute top-4 md:top-6 lg:top-8 right-0 object-contain opacity-100 z-20"
        />
      </div>

      <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
        <div className="flex items-center gap-2 mb-3 md:mb-4 lg:mb-5">
          <span className="h-4 md:h-5 w-1 rounded-full bg-[#EA580C]" />
          <span
            className="text-[14px] md:text-base leading-[100%] font-bold uppercase text-[#EA580C] tracking-[0%]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            CLIENT Testimonials
          </span>
        </div>

        <h2
          className="text-[24px] md:text-[30px] lg:text-[36px] leading-[1.2] md:leading-[1.1] lg:leading-[100%] font-bold text-white tracking-[0%] mb-6 md:mb-8 lg:mb-10"
          style={{ fontFamily: "Albert Sans, sans-serif" }}
        >
          Our Client Experience in Their Own Words
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6 md:gap-8 lg:gap-10">
          {/* Quote + meta */}
          <div className="flex-1">
            <blockquote
              className="text-[16px] md:text-[20px] lg:text-[24px] leading-normal md:leading-[1.6] lg:leading-[150%] font-semibold text-white tracking-[0%] transition-all duration-500"
              style={{ fontFamily: "Albert Sans, sans-serif" }}
            >
              &#34;{currentTestimonial.quote}&#34;
            </blockquote>

            <div className="mt-4 md:mt-5 lg:mt-6 flex flex-col gap-1.5 md:gap-2">
              <p
                className="text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] font-bold text-white tracking-[0%] transition-all duration-500"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {currentTestimonial.name}
              </p>
              <p
                className="text-[14px] md:text-[16px] lg:text-[20px] leading-[100%] font-normal text-white/65 tracking-[0%] transition-all duration-500"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {currentTestimonial.position}
              </p>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-10 flex items-center justify-center md:justify-start gap-2 md:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentSlide ? "h-1.5 md:h-2 w-12 md:w-16" : "h-1.5 md:h-2 w-1.5 md:w-2"
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
