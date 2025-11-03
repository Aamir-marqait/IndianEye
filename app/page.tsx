import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-74px)] bg-cover -mt-1.5 bg-center bg-no-repeat md:justify-around items-center justify-center gap-8 px-8 bg-[url('/landing/bg.png')]">
      {/* Left Container */}
      <div className="rounded-[40px] flex flex-col justify-center items-start p-8 gap-4 w-full md:w-[532px] h-[287px] bg-black/40 backdrop-blur-[28px]">
        <h2 className="font-(family-name:--font-albert-sans) font-semibold text-[28px] leading-[100%] text-white">
          Reinforcing National Defence with Next-Gen Tech
        </h2>
        <p className="font-(family-name:--font-albert-sans) font-normal text-base leading-[150%] text-[#DADADA]">
          Cutting-edge unmanned aerial tech built for surveillance, security,
          and tactical advantage. Engineered for precision, reliability, and
          mission success.
        </p>
        <button className="cursor-pointer font-(family-name:--font-albert-sans) font-normal text-base leading-[100%] text-white bg-[#259351] px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          Visit Site
        </button>
      </div>

      {/* Right Container */}
      <div className="rounded-[40px]  flex flex-col justify-start items-start p-8 gap-4 w-full md:w-[532px] h-[287px] bg-black/40 backdrop-blur-[28px] relative">
        <h2 className="font-(family-name:--font-albert-sans) font-semibold text-[28px] leading-[100%] text-white">
          State of the art training excellence for nation building
        </h2>
        <p className="font-(family-name:--font-albert-sans) font-normal text-base leading-[150%] text-[#DADADA]">
          Indianeye institute of homeland security
        </p>
        <button className="font-(family-name:--font-albert-sans) font-normal text-base leading-[100%] text-white bg-[#EA580C] cursor-pointer px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          Visit Site
        </button>
        <Image
          src="/landing/1.jpg"
          alt="Training"
          width={180}
          height={180}
          className="rounded-full w-30 h-30 object-cover absolute bottom-4 right-4"
        />
      </div>
    </div>
  );
}
