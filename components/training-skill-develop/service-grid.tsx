"use client";

import Image from "next/image";

const SERVICES = [
  { title: "Pre-recruitment Residential Training", image: "/tsd/1.png" },
  { title: "Drone/UAV Pilot Training", image: "/tsd/2.png" },
  {
    title: "Indoor, Outdoor Physical & Aptitude Training",
    image: "/tsd/3.png",
  },
  { title: "Army, Airforce & Navy Preparation", image: "/tsd/4.png" },
  { title: "DGCA Certified Pilot Program", image: "/tsd/5.png" },
];

export default function ServicesGrid() {
  return (
    <section className="w-full relative overflow-hidden bg-black">
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        <div className="pt-12 text-center">
          <h2 className="font-['Albert_Sans'] font-semibold text-[48px] leading-[70px] tracking-[0%] text-center capitalize text-white">
            Our Services
          </h2>
          <p className="mt-3 font-['Albert_Sans'] font-normal text-base leading-[23px] tracking-[0%] text-center text-white max-w-2xl mx-auto">
            Comprehensive solutions blending advanced technology with decades of
            security expertise.
          </p>
        </div>

        {/* Services Grid - Cards centered with flex-wrap */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.title + "-g"}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[360px] group rounded-2xl overflow-hidden transition transform duration-300 hover:-translate-y-1"
            >
              <div
                className="rounded-2xl p-3 transition-colors duration-300 "
                style={{
                  background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))'
                }}
              >
                <div className="relative rounded-xl overflow-hidden h-[360px] md:h-[380px]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark gradient at bottom for text visibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                  {/* title container */}
                  <div className="absolute left-0 right-0 bottom-6 px-6 text-center">
                    <h3 className="text-lg md:text-xl font-semibold transition-colors duration-300 text-white">
                      {s.title}
                    </h3>
                  </div>

                  {/* white overlay with rounded corners that appears on hover to invert the whole card background */}
                  {/* <div className="absolute inset-0 rounded-xl pointer-events-none">
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* final spacing */}
      <div className="pb-16" />
    </section>
  );
}
