import Image from "next/image";

export default function MilestonesThatMatter() {
  return (
    <section className="w-full bg-black py-10 md:py-16">
      <div className="mx-auto px-4 md:px-6 w-full max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <p className="font-albert-sans text-[16px] md:text-[20px] font-semibold leading-6 tracking-normal text-[#EA580C] mb-3 md:mb-4">
            Achievements
          </p>
          <h2 className="mt-3 md:mt-4 font-albert-sans text-[28px] md:text-[48px] font-semibold leading-[110%] md:leading-none tracking-normal text-white">
            Milestones That Matter
          </h2>
          <p className="mt-2 md:mt-3 font-albert-sans text-[14px] md:text-base font-normal leading-[140%] md:leading-none tracking-normal text-center text-white max-w-[780px] mx-auto px-4">
            Track our journey of excellence through years of dedicated service,
            successful operations, and the trust of countless satisfied clients.
          </p>
        </div>

        <div className="relative w-full flex justify-center mt-8 md:mt-30 items-start">
          <div className="relative w-full md:w-[880px] lg:w-[980px]">
            <div className="relative rounded-xl overflow-hidden">
              <div className="w-full h-[500px] sm:h-[600px] md:h-[780px] lg:h-[820px] relative">
                <Image
                  src={"/home/2.png"}
                  alt="Timeline background"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="opacity-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
