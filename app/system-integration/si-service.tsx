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
              className="text-[48px] min-w-xl leading-[100%] font-bold  text-white mb-4"
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

        {/* UAV Based Survey for Watershed Management - Text Left, Images Right (2x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          {/* Left: content */}
          <div className="w-full">
            <h2
              className="text-[48px] leading-[100%] font-bold text-white mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              UAV Based Survey for Watershed Management
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
                  Acquisition of Data by UAV of Entire Watershed Area
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
                  3D Digital Elevation Modelling of Watershed Area
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
                  Comparison with Existing Sources of the Government
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
                  Preparation of Watershed Management Report
                </span>
              </li>
            </ul>
          </div>

          {/* Right: single image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden bg-gray-900/20">
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                  src="/drone/a.png"
                  alt="Watershed management"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Anti-Mining: Mapping and Surveillance - Image Right, Text Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          {/* Left: content */}
          <div className="w-full">
            <h2
              className="text-[48px] leading-[100%] font-bold text-white mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              Anti-Mining: Mapping and Surveillance
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
                  Illegal Mining Detection
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
                  Monitoring of Licensed Mining
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
                  Survey of Proposed Locations
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
                  Environmental Impact Assessment
                </span>
              </li>
            </ul>
          </div>

          {/* Right: single large image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden bg-gray-900/20">
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                  src="/drone/b.png"
                  alt="Anti-mining surveillance"
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
