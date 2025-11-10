import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden md:object-cover ">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/hero.png"
          alt="Hero background"
          fill
          style={{ objectPosition: "50% 30%" }}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 relative">
        {/* Heading area */}
        <div className="text-center">
          <h1 className="text-[28px] md:text-[48px] font-semibold text-white leading-[110%] md:leading-[100%] font-albert-sans">
            Secure Solutions for a Safe Nation
          </h1>
          <p className="mt-3 md:mt-4 text-[14px] md:text-[16px] font-normal text-white/90 max-w-2xl mx-auto leading-[140%] md:leading-[100%] font-albert-sans">
            Products & services for smart security, training & technology
          </p>

          <div className="mt-6 md:mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 md:gap-3 text-white px-4 md:px-5 py-2.5 md:py-3 rounded-full shadow-md transition text-[16px] md:text-[19px] font-normal leading-[100%] font-albert-sans"
              style={{ backgroundColor: '#EA580C' }}
            >
              <span>Get Involved</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
