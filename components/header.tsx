"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full h-20 flex items-center justify-center border-none bg-[#131313] px-4 md:px-6">
      <div className="w-full max-w-[1100px] mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/landing/logo.png"
            alt="Logo"
            width={121}
            height={50}
            className="w-20 h-auto md:w-[121px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          <Link
            href="/home"
            className="relative font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline transition-colors pb-1 group"
          >
            Home
            <span
              className={`absolute bottom-0 top-7 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                isActive("/home")
                  ? "w-1/2"
                  : "w-0 group-hover:w-1/2 group-focus:w-1/2"
              }`}
            ></span>
          </Link>
          <div className="flex items-center gap-1.5 group">
            <Link
              href="/product"
              className="relative font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline transition-colors pb-1"
            >
              Product
              <span
                className={`absolute bottom-0 top-7 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                  isActive("/product")
                    ? "w-1/2"
                    : "w-0 group-hover:w-1/2 group-focus:w-1/2"
                }`}
              ></span>
            </Link>
            <ChevronDown size={20} color="#fff" />
          </div>
          <div className="flex items-center gap-1.5 group">
            <Link
              href="/service"
              className="relative font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline transition-colors pb-1"
            >
              Service
              <span
                className={`absolute bottom-0 top-7 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                  isActive("/service")
                    ? "w-1/2"
                    : "w-0 group-hover:w-1/2 group-focus:w-1/2"
                }`}
              ></span>
            </Link>
            <ChevronDown size={20} color="#fff" />
          </div>
          <Link
            href="/training"
            className="relative font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline transition-colors pb-1 group"
          >
            Training & skill development
            <span
              className={`absolute bottom-0 top-7 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                isActive("/training")
                  ? "w-1/2"
                  : "w-0 group-hover:w-1/2 group-focus:w-1/2"
              }`}
            ></span>
          </Link>
          <Link
            href="/about-us"
            className="relative font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline transition-colors pb-1 group"
          >
            About Us
            <span
              className={`absolute bottom-0 top-7 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                isActive("/about-us")
                  ? "w-1/2"
                  : "w-0 group-hover:w-1/2 group-focus:w-1/2"
              }`}
            ></span>
          </Link>
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact-us"
          className="hidden lg:flex bg-[#EA580C] font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle rounded-4xl px-5 py-2.5 no-underline items-center gap-1.5 hover:bg-[#dc4d07] transition-colors"
        >
          <IoIosCall />
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white p-2  transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#181818] border-t border-gray-700 shadow-lg z-50">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="/home"
              className={`font-(family-name:--font-albert-sans) text-[17px] font-normal py-3 border-b border-gray-700 transition-colors ${
                isActive("/home") ? "text-[#EA580C]" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-3 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <Link
                  href="/product"
                  className={`font-(family-name:--font-albert-sans) text-[17px] font-normal transition-colors ${
                    isActive("/product") ? "text-[#EA580C]" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Product
                </Link>
                <ChevronDown size={20} color="#fff" />
              </div>
            </div>
            <div className="py-3 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <Link
                  href="/service"
                  className={`font-(family-name:--font-albert-sans) text-[17px] font-normal transition-colors ${
                    isActive("/service") ? "text-[#EA580C]" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service
                </Link>
                <ChevronDown size={20} color="#fff" />
              </div>
            </div>
            <Link
              href="/training"
              className={`font-(family-name:--font-albert-sans) text-[17px] font-normal py-3 border-b border-gray-700 transition-colors ${
                isActive("/training") ? "text-[#EA580C]" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Training & skill development
            </Link>
            <Link
              href="/about"
              className={`font-(family-name:--font-albert-sans) text-[17px] font-normal py-3 border-b border-gray-700 transition-colors ${
                isActive("/about") ? "text-[#EA580C]" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="bg-[#EA580C] font-(family-name:--font-albert-sans) text-white text-[17px] font-normal rounded-4xl px-5 py-3 mt-4 flex items-center justify-center gap-2 hover:bg-[#dc4d07] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoIosCall size={20} />
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
