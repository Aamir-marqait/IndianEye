import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white pt-12 md:pt-16 pb-6 md:pb-8"
      style={{
        background:
          "linear-gradient(94.19deg, #000000 0.41%, #111010 48.23%, #000000 99.88%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 pb-6 md:pb-8 border-b border-[#353535]">
          {/* Logo + Description + Social */}
          <div className="w-full md:min-w-[220px] md:max-w-[320px]">
            <Image
              src="/landing/logo.png"
              alt="Indianeye Logo"
              width={120}
              height={48}
              className="h-10 md:h-12 mb-3 md:mb-4"
            />
            <p className="font-inter font-normal text-sm md:text-[15px] leading-relaxed md:leading-[100%] text-white mb-5 md:mb-7 max-w-[280px] md:max-w-none">
              Indianeye delivers advanced drone platforms, counter‑drone solutions, and
              system integration services—backed by technology transfer and industry‑ready training.
            </p>
            {/* <div className="flex gap-3 md:gap-4">
              <Link
                href="#"
                className="bg-[#EFEFEF] text-black hover:bg-[#FF801F] rounded-full p-2 transition"
                aria-label="Facebook"
              >
                <Facebook size={16} className="md:w-[18px] md:h-[18px]" />
              </Link>
              <Link
                href="#"
                className="bg-[#EFEFEF] text-black hover:bg-[#FF801F] rounded-full p-2 transition"
                aria-label="Twitter"
              >
                <Twitter size={16} className="md:w-[18px] md:h-[18px]" />
              </Link>
              <Link
                href="#"
                className="bg-[#EFEFEF] text-black hover:bg-[#FF801F] rounded-full p-2 transition"
                aria-label="Instagram"
              >
                <Instagram size={16} className="md:w-[18px] md:h-[18px]" />
              </Link>
              <Link
                href="#"
                className="bg-[#EFEFEF] hover:bg-[#FF801F] rounded-full p-2 transition"
                aria-label="YouTube"
              >
                <Youtube size={16} className="text-black md:w-[18px] md:h-[18px]" />
              </Link>
              <Link
                href="#"
                className="bg-[#EFEFEF] text-black hover:bg-[#FF801F] rounded-full p-2 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </Link>
            </div> */}
          </div>

          {/* Products & Services + Quick Links Container */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-16">
            {/* Products & Services */}
            <div className="flex-1 sm:min-w-40 md:min-w-[220px]">
              <h5 className="font-(family-name:--font-plus-jakarta-sans) font-bold text-lg md:text-[22px] leading-7 md:leading-[30px] text-white mb-2 md:mb-3 whitespace-nowrap">
                Products & Services
              </h5>
              <ul className="space-y-1.5 md:space-y-2">
                <li>
                  <Link
                    href="/drones"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white hover:text-white/80"
                  >
                    Drone
                  </Link>
                </li>
                <li>
                  <Link
                    href="/counter-drone-solution"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white hover:text-white/80"
                  >
                    Counter Drone Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/system-integration"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white hover:text-white/80"
                  >
                    System Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/transfer-of-technology"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white hover:text-white/80"
                  >
                    Transfer of Technology
                  </Link>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className="flex-1 sm:min-w-40 md:min-w-[200px]">
              <h5 className="font-(family-name:--font-plus-jakarta-sans) font-bold text-lg md:text-[22px] leading-7 md:leading-[30px] text-white mb-2 md:mb-3">
                Quick Links
              </h5>
              <ul className="space-y-1.5 md:space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white hover:text-white/80"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white hover:text-white/80"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/training-and-skill-development#achievements"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white hover:text-white/80"
                  >
                    Our Achievements
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Subscribe */}
        </div>
        {/* Bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-5 gap-3 md:gap-2">
          <div className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white/90 text-center md:text-left">
            © Indianeye 2025 | All Rights Reserved
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-7 text-center sm:text-left">
            <Link
              href="#"
              className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white/90 hover:text-white"
            >
              Terms & Condition
            </Link>
            <Link
              href="#"
              className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white/90 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact-us"
              className="font-(family-name:--font-plus-jakarta-sans) font-normal text-sm md:text-base leading-[26px] md:leading-[30px] text-white/90 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
