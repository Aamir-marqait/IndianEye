import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative h-[383px] overflow-hidden rounded-sm shadow-xl bg-[#00000033]">
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
          <div className="relative z-10 px-6 md:px-12 py-16 md:py-6 text-center text-white">
            <div className="mb-3">
              <span className="text-center capitalize text-lg leading-6 font-semibold text-[#EA580C] tracking-[-0.02em]">
                Let&apos;s Connect Today
              </span>
            </div>

            <h2 className="text-center text-[58px] leading-[72px] font-semibold text-white tracking-[-0.0116em] max-w-3xl mx-auto">
              Interested in
              <br />
              Working with Us?
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-center text-xl leading-8 font-normal text-[#D0D0D0] tracking-[-0.02em]">
              Discover why organizations rely on Indianeye Security to protect
              what matters most.
            </p>

            <div className="mt-4 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-[60px] bg-[#EA580C] text-white text-[19px] leading-[100%] font-normal tracking-[0%] hover:opacity-90 transition"
              >
                <span>Learn More</span>
                <svg
                  width="18"
                  height="18"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
