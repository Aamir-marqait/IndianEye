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
    <section className="w-full bg-black text-white py-16">
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-[48px] leading-[70px] font-semibold text-white text-center capitalize"
            style={{ fontFamily: "Albert Sans" }}
          >
            Past Training&apos;s
          </h2>
          <p
            className="mt-3 text-[16px] leading-[23px] font-normal text-white text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Few of our completed training courses
          </p>
        </div>

        {/* Grid of cards: 1 column on small, 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          {TRAININGS.map((t) => (
            <article
              key={t.title}
              className="w-[537px] h-[314px] rounded-2xl p-[15px] gap-5 flex items-stretch hover:shadow-2xl transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(to right, #171717, #323335, rgba(90, 90, 90, 0.5), #171717)",
                backdropFilter: "blur(50px)",
              }}
            >
              {/* Image */}
              <div className="relative w-1/2 h-full rounded-xl overflow-hidden bg-gray-700">
                <Image
                  src={t.image}
                  alt={t.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>

              {/* Text */}
              <div className="w-1/2 flex flex-col justify-center gap-3">
                <h3
                  className="text-[24px] leading-8 font-normal text-white"
                  style={{ fontFamily: "Roboto" }}
                >
                  {t.title}
                </h3>
                <p
                  className="text-[16px] leading-[23px] font-normal text-white"
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
