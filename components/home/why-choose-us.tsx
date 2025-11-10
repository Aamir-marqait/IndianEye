import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  const bullets = [
    "Experienced and trained security professionals",
    "24/7 vigilance and quick response",
    "Advanced technology and surveillance system",
    "Proven track record of trust and reliability",
  ];

  return (
    <section className="w-screen relative bg-black py-10 md:py-16">
      {/* Decorative element - top left */}
      <div className="absolute -top-10 -left-9 w-20 h-20 md:w-48 md:h-98 pointer-events-none">
        <Image
          src="/home/element1.png"
          alt="Decorative element"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Decorative element - bottom right */}
      <div className="absolute bottom-0 right-0 w-20 h-20 md:w-48 md:h-98 pointer-events-none">
        <Image
          src="/home/element2.png"
          alt="Decorative element"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="mx-auto px-4 md:px-6 w-full max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="font-albert-sans text-[16px] md:text-[20px] font-semibold leading-6 tracking-normal text-[#EA580C] mb-3 md:mb-4">
              WHY CHOOSE US?
            </p>

            <h2 className="font-albert-sans text-[24px] md:text-[40px] font-semibold leading-[1.4] md:leading-[70px] tracking-normal capitalize text-white">
              Securing What Matters Most, With{" "}
              <span className="text-[#EA580C]">Vigilance</span> And{" "}
              <span className="text-[#259251]">Integrity</span>
            </h2>

            <p className="mt-3 md:mt-5 font-albert-sans text-[14px] md:text-[20px] font-normal leading-[150%] tracking-normal text-white max-w-prose">
              Discover why organizations rely on Indianeye Security to protect
              what matters most.
            </p>

            <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2 md:gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-transparent ring-2 ring-orange-400 text-orange-400 text-sm">
                    ✓
                  </span>
                  <span className="font-albert-sans text-[14px] md:text-base font-normal leading-5 tracking-normal text-white">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: images stack */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Large image card */}
              <div className="relative rounded-2xl overflow-hidden w-full sm:max-w-[360px] md:max-w-[420px] h-[280px] sm:h-[320px] md:h-[400px] ring-1 ring-black/50 shadow-lg">
                <Image
                  src="/home/r.png"
                  alt="large"
                  layout="fill"
                  objectFit="contain"
                  className="object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
