import React, { useEffect } from "react";
import photographerImg from "../../assets/photographer.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Photographer = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#fafafa] to-[#f0f0f0] py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#252355]/5 to-[#2B8699]/5 rounded-full blur-3xl"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2B8699]/5 to-[#252355]/5 rounded-full blur-3xl"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400"
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT CONTENT - WITH ANIMATIONS */}
          <div className="relative order-2 lg:order-1">
            
            {/* Main Content */}
            <div>
              
              {/* Main Title with Animation */}
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl mt-3 md:mt-0 pt-1 font-bold text-gray-900 leading-tight"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <span className="bg-gradient-to-r from-[#252355] to-[#2B8699] bg-clip-text text-transparent">
                  PHOTOGRAPHER
                </span>
              </h2>

              {/* Decorative Line Under Title with Animation */}
              <div 
                className="w-32 h-1 bg-[#2B8699] mt-1 mb-3 md:mb-4 rounded-2xl"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="300"
              ></div>

              {/* Subtitle with Animation */}
              <h3 
                className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-700 mb-3 md:mb-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Capturing{" "}
                <span className="font-medium text-[#252355] relative inline-block">
                  Moments
                </span>
                <br />
                That Last Forever
              </h3>

              {/* Description Text with Staggered Animation */}
              <div className="space-y-2 md:space-y-3 text-gray-600">
                <p 
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  As a passionate visual storyteller, I believe every photograph 
                  should evoke emotion and preserve the authenticity of the moment. 
                  With expertise in both natural light and studio photography, I 
                  create images that are both technically flawless and artistically 
                  compelling.
                </p>
                
                <p 
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  My approach combines creative direction with a keen eye for detail, 
                  ensuring each photograph reflects the unique essence of the moment. 
                  Whether it's a wedding, corporate event, or personal portrait session, 
                  I'm dedicated to delivering images that you'll treasure for a lifetime.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE - WITH ANIMATIONS */}
          <div className="relative order-1 lg:order-2 px-3 md:px-0">
            {/* Decorative frame behind image with Animation */}
            <div 
              className="absolute -inset-4 bg-gradient-to-br from-[#252355]/10 to-[#2B8699]/10 rounded-2xl blur-2xl"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            ></div>
            
            {/* Main Image Container with Animation */}
            <div 
              className="relative group"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {/* Image Border/Frame Effect */}
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#2B8699]/30 rounded-2xl -z-10 transition-all duration-500 group-hover:-right-3 group-hover:-bottom-3"></div>
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-[#252355]/30 rounded-2xl -z-10 transition-all duration-500 group-hover:-left-3 group-hover:-top-3"></div>
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-1 shadow-2xl transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(37,35,85,0.3)]">
                <img
                  src={photographerImg}
                  alt="Professional Photographer at work"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252355]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>

              {/* Decorative Elements with hover animation */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#252355] to-[#2B8699] rounded-full opacity-20 blur-2xl group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-tl from-[#2B8699] to-[#252355] rounded-full opacity-20 blur-2xl group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"></div>
            </div>

            {/* Image Caption/Watermark with Animation */}
            <div 
              className="absolute -bottom-8 right-0 text-right"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] font-light">
                Professional Photography
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photographer;