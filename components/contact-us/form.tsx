import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Form = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-12 lg:gap-20">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <h1 className="font-albert-sans font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] md:leading-[1.1] lg:leading-[100%] text-white mb-4 md:mb-5 lg:mb-6">
            Contact Us
          </h1>
          <p className="font-albert-sans font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[150%] text-white mb-6 md:mb-7 lg:mb-8">
            Get in touch with our team. We&apos;re here to help you build your
            gaming empire and answer any questions you may have.
          </p>
          <div className="flex items-center mb-2 md:mb-3 gap-2 md:gap-3">
            <Mail size={16} className="text-white md:w-[18px] md:h-[18px]" />
            <span className="font-inter font-normal text-[14px] md:text-[15px] lg:text-base leading-6 text-white">
              info@indianeyesecurity.com
            </span>
          </div>
          <div className="flex items-center mb-5 md:mb-6 gap-2 md:gap-3">
            <Phone size={16} className="text-white md:w-[18px] md:h-[18px]" />
            <span className="font-inter font-normal text-[14px] md:text-[15px] lg:text-base leading-6 text-white">
              0120-4655300, 011-49556600
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mt-2 md:mt-3 lg:mt-4">
            <div>
              <div className="font-sora font-semibold text-[18px] md:text-[19px] lg:text-[20px] leading-6 text-[#EA580C] mb-2">
                Registered Office
              </div>
              <div className="flex items-start gap-2">
                <MapPin
                  size={40}
                  className="text-white -mt-3 hidden lg:block"
                />
                <span className="font-inter font-normal text-[14px] md:text-[15px] lg:text-base leading-normal md:leading-6 text-white">
                  2, Panchsheel Community Center, New Delhi- 110017, India
                </span>
              </div>
            </div>
            <div>
              <div className="font-sora font-semibold text-[18px] md:text-[19px] lg:text-[20px] leading-6 text-[#EA580C] mb-2">
                Corporate Office
              </div>
              <div className="flex items-start gap-2">
                <MapPin
                  size={40}
                  className="text-white -mt-3 hidden lg:block"
                />
                <span className="font-inter font-normal text-[14px] md:text-[15px] lg:text-base leading-normal md:leading-6 text-white">
                  1706/17th Floor, Logix City Center, Plot.no- BW-58, Noida
                  Uttar Pradesh- 201301, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="lg:w-1/2 w-full rounded-2xl md:rounded-3xl lg:rounded-4xl py-4 md:py-5 lg:py-2 px-5 md:px-6 lg:px-7 flex flex-col gap-1 border border-[#FFFFFF26]"
          style={{
            background:
              "linear-gradient(180deg, rgba(46, 51, 90, 0) 0%, rgba(28, 27, 51, 0.1) 100%), radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 99.59%)",
            boxShadow:
              "0px 0px 100px 0px #CCD7FF26 inset, 0px 30px 60px 0px #0000001A, 0px 15px 30px 0px #0000000D, 0px 5px 10px 0px #0000000D",
            backdropFilter: "blur(20px)",
          }}
        >
          <h2 className="font-albert-sans font-bold text-[24px] md:text-[26px] lg:text-[30px] leading-[1.4] md:leading-normal lg:leading-[60px] text-white">
            Get In Touch :
          </h2>
          <form className="flex flex-col gap-1.5 md:gap-2">
            <label className="font-inter font-semibold text-[13px] md:text-[14px] leading-5 text-white mb-0.5 md:mb-1 mt-1.5 md:mt-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full h-[40px] md:h-[42px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-[14px] md:text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out mb-1.5 md:mb-2"
            />
            <label className="font-inter font-semibold text-[13px] md:text-[14px] leading-5 text-white mb-0.5 md:mb-1 mt-1.5 md:mt-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full h-[40px] md:h-[42px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-[14px] md:text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out mb-1.5 md:mb-2"
            />
            <label className="font-inter font-semibold text-[13px] md:text-[14px] leading-5 text-white mb-0.5 md:mb-1 mt-1.5 md:mt-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full h-[40px] md:h-[42px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-[14px] md:text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out mb-1.5 md:mb-2"
            />
            <label className="font-inter font-semibold text-[13px] md:text-[14px] leading-5 text-white mb-0.5 md:mb-1 mt-1.5 md:mt-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full h-[40px] md:h-[42px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-[14px] md:text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out mb-1.5 md:mb-2"
            />
            <label className="font-inter font-semibold text-[13px] md:text-[14px] leading-5 text-white mb-0.5 md:mb-1 mt-1.5 md:mt-2">
              Leave us a message
            </label>
            <textarea
              placeholder="Enter your message"
              className="w-full h-[90px] md:h-[105px] rounded-md py-[9px] px-[13px] border border-[#FFFFFF26] font-inter font-normal text-[14px] md:text-base leading-6 text-white outline-none placeholder:text-[#cccccc] backdrop-blur-[14px] transition-all duration-300 ease-out resize-none mb-1.5 md:mb-2"
            />
            <div className="flex items-start my-0.5 md:my-1">
              <input
                type="checkbox"
                id="consent"
                className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 accent-[#FF801F] mt-0.5"
              />
              <label
                htmlFor="consent"
                className="font-sora font-normal text-[12px] md:text-[13px] lg:text-[14px] leading-[1.4] md:leading-5 text-white"
              >
                By submitting this form, you are giving consent to Indianeye to
                store your submitted information.
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#EA580C] mb-2 md:mb-3 cursor-pointer text-white rounded-full py-2 md:py-2.5 px-8 md:px-10 font-albert-sans font-semibold text-[16px] md:text-[17px] lg:text-[19px] leading-[100%] flex items-center justify-center gap-2 mt-1.5 md:mt-2 hover:opacity-90 transition-all duration-300 ease-out mx-auto w-fit"
            >
              Submit Now <ArrowRight size={18} className="md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
