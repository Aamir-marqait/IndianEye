import React from "react";
import Image from "next/image";

type Feature = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "All Camera Types",
    subtitle: "Analog, IP, Dome, PTZ cameras with advanced capabilities",
    icon: (
      <Image src="/si/11.png" alt="All Camera Types" width={38} height={38} />
    ),
  },
  {
    title: "VMS & Analytics",
    subtitle: "Video management and analytics integration",
    icon: (
      <Image src="/si/12.png" alt="VMS & Analytics" width={38} height={38} />
    ),
  },
  {
    title: "Complete Infrastructure",
    subtitle: "Server, Storage, Network Switches, Displays, Software",
    icon: (
      <Image
        src="/si/13.png"
        alt="Complete Infrastructure"
        width={38}
        height={38}
      />
    ),
  },
  {
    title: "ANPR & RLVD",
    subtitle: "Automatic Number Plate & Red Light Violation Detection",
    icon: <Image src="/si/14.png" alt="ANPR & RLVD" width={38} height={38} />,
  },
  {
    title: "Speed Enforcement",
    subtitle: "Automated speed monitoring and violation detection",
    icon: (
      <Image src="/si/15.png" alt="Speed Enforcement" width={38} height={38} />
    ),
  },
  {
    title: "Turnkey Solutions",
    subtitle: "Complete monitoring infrastructure setup",
    icon: (
      <Image src="/si/16.png" alt="Turnkey Solutions" width={38} height={38} />
    ),
  },
];

export default function IntegratedCCTV() {
  return (
    <section className="w-full bg-black text-white py-16">
      {/* Keep visible background strictly black per request.
          The bgImage prop is accepted but not shown (keeps black). A hidden Image is provided below so you can set src="" if desired. */}
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        <div className="text-center mb-10 px-4">
          <h2
            className="text-[48px] font-semibold leading-[100%] tracking-[0%] text-center text-white"
            style={{ fontFamily: "Albert Sans" }}
          >
            Integrated CCTV & Command
            <br />
            Control Systems
          </h2>
        </div>

        <div className="px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden p-6 shadow-lg hover:shadow-2xl transition"
                style={{
                  background:
                    "linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)",
                }}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="shrink-0">{f.icon}</div>

                  <div className="w-full">
                    <h3
                      className="text-[20px] font-semibold leading-[100%] tracking-[0%] text-left text-white"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      {f.title}
                    </h3>
                    {f.subtitle && (
                      <p
                        className="mt-2 text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                        style={{ fontFamily: "Albert Sans" }}
                      >
                        {f.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
