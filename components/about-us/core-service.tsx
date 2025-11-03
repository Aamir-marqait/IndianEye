import Image from "next/image";

export default function CoreService() {
  return (
    <section className="relative bg-black">
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 blur-[50px] opacity-100 overflow-hidden">
        <Image
          src="/about/bg-color.png"
          alt="Background"
          width={1920}
          height={1080}
          className="object-cover"
        />
      </div>
      <div className="max-w-[1100px] mx-auto relative z-10 flex gap-6 items-start py-20">
        {/* Left text column */}
        <div className="w-1/2 px-6 md:px-0">
          <h1 className="text-[40px] font-bold leading-none tracking-normal text-white mb-6 max-w-2xl">
            <span className="text-[#EA580C]">Integrity</span> and <span className="text-[#259351]">Vigilance</span> at the core of
            your service
          </h1>

          <div className="max-w-none">
            <p className="text-base font-normal leading-7 tracking-normal text-white mb-3">
              Indianeye Security Pvt. Ltd. (ISL) is an ISO 9001:2015 & ISO/IEC
              27001:2022 certified company. It was setup with the objective of
              assisting the government, companies and individuals to tackle the
              challenges being faced in the current national & global security
              environment and has grown to include smart technology based
              solutions, which are in a position to make the future smart cities
              more viable.
            </p>

            <p className="text-base font-normal leading-7 tracking-normal text-white mb-3">
              Our collaboration with leading global players brings together over
              03 decades of in-depth and vast experiences in the field of
              security across a wide spectrum of activities. Our solutions for
              e-governance, access control, personal safety, monitoring, etc,
              use technologies like face recognition, voice recognition and
              different mobile platform based applications.
            </p>

            <p className="text-base font-normal leading-7 tracking-normal text-white mb-3">
              The company also delivers comprehensive solutions for reducing
              crime in cities combining advanced technology with specialist
              training of security forces, which is internationally certified
              and recognized. ISL also delivers bespoke training to police
              forces, industry and individuals.
            </p>
          </div>
        </div>

        {/* Right image stack column */}
        <div className="w-1/2 flex justify-center md:justify-end px-6 md:px-0">
          <div className="w-full relative h-[600px]">
            <Image
              src="/about/service.png"
              alt="Service"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
