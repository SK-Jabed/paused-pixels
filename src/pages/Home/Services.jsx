import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";
import { MdPortrait, MdFlightTakeoff, MdBusiness } from "react-icons/md";
import swirlIcon from "../../assets/swirl-icon.png"; // Import your swirl icon

const Services = () => {
  const services = [
    {
      icon: <MdPortrait size={32} />,
      title: "Portrait Photography",
      description:
        "Capturing the essence of individuals with artistic portraits that reveal personality, emotion, and character. From professional headshots to creative personal portraits.",
    },
    {
      icon: <FaHeart size={28} />,
      title: "Wedding Photography",
      description:
        "Documenting your special day with elegance and emotion. Every precious moment, from intimate glances to grand celebrations, preserved forever in stunning detail.",
    },
    {
      icon: <MdFlightTakeoff size={32} />,
      title: "Cinematography",
      description:
        "Exploring the world through a lens, capturing breathtaking landscapes, vibrant cultures, and unforgettable adventures. Bringing distant places closer to your heart.",
    },
    {
      icon: <MdBusiness size={32} />,
      title: "Brand Promotion",
      description:
        "Elevating brands with professional product, fashion, and corporate photography. High-quality visuals that communicate your brand's story and captivate your audience.",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="relative py-16 md:py-20 lg:py-28 bg-[#fafafa] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#252355]/5 to-[#2B8699]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#2B8699]/5 to-[#252355]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Swirl Icon */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-12 md:mb-16">
          
          {/* Swirl Icon - Left Side (Hidden on mobile) */}
          <div 
            className="hidden lg:block flex-shrink-0"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#252355]/20 to-[#2B8699]/20 rounded-full blur-xl"></div>
              <img
                src={swirlIcon}
                alt="Swirl Decorative Icon"
                className="relative w-20 h-20 lg:w-24 lg:h-24 object-contain opacity-80"
              />
            </div>
          </div>

          {/* Center Content - Title and Description - Now perfectly centered */}
          <div 
            className="text-center flex-1"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lato font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#252355] to-[#2B8699] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#252355] to-[#2B8699] mx-auto mb-6 rounded-full"></div>
            
            <p className="text-gray-600 text-base sm:text-lg font-roboto max-w-2xl mx-auto">
              We offer a range of professional photography services tailored to capture 
              your most precious moments. From personal portraits to commercial projects, 
              we bring creativity and expertise to every shoot.
            </p>
          </div>

          {/* Spacer for symmetry on the right side (matching swirl icon space) */}
          <div className="hidden lg:block flex-shrink-0 w-20 lg:w-24"></div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Left Border Accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#252355] to-[#2B8699] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#252355]/5 to-[#2B8699]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Content Container */}
              <div className="relative z-10">
                
                {/* Icon Container - Now with zoom effect on hover */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#252355]/10 to-[#2B8699]/10 flex items-center justify-center text-[#252355] transition-all duration-500 group-hover:shadow-lg">
                    <div className="transform group-hover:scale-125 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-lato font-bold text-gray-900 mb-3 group-hover:text-[#252355] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-roboto text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#252355]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center mt-12 md:mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to create something amazing? Let's discuss your photography needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#252355] to-[#2B8699] text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;