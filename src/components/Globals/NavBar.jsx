import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../assets/logo.svg";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-gradient-to-tl from-[#ffd05a] to-[#ffed84] bg-opacity-30 backdrop-filter backdrop-blur-lg text-slate-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src={Logo} alt="Law Firm Logo" />
            </div>
              <ThemeToggle />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/home"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-950 hover:text-amber-300"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-950 hover:text-amber-300"
                >
                  Practice Areas
                </Link>
                <Link
                  to="/attorneys"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-950 hover:text-amber-300"
                >
                  Attorneys
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-950 hover:text-amber-300"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="flex items-center space-x-4">
                <a
                  href="tel:+5072693555"
                  className="flex items-center text-sm"
                >
                  <FaPhone className="mr-2" />
                  (507) 269-3555
                </a>
                <a
                  href="mailto:mym@mauad.com.pa"
                  className="flex items-center text-sm"
                >
                  <FaEnvelope className="mr-2" />
                  mym@mauad.com.pa
                </a>
              </div>
              <div className="ml-4 flex items-center space-x-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-white"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <button className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-slate-600 text-white hover:bg-slate-950">
                Contact Us
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Practice Areas
            </Link>
            <Link
              to="/attorneys"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Attorneys
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About Us
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            
            <div className="mt-1 px-2 space-y-1">
              <a
                href="tel:+5072693555"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                <FaPhone className="inline mr-2" />
                (507) 269-3555
              </a>
              <a
                href="mailto:mym@mauad.com.pa"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                <FaEnvelope className="inline mr-2" />
                mym@mauad.com.pa
              </a>
              <div className="flex space-x-4 px-3 py-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-slate-600 text-white hover:bg-amber-300">
                Contact Us
              </button>
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
