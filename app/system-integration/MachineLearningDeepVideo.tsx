import Image from "next/image";

export default function MachineLearningDeepVideo() {
  return (
    <section className="w-full bg-black text-white py-12">
      {/* Visible background intentionally kept pure black as requested */}
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        {/* Title */}
        <h2
          className="text-[48px] font-semibold leading-[100%] tracking-[0%] text-center text-white mb-20"
          style={{ fontFamily: "Albert Sans" }}
        >
          Machine Learning & Deep Video Understanding
        </h2>

        {/* Two feature cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-14">
          <div
            className="rounded-[20px] p-6 text-white shadow-md flex flex-col"
            style={{
              width: "100%",
              maxWidth: "444px",
              minHeight: "235px",
              background: "#EA580C",
            }}
          >
            <div className="shrink-0 mb-4">
              <Image
                src="/si/ai.png"
                alt="Machine Learning"
                width={48}
                height={48}
              />
            </div>
            <div className="w-full">
              <h3
                className="text-[20px] font-semibold leading-[100%] tracking-[0%] text-left text-white mb-3"
                style={{ fontFamily: "Albert Sans" }}
              >
                Machine Learning Stack
              </h3>
              <ul className="space-y-1 list-inside">
                <li
                  className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  • Neural Networks
                </li>
                <li
                  className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  • Support Vector Machines (SVM)
                </li>
                <li
                  className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  • Boosting Algorithms
                </li>
                <li
                  className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  • Deep Learning Models
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-[20px] p-6 text-white shadow-md flex flex-col"
            style={{
              width: "100%",
              maxWidth: "444px",
              minHeight: "235px",
              background: "#259351",
            }}
          >
            <div className="shrink-0 mb-4">
              <Image
                src="/si/v.png"
                alt="Deep Video Understanding"
                width={48}
                height={48}
              />
            </div>
            <div className="w-full">
              <h3
                className="text-[20px] font-semibold leading-[100%] tracking-[0%] text-left text-white mb-3"
                style={{ fontFamily: "Albert Sans" }}
              >
                Deep Video Understanding
              </h3>
              <ul className="space-y-1">
                <li
                  className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  • Scene Detection
                </li>
                <li
                  className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  • Event Detection
                </li>
                <li
                  className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  • Action Recognition
                </li>
                <li
                  className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  • Real-time Processing (Standstill, Moving, etc.)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subheading */}
        <h3
          className="text-[48px] font-semibold leading-[100%] tracking-[0%] text-center capitalize text-white mb-6 mt-30"
          style={{ fontFamily: "Albert Sans" }}
        >
          Wild Life surveillance and anti poaching system
        </h3>

        {/* Diagram / architecture image */}
        <div className="flex justify-center mt-20">
          <div className="w-full sm:w-[92%] md:w-[900px] bg-white rounded-lg overflow-hidden shadow-xl">
            <div
              className="relative w-full"
              style={{
                paddingBottom: "62%" /* maintain aspect ratio (approx) */,
              }}
            >
              <Image
                src={"/si/z.png"}
                alt="Wildlife surveillance architecture"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
