export default function CTA() {
  return (
    <section className="w-full bg-transparent relative">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("/home/cta.png")`,
        }}
      />

      <div className="mx-auto px-6 w-full max-w-[1100px]">
        <div className="py-12 md:py-15  flex flex-col items-center text-center">
          <p className="font-albert-sans text-[20px] font-semibold leading-6 tracking-normal text-[#EA580C] mb-4">
            Let&apos;s Connect Today
          </p>

          <h2 className="font-albert-sans text-[58px] font-semibold leading-[72px] tracking-[-0.0116em] text-center text-white max-w-3xl">
            Interested in
            <br />
            Working with Us?
          </h2>

          <p className="mt-4 font-albert-sans text-[20px] font-normal leading-8 tracking-[-0.02em] text-center text-[#D0D0D0] max-w-2xl">
            Discover why organizations rely on Indianeye Security to protect
            what matters most.
          </p>

          <div className="mt-6">
            <button className="cursor-pointer inline-flex items-center gap-3 bg-[#EA580C] hover:bg-orange-600 text-white font-albert-sans text-[19px] font-normal leading-none tracking-normal px-8 py-4 rounded-[60px] shadow-md transition">
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
