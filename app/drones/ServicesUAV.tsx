import React from "react";
import Image from "next/image";

type ServiceCol = {
  id: string;
  title: string;
  image: string;
  bullets: string[];
};

const TOP_COLS: ServiceCol[] = [
  {
    id: "surv",
    title: "UAV Based Surveillance & Monitoring",
    image: "/images/uav-surv.jpg",
    bullets: [
      "Law and Order",
      "Defence",
      "Wildlife",
      "Mining Project",
      "Project Monitoring",
    ],
  },
  {
    id: "urban",
    title: "Urban and Rural Administration",
    image: "/images/urban-rural.jpg",
    bullets: [
      "Smart City Mapping",
      "Digitization of Land Records",
      "GIS Based Surveying",
      "Change Detection",
      "3D Modeling & Contour Mapping",
    ],
  },
  {
    id: "infra",
    title: "Infrastructure Surveying",
    image: "/images/infrastructure.jpg",
    bullets: [
      "Pre Construction Surveying",
      "Corridor Mapping",
      "Transmission Line Survey",
      "Road, Railways & Canal Surveying",
      "Vegetation Growth & Change Detection",
    ],
  },
  {
    id: "agri",
    title: "Agriculture Mapping",
    image: "/images/agri-mapping.jpg",
    bullets: [
      "Crop Survey",
      "Yield Forecasting",
      "Crop Health",
      "3D Modeling",
      "Digitization of Irrigation Infrastructure",
    ],
  },
];

const BOTTOM_COLS: ServiceCol[] = [
  {
    id: "forest",
    title: "Forest Mapping",
    image: "/images/forest-mapping.jpg",
    bullets: ["Afforestation Programme", "Tree Counting", "3D Modeling"],
  },
  {
    id: "ops",
    title: "Operation and Maintenance",
    image: "/images/operations.jpg",
    bullets: [
      "Transmission lines",
      "Solar Power",
      "Wind Power",
      "Chimney Inspection",
      "Sub-Station Inspection",
    ],
  },
  {
    id: "watershed",
    title: "Watershed Management",
    image: "/images/watershed.jpg",
    bullets: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
];

export default function ServicesUAV({ bgImage = "" }: { bgImage?: string }) {
  return (
    <section className="w-full bg-black text-white py-16">
      {/* background is intentionally kept pure black as requested */}
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Services – UAV Based Solutions
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            rhoncus turpis.
          </p>
        </div>

        {/* Top grid: 4 columns on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOP_COLS.map((col) => (
            <article
              key={col.id}
              className="group bg-transparent rounded-xl overflow-hidden transition transform hover:-translate-y-1"
            >
              <div className="rounded-lg overflow-hidden bg-gray-900/50">
                <div className="relative w-full h-36 sm:h-40 rounded-t-lg">
                  {/* image placeholder - replace with your actual image files */}
                  <Image
                    src={col.image}
                    alt={col.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    {col.title}
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {col.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom row (three columns) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOTTOM_COLS.map((col) => (
            <article
              key={col.id}
              className="group bg-transparent rounded-xl overflow-hidden transition transform hover:-translate-y-1"
            >
              <div className="rounded-lg overflow-hidden bg-gray-900/50">
                <div className="relative w-full h-28 sm:h-32 rounded-t-lg">
                  <Image
                    src={col.image}
                    alt={col.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    {col.title}
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {col.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer spacing */}
        <div className="pt-10" />

        {/* Hidden image element so you can provide a bg image path without changing visual black bg */}
        <div className="sr-only" aria-hidden>
          <Image src={bgImage || ""} alt="" width={1600} height={900} />
        </div>
      </div>
    </section>
  );
}
