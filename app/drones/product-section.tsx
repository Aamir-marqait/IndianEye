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

export default function ProductsSection({
  bgImage = "",
}: {
  bgImage?: string;
}) {
  return (
    <section className="w-full bg-black text-white py-16">
      {/* keep visible background strictly black per request.
          The bgImage prop is accepted but not rendered as visual background (keeps bg black).
          A hidden Image is included at the bottom so you can set src="" as you requested. */}
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-[48px] leading-[100%] font-semibold text-white"
            style={{ fontFamily: "Albert Sans" }}
          >
            Products
          </h2>
          <p
            className="mt-3 text-[20px] leading-[100%] font-normal text-white text-center max-w-[880px] mx-auto"
            style={{ fontFamily: "Albert Sans" }}
          >
            Cutting-edge drone technology designed for surveillance, defense,
            and specialized missions with precision and reliability.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* hidden image placeholder so you can set the bg image src="" if you want, kept invisible to preserve black bg */}
      <div className="sr-only" aria-hidden>
        <Image src={bgImage || ""} alt="" width={1600} height={800} />
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState<"spec" | "app">("spec");

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-12">
      {/* Left: images */}
      <div className="space-y-4">
        <div className="rounded-2xl overflow-hidden bg-gray-900/40">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
            <Image
              src={product.mainImage}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 w-full">
          {product.thumbs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveThumb(i)}
              className={`rounded-lg overflow-hidden flex-1 h-32 border transition-all ${
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
          className="text-[28px] leading-[100%] font-normal text-white mb-2"
          style={{ fontFamily: "Albert Sans" }}
        >
          {product.name}
        </h3>
        {product.description && (
          <p
            className="text-[16px] leading-[100%] font-normal text-white mb-4"
            style={{ fontFamily: "Albert Sans" }}
          >
            {product.description}
          </p>
        )}

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab("spec")}
            className={`pb-2 text-[16px] leading-[100%] font-medium transition ${
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
            className={`pb-2 text-[16px] leading-[100%] font-medium transition ${
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
          <div className="flex flex-col gap-2">
            {product.specs.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div
                  className="w-44 text-[16px] leading-[100%] font-normal text-[#DADADA]"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  {s.label}
                </div>
                <div
                  className="flex-1 text-[16px] leading-[100%] font-medium text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {typeof product.application === "string" ? (
              <div className="text-sm text-gray-300">{product.application}</div>
            ) : (
              product.application?.map((app, idx) => (
                <div key={idx} className="space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-[48px] h-[48px] rounded-full border border-[#555555] flex items-center justify-center shrink-0">
                      <Image
                        src={app.icon}
                        alt={app.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <h4
                      className="text-[20px] leading-[100%] font-normal text-white text-center"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      {app.title}
                    </h4>
                  </div>

                  {/* Description */}
                  {app.description && (
                    <p
                      className="text-[16px] leading-6 font-normal text-white"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      {app.description}
                    </p>
                  )}

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                    {app.items.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 ${
                          i === app.items.length - 1 && app.items.length % 3 !== 0
                            ? 'md:col-span-2 lg:col-span-3'
                            : ''
                        }`}
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#EA580C] shrink-0"
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
                          className="text-[16px] leading-[100%] font-normal text-white whitespace-nowrap"
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
