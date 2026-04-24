import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import images
import img1 from "../../assets/slider-7.jpg";
import img2 from "../../assets/slider-1.jpg";
import img3 from "../../assets/slider-8.jpg";
import img4 from "../../assets/slider-4.jpg";

const Banner = () => {
  const slides = [
    {
      image: img1,
      title: "CAPTURE THE MOMENT",
      subtitle: "PROFESSIONAL PHOTOGRAPHY",
      description:
        "Transforming fleeting moments into timeless memories with artistic precision and creative vision.",
    },
    {
      image: img2,
      title: "CREATE YOUR STORY",
      subtitle: "WEDDING & EVENTS",
      description:
        "Every love story is unique. We capture the emotions, details, and magic of your special day.",
    },
    {
      image: img3,
      title: "FRAME THE WORLD",
      subtitle: "COMMERCIAL PHOTOGRAPHY",
      description:
        "Elevate your brand with stunning visuals that tell your story and captivate your audience.",
    },
    {
      image: img4,
      title: "SEEK THE BEAUTY",
      subtitle: "PORTRAIT & FASHION",
      description:
        "Revealing the extraordinary in every face, every expression, and every personality we photograph.",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={1200}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[2000ms]"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Gradient Overlay - Darker for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
              
              {/* Additional dark overlay for depth */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content Container - Centered */}
              <div className="relative h-full flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                  
                  {/* Subtitle */}
                  <div className="overflow-hidden mb-4 md:mb-6">
                    <p className="text-[#2B8699] text-sm sm:text-base lg:text-lg font-medium tracking-[0.3em] uppercase animate-fadeInUp">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Main Title */}
                  <div className="overflow-hidden mb-4 md:mb-6">
                    <h1 className="font-raleway text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fadeInUp animation-delay-200">
                      {slide.title}
                    </h1>
                  </div>

                  {/* Description */}
                  <div className="overflow-hidden mb-8 md:mb-10 px-8 md:px-0">
                    <p className="text-gray-200 font-roboto text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto animate-fadeInUp animation-delay-400">
                      {slide.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp animation-delay-600">
                    <button
                      onClick={scrollToContact}
                      className="group relative px-8 py-4 font-roboto bg-gradient-to-r from-[#252355] to-[#2B8699] text-white font-semibold tracking-wider text-sm uppercase overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <span className="relative z-10">Contact Us</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2B8699] to-[#252355] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="group relative px-8 py-4 font-roboto border-2 border-white/40 text-white font-semibold tracking-wider text-sm uppercase overflow-hidden rounded-lg backdrop-blur-sm hover:border-white/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows - Now visible on all devices */}
        <div className="swiper-button-next !flex !w-10 !h-10 sm:!w-12 sm:!h-12 lg:!w-14 lg:!h-14 !text-white/80 hover:!text-white !transition-all !duration-300 after:!text-lg sm:after:!text-xl lg:after:!text-2xl !right-2 sm:!right-4 lg:!right-8"></div>
        <div className="swiper-button-prev !flex !w-10 !h-10 sm:!w-12 sm:!h-12 lg:!w-14 lg:!h-14 !text-white/80 hover:!text-white !transition-all !duration-300 after:!text-lg sm:after:!text-xl lg:after:!text-2xl !left-2 sm:!left-4 lg:!left-8"></div>
      </Swiper>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        /* Active slide animations */
        :global(.swiper-slide-active .animate-fadeInUp) {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        :global(.swiper-slide-active .animation-delay-200) {
          animation-delay: 0.3s;
        }
        
        :global(.swiper-slide-active .animation-delay-400) {
          animation-delay: 0.5s;
        }
        
        :global(.swiper-slide-active .animation-delay-600) {
          animation-delay: 0.7s;
        }
        
        /* Custom Pagination Styling */
        :global(.swiper-pagination) {
          position: absolute !important;
          right: 30px !important;
          left: auto !important;
          bottom: 50% !important;
          transform: translateY(50%) !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          width: auto !important;
          z-index: 20 !important;
        }
        
        :global(.custom-bullet) {
          width: 10px !important;
          height: 10px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          border-radius: 50% !important;
          opacity: 1 !important;
          transition: all 0.4s ease !important;
          cursor: pointer !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
        }
        
        :global(.custom-bullet:hover) {
          background: rgba(255, 255, 255, 0.8) !important;
          border-color: rgba(255, 255, 255, 0.8) !important;
          transform: scale(1.3) !important;
        }
        
        :global(.swiper-pagination-bullet-active.custom-bullet) {
          background: #ffffff !important;
          border-color: #ffffff !important;
          transform: scale(1.4) !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5) !important;
        }
        
        /* Mobile Pagination - Horizontal at bottom */
        @media (max-width: 768px) {
          :global(.swiper-pagination) {
            right: 50% !important;
            left: 50% !important;
            bottom: 25px !important;
            top: auto !important;
            transform: translateX(-50%) !important;
            flex-direction: row !important;
            gap: 8px !important;
          }
          
          :global(.custom-bullet) {
            width: 8px !important;
            height: 8px !important;
          }
          
          :global(.swiper-pagination-bullet-active.custom-bullet) {
            transform: scale(1.2) !important;
          }
        }
        
        /* Hide navigation arrows on very small screens */
        @media (max-width: 480px) {
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            width: 36px !important;
            height: 36px !important;
          }
          
          :global(.swiper-button-next::after),
          :global(.swiper-button-prev::after) {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;