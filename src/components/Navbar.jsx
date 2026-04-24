import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import logo from "../assets/logo/pp-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed font-roboto top-0 left-0 w-full z-[100] transition-all duration-500 py-2 md:py-4 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg py-1"
            : "bg-transparent"
        }`}
      >
        {/* Bottom Border Line - Always Visible */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-5 lg:px-6">
          
          {/* Logo - Large and visible with h-28, overflowing navbar naturally */}
          <Link to="/" className="flex items-center flex-shrink-0 -my-6 lg:-my-8">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-24 sm:h-28 lg:h-28 w-auto object-contain relative z-10 py-2" 
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.substring(1))}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side - Contact Button */}
          <div className="hidden lg:block flex-shrink-0">
            <button
              onClick={scrollToContact}
              className="relative px-6 py-2.5 rounded-full text-sm font-medium tracking-wider text-white overflow-hidden group cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #252355 0%, #2B8699 100%)",
              }}
            >
              <span className="relative z-10">CONTACT US</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B8699] to-[#252355] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white blur-xl transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 focus:outline-none z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span
                className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fixed positioning and visibility */}
      <div
        className={`fixed inset-0 lg:hidden transition-all duration-500 ease-in-out ${
          menuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ 
          zIndex: 55,
          background: "linear-gradient(135deg, #000000 0%, #252355 100%)",
        }}
      >
        {/* Close button for mobile menu */}
        <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
          {navLinks.map((link, index) => (
            <MobileNavLink
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href.substring(1))}
              index={index}
              isVisible={menuOpen}
            >
              {link.name}
            </MobileNavLink>
          ))}
          
          <div 
            className={`transform transition-all duration-500 delay-500 mt-8 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full text-white font-medium tracking-wider text-lg shadow-2xl cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #252355 0%, #2B8699 100%)",
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Desktop NavLink Component with beautiful underline effect
const NavLink = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative font-medium text-sm tracking-wider transition-all duration-300 py-2 group text-white/90 hover:text-white"
    >
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Animated underline effect */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#252355] to-[#2B8699] transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
      
      {/* Glow effect on hover */}
      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gradient-to-r from-[#252355]/30 to-[#2B8699]/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    </a>
  );
};

// Mobile NavLink Component with animation
const MobileNavLink = ({ href, onClick, children, index, isVisible }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative text-white text-2xl sm:text-3xl font-light tracking-wider transition-all duration-500 transform hover:text-[#2B8699] ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <span className="relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2B8699] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
      </span>
    </a>
  );
};

export default Navbar;