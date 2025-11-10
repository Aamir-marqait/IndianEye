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
    <section className="w-full bg-black text-white py-10 md:py-12 lg:py-16">
      {/* background is intentionally kept pure black as requested */}
      <div className="mx-auto px-4 md:px-6 w-full max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2
            className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] md:leading-[1.1] lg:leading-[100%] font-semibold text-white"
            style={{ fontFamily: "Albert Sans" }}
          >
            Services – UAV Based Solutions
          </h2>
          <p
            className="mt-2 md:mt-3 text-[16px] md:text-[18px] lg:text-[20px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white text-center max-w-2xl mx-auto px-4"
            style={{ fontFamily: "Albert Sans" }}
          >
            Comprehensive UAV-based solutions for surveillance, mapping, and
            infrastructure management across diverse sectors with precision and
            reliability.
          </p>
        </div>

        {/* Top grid: 4 columns on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {TOP_COLS.map((col) => (
            <article
              key={col.id}
              className="group bg-transparent rounded-xl overflow-hidden transition transform hover:-translate-y-1"
            >
              <div className="rounded-2xl md:rounded-[20px] overflow-hidden ">
                <div className="relative w-full h-[140px] md:h-[150px] rounded-t-2xl md:rounded-t-[20px]">
                  {/* image placeholder - replace with your actual image files */}
                  <Image
                    src={col.image}
                    alt={col.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3 md:p-4">
                  <h3 className="text-[15px] md:text-[16px] leading-[1.4] md:leading-6 font-semibold text-white mb-2 md:mb-3 pb-2 md:pb-3 border-b border-[#555555]" style={{ fontFamily: 'Albert Sans' }}>
                    {col.title}
                  </h3>

                  <ul className="space-y-1.5 md:space-y-2">
                    {col.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 text-orange-400 shrink-0 mt-0.5 md:mt-1"
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
                        <span className="text-[13px] md:text-[14px] leading-[140%] md:leading-[100%] font-normal text-white" style={{ fontFamily: 'Albert Sans' }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom row (three columns) - centered */}
        <div className="mt-6 md:mt-8 lg:mt-10 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-[900px]">
            {BOTTOM_COLS.map((col) => (
              <article
                key={col.id}
                className="group bg-transparent rounded-xl overflow-hidden transition transform hover:-translate-y-1"
              >
                <div className="rounded-2xl md:rounded-[20px] overflow-hidden bg-gray-900/50">
                  <div className="relative w-full h-[140px] md:h-[150px] rounded-t-2xl md:rounded-t-[20px]">
                    <Image
                      src={col.image}
                      alt={col.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-3 md:p-4">
                    <h3 className="text-[15px] md:text-[16px] leading-[1.4] md:leading-6 font-semibold text-white mb-2 md:mb-3 pb-2 md:pb-3 border-b border-[#555555]" style={{ fontFamily: 'Albert Sans' }}>
                      {col.title}
                    </h3>

                    <ul className="space-y-1.5 md:space-y-2">
                      {col.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 text-orange-400 shrink-0 mt-0.5 md:mt-1"
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
                          <span className="text-[13px] md:text-[14px] leading-[140%] md:leading-[100%] font-normal text-white" style={{ fontFamily: 'Albert Sans' }}>{b}</span>
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
        <div className="pt-6 md:pt-8 lg:pt-10" />
      </div>
    </section>
  );
}
