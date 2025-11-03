import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/hero.png"
          alt="Hero background"
          fill
          style={{ objectFit: "cover", objectPosition: "50% 30%" }}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-16 relative">
        {/* Heading area */}
        <div className="text-center">
          <h1 className="text-[48px] font-semibold text-white leading-[100%] font-albert-sans">
            Secure Solutions for a Safe Nation
          </h1>
          <p className="mt-4 text-[16px] font-normal text-white/90 max-w-2xl mx-auto leading-[100%] font-albert-sans">
            Products & services for smart security, training & technology
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white px-5 py-3 rounded-full shadow-md transition text-[19px] font-normal leading-[100%] font-albert-sans"
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
