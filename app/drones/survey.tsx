import Image from "next/image";

export default function Survey() {
  return (
    <section className="w-full bg-black text-white py-8 md:py-10 lg:py-12">
      {/* Keep the visible background strictly black as requested */}
      <div className="mx-auto px-4 md:px-6 w-full max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left: image */}
          <div className="w-full">
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-gray-900/20 ring-0">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                <Image
                  src="/drone/is.png"
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
              className="text-[28px] md:text-[38px] lg:text-[48px] leading-[1.2] md:leading-[1.1] lg:leading-[100%] font-bold text-white mb-3 md:mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              Irrigation Survey
            </h2>

            <h3
              className="text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] md:leading-[110%] lg:leading-[100%] font-medium text-white mb-3 md:mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              Scope of Operations
            </h3>

            <ul className="space-y-2 md:space-y-3 list-none">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Generating the Orthographic map and defining area under the
                  irrigation department.
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Identification of Irrigation Infrastructure
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Digitization of Water Project/ Dam, River and Canals
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Identifying the Crop type and the area of cultivation
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Exact area of cultivation
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Identifying the water source
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* UAV Based Survey for Watershed Management - Text Left, Images Right (2x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mt-10 md:mt-12 lg:mt-16">
          {/* Left: content */}
          <div className="w-full">
            <h2
              className="text-[28px] md:text-[38px] lg:text-[48px] leading-[1.2] md:leading-[1.1] lg:leading-[100%] font-bold text-white mb-3 md:mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              UAV Based Survey for Watershed Management
            </h2>

            <ul className="space-y-2 md:space-y-3 list-none">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Acquisition of Data by UAV of Entire Watershed Area
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  3D Digital Elevation Modelling of Watershed Area
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Comparison with Existing Sources of the Government
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Preparation of Watershed Management Report
                </span>
              </li>
            </ul>
          </div>

          {/* Right: single image */}
          <div className="w-full">
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-gray-900/20">
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mt-10 md:mt-12 lg:mt-16">
          {/* Left: content */}
          <div className="w-full">
            <h2
              className="text-[28px] md:text-[38px] lg:text-[48px] leading-[1.2] md:leading-[1.1] lg:leading-[100%] font-bold text-white mb-3 md:mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              Anti-Mining: Mapping and Surveillance
            </h2>

            <ul className="space-y-2 md:space-y-3 list-none">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Illegal Mining Detection
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Monitoring of Licensed Mining
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Survey of Proposed Locations
                </span>
              </li>

              <li className="flex items-start gap-2 md:gap-3">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span
                  className="text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] md:leading-[120%] lg:leading-[100%] font-normal text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Environmental Impact Assessment
                </span>
              </li>
            </ul>
          </div>

          {/* Right: single large image */}
          <div className="w-full">
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-gray-900/20">
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
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
