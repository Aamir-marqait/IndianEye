import Image from "next/image";

export default function SIService() {
  return (
    <section className="w-full bg-black text-white py-12">
      {/* Keep the visible background strictly black as requested */}
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden bg-gray-900/20 ring-0">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                <Image
                  src="/si/1.png"
                  alt="Irrigation survey visual"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="w-full">
            <h2
              className="text-[48px] md:min-w-xl leading-[100%] font-bold  text-white mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              Our System Integration Capabilities
            </h2>

            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Smart City ICT Solutions
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Advanced Surveillance Technologies
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Command & Control Systems
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Containerized Data Centers / Classrooms
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Global Tech Partnerships
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Integrated Solutions Container */}
        <div className="mt-16 w-full max-w-[1100px] mx-auto">
          <div
            className="rounded-[20px] p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-6"
            style={{
              background:
                "linear-gradient(93.6deg, #EA580C 0.62%, #FFFFFF 51.09%, #0FD75F 97.86%)",
              minHeight: "288px",
            }}
          >
            <h2
              className="text-[32px] md:text-[48px] leading-[100%] font-normal"
              style={{
                fontFamily: "Albert Sans",
                color: "#121212",
                letterSpacing: "-1%",
              }}
            >
              Integrated Solutions
            </h2>

            <p
              className="text-[14px] md:text-[16px] leading-[100%] font-normal max-w-[800px]"
              style={{
                fontFamily: "Albert Sans",
                color: "#121212",
                letterSpacing: "-1%",
              }}
            >
              Our comprehensive smart city platform integrates multiple systems
              for seamless urban management and enhanced citizen services.
            </p>

            <button
              className="rounded-[60px] border border-[#EA580C] bg-transparent px-8 py-2 cursor-pointer transition-all items-center hover:bg-[#EA580C]/10"
              style={{
                width: "auto",
                minWidth: "162px",
                height: "52px",
              }}
            >
              <span
                className="text-[19px] leading-[100%] font-normal"
                style={{
                  fontFamily: "Albert Sans",
                  color: "#EA580C",
                  letterSpacing: "0%",
                }}
              >
                Learn more
              </span>
            </button>
          </div>
        </div>

        {/* UAV Based Survey for Watershed Management - Text Left, Images Right (2x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          {/* Left: content */}
          <div className="w-full">
            <h2
              className="text-[48px] leading-[100%] font-bold text-white mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              Surveillance & Smart City Offerings
            </h2>

            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  City-wide surveillance and analytics
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Drone & Drone Services
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  CCTV & ANPR/RLVD Systems
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Smart Poles and Smart Lighting
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Smart Parking and Traffic Management
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Central Command & Control Rooms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/si/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                <span
                  className="text-[16px] leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Smart Governance and Citizen Services
                </span>
              </li>
            </ul>
          </div>

          {/* Right: single image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden bg-gray-900/20">
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                  src="/si/2.png"
                  alt="Watershed management"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
