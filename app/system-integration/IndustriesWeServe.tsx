import React from "react";
import Image from "next/image";

type Industry = {
  id: string;
  title: string;
  image: string; // replace with your image path e.g. "/images/industry-city.jpg"
  alt?: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "city",
    title: "City Surveillance",
    image: "/images/industry-city.jpg",
    alt: "city surveillance",
  },
  {
    id: "transport",
    title: "Transportation",
    image: "/images/industry-transport.jpg",
    alt: "transportation",
  },
  {
    id: "banking",
    title: "Banking",
    image: "/images/industry-banking.jpg",
    alt: "banking",
  },
  {
    id: "events",
    title: "Sports & Events",
    image: "/images/industry-events.jpg",
    alt: "sports and events",
  },
  {
    id: "retail",
    title: "Retail & Hospitality",
    image: "/images/industry-retail.jpg",
    alt: "retail and hospitality",
  },
  {
    id: "health",
    title: "Health",
    image: "/images/industry-health.jpg",
    alt: "health",
  },
  {
    id: "government",
    title: "Government",
    image: "/images/industry-government.jpg",
    alt: "government",
  },
  {
    id: "defense",
    title: "Defense & Critical Infrastructure",
    image: "/images/industry-defense.jpg",
    alt: "defense and critical infrastructure",
  },
  {
    id: "education",
    title: "Education",
    image: "/images/industry-education.jpg",
    alt: "education",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-black text-white py-12">
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        <header className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold">
            Industries We Serve
          </h2>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="flex flex-col items-center max-w-[160px]"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-white/6 bg-gray-900">
                <Image
                  src={ind.image}
                  alt={ind.alt || ind.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm md:text-base text-gray-200">
                  {ind.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
