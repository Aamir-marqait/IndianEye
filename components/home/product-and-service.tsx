import Image from "next/image";
import Link from "next/link";
import React from "react";

type Service = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const services: Service[] = [
  {
    title: "Drones",
    description:
      "Comprehensive solutions blending advanced technology with decades of security expertise.",
    image: "/home/d.png", // replace with your image path or external url
    href: "/drones",
  },
  {
    title: "Counter Drone solutions",
    description:
      "Comprehensive solutions blending advanced technology with decades of security expertise.",
    image: "/home/cd.png",
    href: "/counter-drone-solution",
  },
  {
    title: "System Integration",
    description:
      "Comprehensive solutions blending advanced technology with decades of security expertise.",
    image: "/home/si.png",
    href: "/system-integration",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-black py-10 md:py-16 relative">
      {/* Top Left Image */}
      <div className="absolute top-0 -left-7 w-20 h-20 md:w-120 md:h-120  pointer-events-none">
        <Image
          src="/home/left.png"
          alt="Decorative element"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Bottom Right Image */}
      <div className="absolute bottom-0 right-0 w-20 h-20 md:w-120 md:h-120  pointer-events-none">
        <Image
          src="/home/right.png"
          alt="Decorative element"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="mx-auto px-4 md:px-6 w-full max-w-[1100px] relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p
            className="text-[16px] md:text-[20px] font-semibold text-center leading-6 font-albert-sans"
            style={{ color: "#EA580C" }}
          >
            OUR SERVICES
          </p>
          <h2 className="mt-3 md:mt-4 text-[28px] md:text-[48px] text-white font-semibold text-center leading-[110%] md:leading-[100%] capitalize font-albert-sans">
            Products & <span className="text-white">Services</span>
          </h2>
          <p className="mt-3 md:mt-5 text-[14px] md:text-[16px] font-normal text-center text-white/80 leading-[140%] md:leading-[100%] max-w-[820px] mx-auto font-albert-sans px-4">
            Comprehensive solutions blending advanced technology with decades of
            security expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.6)] border border-white/5 hover:border-gray-700 transition-colors duration-300 backdrop-blur-md"
              style={{
                borderRadius: "28px",
                background:
                  "linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 104.24%)",
              }}
            >
              {/* Image */}
              <div className="relative w-full h-40 md:h-48 lg:h-52 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  layout="fill"
                  objectFit="contain"
                />
                {/* subtle inner border */}
                {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-black/40 pointer-events-none " /> */}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2 md:mb-3 leading-[23px] font-albert-sans">
                  {s.title}
                </h3>
                <p className="text-[14px] md:text-[16px] font-normal text-white mb-4 md:mb-6 leading-[150%] font-albert-sans">
                  {s.description}
                </p>

                <Link
                  href={s.href || "#"}
                  className="inline-flex items-center font-medium text-[14px] md:text-[16px] leading-[23px] underline font-poppins"
                  style={{ color: "#EA580C" }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>

              {/* rounded bottom radius */}
              <div className="h-6 bg-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
