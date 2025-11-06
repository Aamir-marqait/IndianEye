import Image from "next/image";

export default function SmartTower() {
  return (
    <section className="w-full bg-black text-white py-12">
      {/* Keep the visible background strictly black as requested */}
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden bg-gray-900/20 ring-0">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-112">
                <Image
                  src="/si/3.png"
                  alt="Irrigation survey visual"
                  layout="fill"
                  objectFit="contain"
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
              Smart Surveillance Towers
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
                  Live thermal & optical feed
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
                  Real-time geo alerts
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
                  24x7 operation with wireless connectivity
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
                  LED control room display & recording
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
                  Web-based alert dashboards
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
                  Remote control and bookmark surveillance tours
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Integrated Solutions Container */}
        <div className="mt-36 w-full max-w-[1100px] mx-auto">
          <div
            className="rounded-[20px] p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-6 relative"
            style={{
              backgroundImage: "url('/si/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "288px",
            }}
          >
            <h2
              className="text-[32px] md:text-[48px] leading-[100%] font-normal"
              style={{
                fontFamily: "Albert Sans",
                color: "#FFFFFF",
                letterSpacing: "-1%",
              }}
            >
              AI-Powered Command & Control
            </h2>

            {/* Two containers in a row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[950px] mt-6">
              <div
                className="border border-[#FFCEB4] rounded-lg p-6 bg-white"
                style={{
                  width: "100%",
                  maxWidth: "444px",
                  minHeight: "151px",
                }}
              >
                <div className="flex items-start justify-between">
                  <h3
                    className="text-[24px] font-semibold leading-[100%] text-[#EA580C]"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Video Analytics
                  </h3>
                  <div
                    className="border rounded-full border-[#FFCEB4] bg-white flex items-center justify-center"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <Image
                      src="/si/5.png"
                      alt="Video Analytics"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
                <ul className="mt-4 space-y-2 list-disc text-black ml-2">
                  <li
                    className="text-[16px] text-left leading-[140%] font-normal"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Behavior, Pattern Analysis
                  </li>
                  <li
                    className="text-[16px] text-left leading-[140%] font-normal"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Real-time Alarms and Notifications
                  </li>
                  <li
                    className="text-[16px] text-left leading-[140%] font-normal"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Advanced Object Detection
                  </li>
                </ul>
              </div>

              <div
                className="border border-[#FFCEB4] rounded-lg p-6 bg-white"
                style={{
                  width: "100%",
                  maxWidth: "444px",
                  minHeight: "151px",
                }}
              >
                <div className="flex items-start justify-between">
                  <h3
                    className="text-[24px] font-semibold leading-[100%] text-[#0FD75F]"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    VMS Integration
                  </h3>
                  <div
                    className="border rounded-full border-[#FFCEB4] bg-white flex items-center justify-center"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <Image
                      src="/si/6.png"
                      alt="VMS Integration"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-left list-disc text-black ml-2">
                  <li
                    className="text-[16px] leading-[140%] font-normal"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Motion detection & Remote operation
                  </li>
                  <li
                    className="text-[16px] leading-[140%] font-normal"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    License plate recognition
                  </li>
                  <li
                    className="text-[16px] leading-[140%] font-normal"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Cloud & On-premise deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* UAV Based Survey for Watershed Management - Text Left, Images Right (2x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-36">
          {/* Left: content */}
          <div className="w-full">
            <h2
              className="text-[48px] leading-[100%] font-bold text-white mb-4"
              style={{ fontFamily: "Albert Sans" }}
            >
              Facial Recognition for Modern Surveillance
            </h2>

            <div className="space-y-4">
              <p
                className="text-[16px] leading-[150%] font-normal text-white"
                style={{ fontFamily: "Albert Sans" }}
              >
                Ideal for public places, forensic analysis, and access control
                with machine learning-based identity recognition in crowded
                environments.
              </p>

              <p
                className="text-[16px] leading-[150%] font-normal text-white"
                style={{ fontFamily: "Albert Sans" }}
              >
                Advanced AI algorithms ensure accurate identification even in
                challenging conditions with real-time processing capabilities.
              </p>
            </div>
          </div>

          {/* Right: single image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden bg-gray-900/20">
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                  src="/si/4.png"
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
