import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-w-screen flex-col md:flex-row w-full min-h-[calc(100vh-74px)] bg-cover -mt-1.5 bg-center bg-no-repeat md:justify-around items-center justify-center gap-4 md:gap-8 px-4 md:px-8 py-6 md:py-0 bg-[url('/landing/bg.png')]">
      {/* Left Container */}
      <div className="rounded-[24px] md:rounded-[40px] flex flex-col justify-center items-start p-6 md:p-8 gap-3 md:gap-4 w-full md:w-[532px] min-h-[240px] md:h-[287px] bg-black/40 backdrop-blur-[28px]">
        <h2 className="font-albert-sans font-semibold text-[22px] md:text-[28px] leading-[110%] md:leading-[100%] text-white">
          Reinforcing National Defence with Next-Gen Tech
        </h2>
        <p className="font-albert-sans font-normal text-sm md:text-base leading-[150%] text-[#DADADA]">
          Cutting-edge unmanned aerial tech built for surveillance, security,
          and tactical advantage. Engineered for precision, reliability, and
          mission success.
        </p>
        <Link
          href="/home"
          className="cursor-pointer font-albert-sans font-normal text-sm md:text-base leading-[100%] text-white bg-[#259351] px-5 md:px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Visit Site
        </Link>
      </div>

      {/* Right Container */}
      <div className="rounded-[24px] md:rounded-[40px] flex flex-col justify-start items-start p-6 md:p-8 gap-3 md:gap-4 w-full md:w-[532px] min-h-[240px] md:h-[287px] bg-black/40 backdrop-blur-[28px] relative">
        <h2 className="font-albert-sans font-semibold text-[22px] md:text-[28px] leading-[110%] md:leading-[100%] text-white">
          State of the art training excellence for nation building
        </h2>
        <p className="font-albert-sans font-normal text-sm md:text-base leading-[150%] text-[#DADADA]">
          Indianeye institute of homeland security
        </p>
        <Link
          href="/training-and-skill-development"
          className="font-albert-sans font-normal text-sm md:text-base leading-[100%] text-white bg-[#EA580C] cursor-pointer px-5 md:px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Visit Site
        </Link>
        <Image
          src="/landing/1.jpg"
          alt="Training"
          width={180}
          height={180}
          className="rounded-full w-24 h-24 md:w-30 md:h-30 object-cover absolute bottom-3 right-3 md:bottom-4 md:right-4"
        />
      </div>
    </div>
  );
}
