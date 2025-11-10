import React from "react";
import Image from "next/image";

type Training = {
  title: string;
  description: string;
  image: string; // pass path like "/images/train1.jpg"
};

const TRAININGS: Training[] = [
  {
    title: "GHRDC",
    description:
      "Unarmed Security Training for Goa Human Resources Development Corporation (GHRDC) - 1069 students",
    image: "/tsd/pt1.png",
  },
  {
    title: "Maharashtra Security force (MSF)",
    description:
      "Unarmed Security Training for Maharashtra Security force (MSF) - 1065 Students",
    image: "/tsd/pt2.png",
  },
  {
    title: "Uniform Services",
    description:
      "The Power uniform service training for SWD, MWD, SC & ST candidates – 1500 students trained.",
    image: "/tsd/pt3.png",
  },
  {
    title: "Self Defense",
    description:
      "Self Defence program for School candidates - New Delhi – 6000 students trained",
    image: "/tsd/pt4.png",
  },
];

export default function PastTrainings() {
  return (
    <section className="w-full bg-black text-white py-8 md:py-12 lg:py-16">
      <div className="mx-auto px-4 md:px-6 w-full max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.3] md:leading-tight lg:leading-[70px] font-semibold text-white text-center capitalize px-4"
            style={{ fontFamily: "Albert Sans" }}
          >
            Past Training&apos;s
          </h2>
          <p
            className="mt-2 md:mt-3 text-[14px] md:text-[15px] lg:text-[16px] leading-[150%] md:leading-relaxed lg:leading-[23px] font-normal text-white text-center px-4"
            style={{ fontFamily: "Poppins" }}
          >
            Few of our completed training courses
          </p>
        </div>

        {/* Grid of cards: 1 column on mobile, 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {TRAININGS.map((t) => (
            <article
              key={t.title}
              className="w-full max-w-[537px] mx-auto h-auto md:min-h-[280px] lg:h-[314px] rounded-[16px] md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-[15px] gap-3 md:gap-4 lg:gap-5 flex flex-col sm:flex-row items-stretch hover:shadow-2xl transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(to right, #171717, #323335, rgba(90, 90, 90, 0.5), #171717)",
                backdropFilter: "blur(50px)",
              }}
            >
              {/* Image */}
              <div className="relative w-full sm:w-1/2 h-[180px] sm:h-[200px] md:h-full rounded-[12px] md:rounded-lg lg:rounded-xl overflow-hidden bg-gray-700 shrink-0">
                <Image
                  src={t.image}
                  alt={t.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>

              {/* Text */}
              <div className="w-full sm:w-1/2 flex flex-col justify-center gap-2 md:gap-2.5 lg:gap-3 py-2 sm:py-0 px-2 sm:px-0">
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3] md:leading-7 lg:leading-8 font-normal text-white"
                  style={{ fontFamily: "Roboto" }}
                >
                  {t.title}
                </h3>
                <p
                  className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-normal  md:leading-relaxed lg:leading-[23px] font-normal text-white/90"
                  style={{ fontFamily: "Poppins" }}
                >
                  {t.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
