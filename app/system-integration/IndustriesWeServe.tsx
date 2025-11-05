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
    image: "/si/a.png",
    alt: "city surveillance",
  },
  {
    id: "transport",
    title: "Transportation",
    image: "/si/b.png",
    alt: "transportation",
  },
  {
    id: "banking",
    title: "Banking",
    image: "/si/c.png",
    alt: "banking",
  },
  {
    id: "events",
    title: "Sports & Events",
    image: "/si/d.png",
    alt: "sports and events",
  },
  {
    id: "retail",
    title: "Retail & Hospitality",
    image: "/si/e.png",
    alt: "retail and hospitality",
  },
  {
    id: "health",
    title: "Health",
    image: "/si/f.png",
    alt: "health",
  },
  {
    id: "government",
    title: "Government",
    image: "/si/g.png",
    alt: "government",
  },
  {
    id: "defense",
    title: "Defense & Critical Infrastructure",
    image: "/si/h.png",
    alt: "defense and critical infrastructure",
  },
  {
    id: "education",
    title: "Education",
    image: "/si/i.png",
    alt: "education",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-black text-white py-12">
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        <header className="text-center mb-10">
          <h2
            className="text-[48px] font-semibold leading-[100%] tracking-[0%] text-white"
            style={{ fontFamily: "Albert Sans" }}
          >
            Industries We Serve
          </h2>
        </header>

        {/* Mobile & Tablet: Show all in single grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="flex flex-col items-center max-w-40">
                <div
                  className="rounded-full overflow-hidden ring-2 ring-white/6 bg-gray-900"
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <Image
                    src={ind.image}
                    alt={ind.alt || ind.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="mt-3 text-center">
                  <p
                    className="text-[18px] font-medium leading-[100%] tracking-[0%] text-center text-white"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    {ind.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 5+4 layout */}
        <div className="hidden md:flex flex-col gap-y-10">
          {/* First row: 5 items */}
          <div className="grid grid-cols-5 gap-y-10 gap-x-6 justify-items-center">
            {INDUSTRIES.slice(0, 5).map((ind) => (
              <div key={ind.id} className="flex flex-col items-center">
                <div
                  className="rounded-full overflow-hidden ring-2 ring-white/6 bg-gray-900"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <Image
                    src={ind.image}
                    alt={ind.alt || ind.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="mt-3 text-center">
                  <p
                    className="text-[20px] font-medium leading-[100%] tracking-[0%] text-center text-white"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    {ind.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row: 4 items centered */}
          <div className="grid grid-cols-4 gap-y-10 gap-x-6 justify-items-center max-w-[900px] mx-auto">
            {INDUSTRIES.slice(5, 9).map((ind) => (
              <div key={ind.id} className="flex flex-col items-center">
                <div
                  className="rounded-full overflow-hidden ring-2 ring-white/6 bg-gray-900"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <Image
                    src={ind.image}
                    alt={ind.alt || ind.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="mt-3 text-center">
                  <p
                    className="text-[20px] font-medium leading-[100%] tracking-[0%] text-center text-white"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    {ind.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
