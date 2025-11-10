import React from "react";
import Image from "next/image";

const locations = [
  {
    city: "Belgundi, Belgaum",
    info: (
      <>
        SY. No. 301, Village Belgundi,
        <br />
        Tal & Dist. Belgaum
        <br />
        Karnataka-591108 Tel:
        <br />
        0831-2555 525
      </>
    ),
  },
  {
    city: "Mumbai",
    info: (
      <>
        301,Mahalaxmi Industrial Estate Gandhi Nagar, Lower Parel (West) Mumbai,
        <br />
        Maharashtra - 400013 Tel:
        <br />
        022-6141 3444
      </>
    ),
  },
  {
    city: "Bangaluru",
    info: (
      <>
        503, 15th Main, 7th Cross, 3rd Block Koramangala Extension, Bangalore,
        <br />
        Karnataka - 560034 Tel:
        <br />
        080-4907 7600
      </>
    ),
  },
  {
    city: "Aizawl",
    info: (
      <>
        4th Floor, Aijal Club, Near Tennis Court, Khatla, Aizawl, Mizoram -
        796001 Phone :<br />
        0389-2300 712
      </>
    ),
  },
];

const OtherLocations = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-10 md:py-12 bg-black"
      style={{
        background:
          "radial-gradient(circle 600px at center, rgba(37, 147, 81, 0.25) 0%, rgba(0, 0, 0, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1300px] px-4 md:px-6 lg:px-8 py-3 md:py-5 mx-auto">
        <h2 className="font-albert-sans font-bold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.2] md:leading-[1.1] lg:leading-[100%] text-center text-white mb-3 md:mb-4">
          Other Locations
        </h2>
        {/* Underline */}
        <div className="flex justify-center mb-8 md:mb-10 lg:mb-14">
          <Image
            src="/line.png"
            alt="Underline"
            width={160}
            height={14}
            className="object-contain md:w-[190px] md:h-[16px] lg:w-[220px] lg:h-[18px]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-8 md:gap-y-9 lg:gap-y-10 mb-6 md:mb-8 lg:mb-10">
          {locations.map((loc, i) => (
            <div key={i} className="flex flex-col">
              <div className="font-roboto font-bold max-w-full text-[22px] md:text-[24px] lg:text-[28px] leading-[1.2] md:leading-[1.1] lg:leading-[100%] text-white mb-3 md:mb-3.5 lg:mb-4">
                {loc.city}
              </div>
              <div className="font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] md:leading-[1.3] lg:leading-[100%] text-white/80">
                {loc.info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherLocations;
