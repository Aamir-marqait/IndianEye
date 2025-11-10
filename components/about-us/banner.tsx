import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-black">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="relative min-h-[320px] md:h-[360px] lg:h-[383px] overflow-hidden rounded-sm shadow-xl bg-[#00000033]">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about/cta.png"
              alt="CTA background"
              fill
              className="object-cover object-[50%_35%]"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />

          </div>

          {/* Content */}
          <div className="relative z-10 px-4 md:px-8 lg:px-12 py-12 md:py-10 lg:py-6 text-center text-white flex flex-col justify-center h-full">
            <div className="mb-2 md:mb-3">
              <span className="text-center capitalize text-[14px] md:text-[16px] lg:text-lg leading-6 font-semibold text-[#EA580C] tracking-[-0.02em]">
                Let&apos;s Connect Today
              </span>
            </div>

            <h2 className="text-center text-[28px] md:text-[42px] lg:text-[58px] leading-[1.3] md:leading-[1.4] lg:leading-[72px] font-semibold text-white tracking-[-0.0116em] max-w-3xl mx-auto">
              Interested in
              <br />
              Working with Us?
            </h2>

            <p className="mt-3 md:mt-4 lg:mt-6 max-w-2xl mx-auto text-center text-[14px] md:text-[16px] lg:text-xl leading-[1.6] md:leading-[1.75] lg:leading-8 font-normal text-[#D0D0D0] tracking-[-0.02em] px-4">
              Discover why organizations rely on Indianeye Security to protect
              what matters most.
            </p>

            <div className="mt-4 md:mt-5 lg:mt-4 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-[60px] bg-[#EA580C] text-white text-[16px] md:text-[17px] lg:text-[19px] leading-[100%] font-normal tracking-[0%] hover:opacity-90 transition"
              >
                <span>Learn More</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="md:w-[18px] md:h-[18px]"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
