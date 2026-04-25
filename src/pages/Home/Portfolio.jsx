import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your 9 images
import img1 from "../../assets/01.jpg";
import img2 from "../../assets/02.jpg";
import img3 from "../../assets/03.jpg";
import img4 from "../../assets/04.jpg";
import img5 from "../../assets/05.jpg";
import img6 from "../../assets/06.jpg";
import img7 from "../../assets/07.jpg";
import img8 from "../../assets/08.jpg";
import img9 from "../../assets/09.jpg";

const Portfolio = () => {
  const images = [
    { id: 1, src: img1, alt: "Portfolio Image 1", category: "Portrait" },
    { id: 2, src: img2, alt: "Portfolio Image 2", category: "Wedding" },
    { id: 3, src: img3, alt: "Portfolio Image 3", category: "Travel" },
    { id: 4, src: img4, alt: "Portfolio Image 4", category: "Commercial" },
    { id: 5, src: img5, alt: "Portfolio Image 5", category: "Portrait" },
    { id: 6, src: img6, alt: "Portfolio Image 6", category: "Wedding" },
    { id: 7, src: img7, alt: "Portfolio Image 7", category: "Travel" },
    { id: 8, src: img8, alt: "Portfolio Image 8", category: "Commercial" },
    { id: 9, src: img9, alt: "Portfolio Image 9", category: "Portrait" },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative py-14 md:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#252355]/5 to-[#2B8699]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#2B8699]/5 to-[#252355]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          className="text-center mb-12 md:mb-16"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          {/* Subtitle */}
          <p 
            className="text-[#2B8699] uppercase tracking-[0.3em] text-sm font-medium mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Gallery
          </p>

          {/* Main Title */}
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#252355] to-[#2B8699] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div 
            className="w-24 h-1 bg-gradient-to-r from-[#252355] to-[#2B8699] mx-auto mb-6 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="300"
          ></div>
          
          {/* Description */}
          <p 
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Explore our collection of stunning photography work. Each image tells 
            a unique story, captured with passion, creativity, and attention to detail.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              data-aos-offset="50"
            >
              {/* Image Container - Slightly increased height */}
              <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px] overflow-hidden">
                
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                />

                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Glassy Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-semibold text-white tracking-wider uppercase opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg">
                  {image.category}
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-sm md:text-base">
                        {image.category} Photography
                      </h3>
                      <p className="text-gray-300/80 text-xs mt-1">
                        Click to view details
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#252355] transition-all duration-300 transform group-hover:rotate-45">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2B8699]/40 transition-all duration-500"></div>
              
              {/* Top Corner Shine Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;