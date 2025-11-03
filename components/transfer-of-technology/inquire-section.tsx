import Image from "next/image";

export default function InquireSection() {
  return (
    <section className="w-full bg-black text-white py-12 md:py-16 lg:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative artwork - ellipse background with drone overlay */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none">
        {/* Green ellipse background */}
        <Image
          src="/transfer-of-tech/left.png"
          alt="green-ellipse-background"
          width={700}
          height={100}
          className="absolute -mt-44 top-0 left-0 object-contain brightness-200 opacity-100 hidden sm:block"
        />
        {/* Drone image overlay */}
        <Image
          src="/transfer-of-tech/1.png"
          alt="drone"
          width={200}
          height={400}
          className="absolute top-0 left-0 object-contain opacity-100 hidden sm:block"
        />
      </div>

      {/* Right side ellipse decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
        <Image
          src="/transfer-of-tech/ellipse.png"
          alt="ellipse-decoration"
          width={700}
          height={100}
          className="absolute -mt-44 top-0 right-0 object-contain opacity-100"
        />
        {/* Vector image overlay */}
        <Image
          src="/transfer-of-tech/Vector.png"
          alt="vector"
          width={200}
          height={400}
          className="absolute -top-80 -right-25 object-contain opacity-60 hidden sm:block"
        />
      </div>

      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-start relative z-10">
        {/* Left column - Intro + decorative artwork */}
        <div className="w-full lg:w-auto flex flex-col gap-4 md:gap-6 sm:ml-0 lg:ml-5">
          <div className="flex flex-col gap-1">
            <Image
              src="/transfer-of-tech/Icon.png"
              alt="icon"
              width={50}
              height={50}
              className="object-contain w-10 h-10 md:w-12 md:h-12"
            />
            <h2 className="font-albert-sans font-semibold text-[28px] md:text-[36px] lg:text-[40px] leading-[150%] tracking-[0%] text-white">
              Inquire Now
            </h2>
          </div>

          <p className="font-albert-sans font-normal text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] tracking-[0%] text-white max-w-md">
            Have questions about our technology transfer services? Get in touch
            with our team to learn how we can help transform your innovations
            into market-ready solutions.
          </p>
        </div>

        {/* Right column - Form card */}
        <div className="w-full lg:flex-1">
          <div className="w-full max-w-[580px] opacity-100 border border-[#555555] rounded-[12px] p-4 md:p-6 lg:p-8 shadow-lg mx-auto lg:mx-0">
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-urbanist font-semibold text-[15px] md:text-[17px] leading-[150%] tracking-[0%] text-white block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full font-urbanist font-medium leading-5 tracking-[0%] bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-4 md:py-5 text-[14px] md:text-[16px] text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>
                <div>
                  <label className="font-urbanist font-semibold text-[15px] md:text-[17px] leading-[150%] tracking-[0%] text-white block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full font-urbanist font-medium leading-5 tracking-[0%] bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-4 md:py-5 text-[14px] md:text-[16px] text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-urbanist font-semibold text-[15px] md:text-[17px] leading-[150%] tracking-[0%] text-white block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full font-urbanist font-medium leading-5 tracking-[0%] bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-4 md:py-5 text-[14px] md:text-[16px] text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>
                <div>
                  <label className="font-urbanist font-semibold text-[15px] md:text-[17px] leading-[150%] tracking-[0%] text-white block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full font-urbanist font-medium leading-5 tracking-[0%] bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-4 md:py-5 text-[14px] md:text-[16px] text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="font-urbanist font-semibold text-[15px] md:text-[17px] leading-[150%] tracking-[0%] text-white block mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Enter your Message here.."
                  rows={5}
                  className="w-full font-urbanist font-medium leading-5 tracking-[0%] bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-4 md:py-5 text-[14px] md:text-[16px] text-white placeholder:text-white/40 outline-none resize-vertical focus:ring-2 focus:ring-orange-500/30 md:rows-6"
                />
              </div>

              <div className="flex items-start md:items-center gap-3">
                <input
                  id="agree"
                  type="checkbox"
                  className="w-5 h-5 mt-1 md:mt-0 shrink-0 rounded-sm bg-white/5 border-white/10 text-orange-500 accent-orange-500"
                />
                <label
                  htmlFor="agree"
                  className="font-albert-sans font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] tracking-[0%] text-white"
                >
                  I agree with{" "}
                  <a
                    href="#"
                    className="font-albert-sans font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] tracking-[0%] underline decoration-solid decoration-auto text-white"
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-albert-sans font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] tracking-[0%] underline decoration-solid decoration-auto text-white"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex cursor-pointer items-center justify-center gap-3 bg-[#EA580C] hover:bg-[#EA580C]/90 font-albert-sans font-medium text-[16px] md:text-[18px] leading-6 tracking-[0%] text-white rounded-full px-6 md:px-8 py-3 shadow-sm transition"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>

          {/* thin rounded outline matching reference (outer border) */}
          <div className="mt-4 pointer-events-none rounded-xl border border-white/6 w-full h-0" />
        </div>
      </div>
    </section>
  );
}
