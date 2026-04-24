import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaArrowUp,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo/pp-logo.png";

const Footer = () => {
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#000000] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24 pb-8">
        
        {/* Top Section - Three Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-12">
          
          {/* LEFT - Logo, Brand Name and Description */}
          <div className="">
            {/* Logo with Brand Name */}
            <Link to="/" className="flex items-center group">
              <div className="relative flex-shrink-0">
                <img
                  src={logo}
                  alt="Paused Pixels Logo"
                  className="relative h-16 sm:h-20 lg:h-24 w-auto object-contain"
                />
              </div>
              <div className="">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#252355] to-[#2B8699] bg-clip-text text-transparent leading-tight">
                  Paused
                </span>
                <span className="text-xl ml-2 sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#2B8699] to-[#252355] bg-clip-text text-transparent leading-tight">
                  Pixels
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
              Capturing life's most precious moments with artistic vision and
              technical excellence. We transform ordinary scenes into
              extraordinary memories through the lens of creativity.
            </p>

            {/* Decorative line */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#252355] to-[#2B8699]"></div>
          </div>

          {/* CENTER - Get in Touch */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Get in Touch
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#252355] to-[#2B8699] rounded-full"></div>
            </div>

            <div className="space-y-5">
              {/* Email */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#252355] to-[#2B8699] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <FaEnvelope className="text-white text-base" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#252355] to-[#2B8699] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:pixelspaused@gmail.com"
                      className="text-gray-300 hover:text-[#2B8699] transition-colors text-sm md:text-base font-medium"
                    >
                      pixelspaused@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B8699] to-[#252355] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <FaPhoneAlt className="text-white text-base" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2B8699] to-[#252355] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                      Call Us
                    </p>
                    <a
                      href="tel:+8801863646515"
                      className="text-gray-300 hover:text-[#2B8699] transition-colors text-sm md:text-base font-medium"
                    >
                      +880 1990 572 387
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#252355] to-[#2B8699] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <FaMapMarkerAlt className="text-white text-base" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#252355] to-[#2B8699] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                      Visit Us
                    </p>
                    <p className="text-gray-300 text-sm md:text-base font-medium">
                      Sonargaon, Narayanganj, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Follow Us */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Follow Us
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#252355] to-[#2B8699] rounded-full"></div>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Stay connected with us on social media for the latest updates,
              behind-the-scenes content, and photography inspiration.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} label="Facebook" />
              <SocialIcon href="https://instagram.com" icon={<FaInstagram />} label="Instagram" />
              <SocialIcon href="https://twitter.com" icon={<FaTwitter />} label="Twitter" />
              <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn />} label="LinkedIn" />
              <SocialIcon href="https://pinterest.com" icon={<FaPinterestP />} label="Pinterest" />
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#252355]/10 to-[#2B8699]/10 border border-gray-800">
              <p className="text-sm text-gray-300 mb-3 font-medium">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-black/50 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2B8699] transition-all duration-300"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-[#252355] to-[#2B8699] text-white text-sm font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with decorative elements */}
        <div className="relative my-8">
          <div className="border-t border-gray-800/50"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-4">
            <FaHeart className="text-[#2B8699] text-sm" />
          </div>
        </div>

        {/* Bottom Section - Copyright and Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Copyright */}
          <p className="text-gray-500 order-2 md:order-1">
            © {currentYear}{" "}
            <span className="text-white font-medium">Paused Pixels</span>
            . All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 order-1 md:order-2">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#2B8699] transition-colors relative group"
            >
              Terms & Conditions
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2B8699] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#2B8699] transition-colors relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2B8699] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-4 md:right-8 bottom-4 md:bottom-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#252355] to-[#2B8699] text-white shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#252355] to-[#2B8699] animate-ping opacity-20"></span>
        
        {/* Ring Effect */}
        <span className="absolute inset-0 rounded-full border-2 border-[#2B8699]/50 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></span>
      </button>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#252355]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#2B8699]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#252355]/5 to-[#2B8699]/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative w-11 h-11 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#252355] to-[#2B8699] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      {/* Icon */}
      <span className="relative z-10 text-base group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[#2B8699] blur-md"></div>
    </a>
  );
};

export default Footer;