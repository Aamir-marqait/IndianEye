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
    image: "/drone/9.png",
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
    image: "/drone/8.png",
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
    image: "/drone/7.png",
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
    image: "/drone/6.png",
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
    image: "/drone/66.png",
    bullets: ["Afforestation Programme", "Tree Counting", "3D Modeling"],
  },
  {
    id: "ops",
    title: "Operation and Maintenance",
    image: "/drone/55.png",
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
    image: "/drone/55.png",
    bullets: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
];

export default function ServicesUAV() {
  return (
    <section className="w-full bg-black text-white py-16">
      {/* background is intentionally kept pure black as requested */}
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-[48px] leading-[100%] font-semibold text-white"
            style={{ fontFamily: "Albert Sans" }}
          >
            Services – UAV Based Solutions
          </h2>
          <p
            className="mt-3 text-[20px] leading-[100%] font-normal text-white text-center max-w-2xl mx-auto"
            style={{ fontFamily: "Albert Sans" }}
          >
            Comprehensive UAV-based solutions for surveillance, mapping, and
            infrastructure management across diverse sectors with precision and
            reliability.
          </p>
        </div>

        {/* Top grid: 4 columns on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOP_COLS.map((col) => (
            <article
              key={col.id}
              className="group bg-transparent rounded-xl overflow-hidden transition transform hover:-translate-y-1"
            >
              <div className="rounded-[20px] overflow-hidden ">
                <div className="relative w-[257px] h-[140px] rounded-t-[20px]">
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
                  <h3 className="text-[16px] leading-6 font-semibold text-white mb-3 pb-3 border-b border-[#555555]" style={{ fontFamily: 'Albert Sans' }}>
                    {col.title}
                  </h3>

                  <ul className="space-y-2">
                    {col.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-orange-400 shrink-0 mt-1"
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
                        <span className="text-[14px] leading-[100%] font-normal text-white" style={{ fontFamily: 'Albert Sans' }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom row (three columns) - centered */}
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[900px]">
            {BOTTOM_COLS.map((col) => (
              <article
                key={col.id}
                className="group bg-transparent rounded-xl overflow-hidden transition transform hover:-translate-y-1"
              >
                <div className="rounded-[20px] overflow-hidden bg-gray-900/50">
                  <div className="relative w-[257px] h-[140px] rounded-t-[20px]">
                    <Image
                      src={col.image}
                      alt={col.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-[16px] leading-6 font-semibold text-white mb-3 pb-3 border-b border-[#555555]" style={{ fontFamily: 'Albert Sans' }}>
                      {col.title}
                    </h3>

                    <ul className="space-y-2">
                      {col.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg
                            className="w-4 h-4 text-orange-400 shrink-0 mt-1"
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
                          <span className="text-[14px] leading-[100%] font-normal text-white" style={{ fontFamily: 'Albert Sans' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Footer spacing */}
        <div className="pt-10" />
      </div>
    </section>
  );
}
