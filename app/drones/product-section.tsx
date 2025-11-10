"use client";

import React, { useState } from "react";
import Image from "next/image";

type ApplicationSection = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

type Product = {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  mainImage: string;
  thumbs: string[]; // thumbnail images
  specs: { label: string; value: string }[];
  application?: string | ApplicationSection[];
};

const PRODUCTS: Product[] = [
  {
    id: "falcon",
    name: "Falcon (Class 1 Make in India) - Fixed Wing VTOL",
    tagline: "",
    description:
      "Advanced VTOL fixed-wing drone engineered for long-endurance missions. Combines vertical takeoff capability with efficient fixed-wing flight for extended surveillance and mapping operations.",
    mainImage: "/drone/falcon.png",
    thumbs: ["/drone/img.png", "/drone/falcon.png", "/drone/falcon.png"],
    specs: [
      { label: "Takeoff and Landing Type:", value: "VTOL Fixed-Wing" },
      { label: "Body Material:", value: "Carbon Fiber and Composite Material" },
      { label: "Wingspan / Body Length:", value: "2400mm / 1150mm" },
      { label: "Net Weight:", value: "6 Kg (without battery and electronics)" },
      { label: "Battery:", value: "26000 mAh 6S Lithium Battery" },
      { label: "Max. Take-off Weight:", value: "8.5kg" },
      { label: "Max Payload Weight:", value: "1 Kg" },
      { label: "Climb Speed:", value: "4 m/s" },
      { label: "Flight Duration:", value: "90+ min without payload" },
      { label: "Max. Flight Distance:", value: "110km" },
      {
        label: "Control Radius:",
        value: "15-20 KM depending on Radio OEM Selected",
      },
      { label: "Max. Altitude AMSL:", value: "4500m (+/-500m)" },
    ],
    application: [
      {
        icon: "/drone/d.png",
        title: "Surveillance",
        description:
          "Due to good flight time, the drone can be used for surveillance missions in the following areas:",
        items: [
          "Border",
          "Traffic",
          "Forest",
          "Police",
          "Canals or other linear infrastructure",
        ],
      },
      {
        icon: "/drone/f.png",
        title: "Survey",
        description:
          "Due to good flight time, the drone can be used for surveillance missions in the following areas:",
        items: [
          "Border",
          "Traffic",
          "Forest",
          "Police",
          "Canals or other linear infrastructure",
        ],
      },
    ],
  },
  {
    id: "lotus",
    name: "Lotus - Hexacopter",
    tagline: "",
    description:
      "Heavy-duty hexacopter designed for high-payload operations. Ideal for agricultural spraying, cargo delivery, and industrial inspection missions requiring superior stability and lifting capacity.",
    mainImage: "/drone/lotus.png",
    thumbs: ["/drone/img.png", "/drone/3.png", "/drone/4.png"],
    specs: [
      { label: "Weight:", value: "6.8Kg" },
      { label: "Max. take-off weight:", value: "21-23 kg" },
      { label: "Max. payload:", value: "10-12 kg" },
      { label: "Cruise Speed:", value: "10 m/s" },
      { label: "Max. Climb Speed:", value: "4 m/s" },
      { label: "Max. Flying Speed:", value: "15 m/s" },
      { label: "Battery Capacity:", value: "22000 mAh*12S LiHV" },
      { label: "Max. Control Radius:", value: "10 km" },
      { label: "Max. Altitude AMSL:", value: "4000 m" },
      {
        label: "Hovering Accuracy:",
        value: "Vertical ± 1m, horizontal ± 1.5m",
      },
      { label: "Flight Mode:", value: "Fully automatic, semi-autonomous" },
    ],
    application: [
      {
        icon: "/drone/g.png",
        title: "Agriculture Spraying/Allied Service",
        description: "",
        items: [
          "The Drone Has Been Equipped And Tested With Spraying Payload",
          "Can Also Be Used For Allied Services Such As Washing Of Buildings & Other Infrastructure"
        ]
      },
      {
        icon: "/drone/d.png",
        title: "Surveillance",
        description: "",
        items: ["Border", "Traffic", "Forest", "Police", "Linear Infrastructure", "Power Transmission Lines"]
      },
      {
        icon: "/drone/f.png",
        title: "Drone Delivery / Disaster Management",
        description: "As a result of higher payload capacity, the drone can be utilized in Delivery & Disaster Management Operations by equipping it with the following payloads",
        items: ["Drop Payload", "Loudspeaker"]
      }
    ],
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full bg-black text-white  py-40 md:py-12 lg:py-16">
      <div className="mx-auto px-4 md:px-6 w-full max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2
            className="text-[36px] md:text-[42px] lg:text-12 leading-[1.2] md:leading-[100%] font-semibold text-white"
            style={{ fontFamily: "Albert Sans" }}
          >
            Products
          </h2>
          <p
            className="mt-2 md:mt-3 text-[15px] md:text-[18px] lg:text-[20px] leading-[140%] md:leading-[100%] font-normal text-white text-center max-w-[880px] mx-auto px-4"
            style={{ fontFamily: "Albert Sans" }}
          >
            Cutting-edge drone technology designed for surveillance, defense,
            and specialized missions with precision and reliability.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-12 md:space-y-14 lg:space-y-16">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState<"spec" | "app">("spec");

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start mt-8 md:mt-10 lg:mt-12">
      {/* Left: images */}
      <div className="space-y-3 md:space-y-4">
        <div className="rounded-xl md:rounded-2xl overflow-hidden bg-gray-900/40">
          <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96">
            <Image
              src={product.mainImage}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3 w-full">
          {product.thumbs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveThumb(i)}
              className={`rounded-md md:rounded-lg overflow-hidden flex-1 h-20 md:h-28 lg:h-32 border transition-all ${
                activeThumb === i
                  ? "ring-2 ring-emerald-500"
                  : "border-transparent"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={t}
                  alt={`${product.name} ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right: content */}
      <div>
        <h3
          className="text-[20px] md:text-[24px] lg:text-[28px] leading-[1.3] md:leading-[1.2] lg:leading-[100%] font-normal text-white mb-2 md:mb-3"
          style={{ fontFamily: "Albert Sans" }}
        >
          {product.name}
        </h3>
        {product.description && (
          <p
            className="text-[14px] md:text-[15px] lg:text-[16px] leading-normal md:leading-[1.4] lg:leading-[100%] font-normal text-white mb-3 md:mb-4"
            style={{ fontFamily: "Albert Sans" }}
          >
            {product.description}
          </p>
        )}

        {/* Tabs */}
        <div className="flex items-center gap-4 md:gap-6 border-b border-gray-700 mb-4 md:mb-6">
          <button
            onClick={() => setActiveTab("spec")}
            className={`pb-1.5 md:pb-2 text-[14px] md:text-[15px] lg:text-[16px] leading-[100%] font-medium transition ${
              activeTab === "spec"
                ? "text-white border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
            style={{ fontFamily: "Albert Sans" }}
          >
            Specification
          </button>
          <button
            onClick={() => setActiveTab("app")}
            className={`pb-1.5 md:pb-2 text-[14px] md:text-[15px] lg:text-[16px] leading-[100%] font-medium transition ${
              activeTab === "app"
                ? "text-white border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
            style={{ fontFamily: "Albert Sans" }}
          >
            Application
          </button>
        </div>

        {activeTab === "spec" ? (
          <div className="flex flex-col gap-2 md:gap-2.5">
            {product.specs.map((s, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
                <div
                  className="md:w-44 text-[13px] md:text-[14px] lg:text-[16px] leading-[1.3] md:leading-[100%] font-normal text-[#DADADA]"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  {s.label}
                </div>
                <div
                  className="flex-1 text-[13px] md:text-[14px] lg:text-[16px] leading-[1.3] md:leading-[100%] font-medium text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 md:space-y-8">
            {typeof product.application === "string" ? (
              <div className="text-sm text-gray-300">{product.application}</div>
            ) : (
              product.application?.map((app, idx) => (
                <div key={idx} className="space-y-3 md:space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#555555] flex items-center justify-center shrink-0">
                      <Image
                        src={app.icon}
                        alt={app.title}
                        width={20}
                        height={20}
                        className="md:w-[24px] md:h-[24px]"
                      />
                    </div>
                    <h4
                      className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.2] md:leading-[100%] font-normal text-white"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      {app.title}
                    </h4>
                  </div>

                  {/* Description */}
                  {app.description && (
                    <p
                      className="text-[14px] md:text-[15px] lg:text-[16px] leading-normal md:leading-6 font-normal text-white"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      {app.description}
                    </p>
                  )}

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-2 md:gap-y-3">
                    {app.items.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 ${
                          i === app.items.length - 1 && app.items.length % 3 !== 0
                            ? 'md:col-span-2 lg:col-span-3'
                            : ''
                        }`}
                      >
                        <svg
                          className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#EA580C] shrink-0 mt-0.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.485 3.636a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L5.778 10.05l6.293-6.414a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className="text-[13px] md:text-[14px] lg:text-[16px] leading-[1.4] md:leading-[100%] font-normal text-white"
                          style={{ fontFamily: "Albert Sans" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </article>
  );
}
