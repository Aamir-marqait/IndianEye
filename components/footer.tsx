import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white pt-16 pb-8"
      style={{
        background:
          "linear-gradient(94.19deg, #000000 0.41%, #111010 48.23%, #000000 99.88%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-8 border-b border-[#353535]">
          {/* Logo + Description + Social */}
          <div className="min-w-[220px] max-w-[320px]">
            <Image
              src="/landing/logo.png"
              alt="Indianeye Logo"
              width={120}
              height={48}
              className="h-12 mb-3"
            />
            <p className="font-inter font-normal text-[15px] leading-[100%] text-white mb-7">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-[#EFEFEF] text-black hover:bg-[#FF801F] rounded-full p-2 transition"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="bg-[#EFEFEF] text-black hover:bg-[#FF801F] rounded-full p-2 transition"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="bg-[#EFEFEF] text-black hover:bg-[#FF801F] rounded-full p-2 transition"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="bg-[#EFEFEF] hover:bg-[#FF801F] rounded-full p-2 transition"
              >
                <Youtube size={18} className="text-black" />
              </Link>
              <Link
                href="#"
                className="bg-[#EFEFEF] text-black hover:bg-[#FF801F] rounded-full p-2 transition"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Services + Quick Links Container */}
          <div className="flex gap-10 md:gap-16">
            {/* Services */}
            <div className="min-w-[180px]">
              <h5 className="font-(family-name:--font-plus-jakarta-sans) font-bold text-[22px] leading-[30px] text-white mb-3">
                Services
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white hover:text-white/80"
                  >
                    Mistakes To Avoid
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white hover:text-white/80"
                  >
                    Your Startup
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white hover:text-white/80"
                  >
                    Knew About Fonts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white hover:text-white/80"
                  >
                    Knew About Fonts
                  </Link>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className="min-w-[180px]">
              <h5 className="font-(family-name:--font-plus-jakarta-sans) font-bold text-[22px] leading-[30px] text-white mb-3">
                Quick Links
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white hover:text-white/80"
                  >
                    Mistakes To Avoid
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white hover:text-white/80"
                  >
                    Your Startup
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white hover:text-white/80"
                  >
                    Knew About Fonts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white hover:text-white/80"
                  >
                    Knew About Fonts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Subscribe */}
        </div>
        {/* Bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-2">
          <div className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white/90">
            © Indianeye 2025 | All Rights Reserved
          </div>
          <div className="flex gap-7">
            <Link
              href="#"
              className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white/90 hover:text-white"
            >
              Terms & Condition
            </Link>
            <Link
              href="#"
              className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white/90 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact-us"
              className="font-(family-name:--font-plus-jakarta-sans) font-normal text-base leading-[30px] text-white/90 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
