import React, { useEffect } from "react";
import img1 from "../../assets/slider-3.jpg";
import img2 from "../../assets/b-28.jpg";
import img3 from "../../assets/b-36.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
    <section id="about" className="relative bg-white py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#252355]/5 to-[#2B8699]/5 rounded-full blur-3xl"
        data-aos="fade-right"
        data-aos-duration="1000"
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#2B8699]/5 to-[#252355]/5 rounded-full blur-3xl"
        data-aos="fade-left"
        data-aos-duration="1000"
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - IMAGES COLLAGE */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
              
              {/* Image 1 - Top Left */}
              <div 
                className="absolute top-0 left-0 z-10 group"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={img1}
                    alt="Our photography journey"
                    className="w-36 sm:w-44 md:w-52 lg:w-64 h-36 sm:h-44 md:h-52 lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252355]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative border */}
                <div className="absolute -top-2 -left-2 w-full h-full border-2 border-[#2B8699]/30 rounded-lg -z-10"></div>
              </div>

              {/* Image 2 - Top Right (Overlapping) */}
              <div 
                className="absolute top-6 sm:top-8 md:top-10 lg:top-12 right-2 sm:right-4 md:right-0 z-20 group"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={img2}
                    alt="Capturing moments"
                    className="w-36 sm:w-44 md:w-52 lg:w-64 h-36 sm:h-44 md:h-52 lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B8699]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative border */}
                <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#252355]/30 rounded-lg -z-10"></div>
              </div>

              {/* Image 3 - Bottom Center (Largest, Overlapping both) */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 group"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={img3}
                    alt="Our photography story"
                    className="w-44 sm:w-52 md:w-64 lg:w-80 h-44 sm:h-52 md:h-64 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out border-4 border-white"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252355]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#252355]/20 to-[#2B8699]/20 rounded-lg blur-xl -z-10"></div>
              </div>

              {/* Decorative Circle Pattern - Updated */}
              <div 
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 opacity-20"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="10" cy="10" r="3" fill="#2B8699" />
                  <circle cx="30" cy="10" r="3" fill="#2B8699" />
                  <circle cx="50" cy="10" r="3" fill="#2B8699" />
                  <circle cx="70" cy="10" r="3" fill="#2B8699" />
                  <circle cx="10" cy="30" r="3" fill="#252355" />
                  <circle cx="30" cy="30" r="3" fill="#252355" />
                  <circle cx="50" cy="30" r="3" fill="#252355" />
                  <circle cx="70" cy="30" r="3" fill="#252355" />
                  <circle cx="10" cy="50" r="3" fill="#2B8699" />
                  <circle cx="30" cy="50" r="3" fill="#2B8699" />
                  <circle cx="50" cy="50" r="3" fill="#2B8699" />
                  <circle cx="70" cy="50" r="3" fill="#2B8699" />
                  <circle cx="10" cy="70" r="3" fill="#252355" />
                  <circle cx="30" cy="70" r="3" fill="#252355" />
                  <circle cx="50" cy="70" r="3" fill="#252355" />
                  <circle cx="70" cy="70" r="3" fill="#252355" />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="relative order-1 lg:order-2">
            
            {/* Main Title */}
            <div 
              className="mb-6"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252355] leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-[#252355] to-[#2B8699] bg-clip-text text-transparent">
                  Paused Pixels
                </span>
              </h2>

              {/* Decorative Line Under Title */}
              <div 
                className="w-20 h-1 bg-[#252355] mt-1 rounded-full"
                data-aos="fade-right"
                data-aos-delay="300"
              ></div>
            </div>

            {/* Introduction Text - Updated with brand-relevant content */}
            <p 
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              At <span className="font-semibold text-[#252355]">Paused Pixels</span>, we believe 
              that every photograph has the power to freeze time and preserve emotions forever. 
              Our journey began with a simple passion for capturing life's fleeting moments and 
              transforming them into timeless visual narratives.
            </p>

            <p 
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              What started as a dream has grown into a dedicated photography studio committed to 
              artistic excellence. We blend creative vision with technical expertise to deliver 
              images that not only document moments but tell compelling stories that resonate 
              with authenticity and emotion.
            </p>

            {/* Journey Start Date */}
            <div 
              className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-[#252355]/5 to-[#2B8699]/5 rounded-lg border-l-4 border-[#252355]"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#252355] to-[#2B8699] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Journey Started</p>
                <p className="text-lg font-semibold text-gray-800">22 April, 2024</p>
              </div>
            </div>

            {/* Mission and Vision */}
            <div className="space-y-4">
              <div 
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#252355]/10 flex items-center justify-center group hover:bg-[#252355]/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#252355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To capture authentic moments and transform them into timeless 
                    visual stories that resonate with emotion and creativity.
                  </p>
                </div>
              </div>

              <div 
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#2B8699]/10 flex items-center justify-center group hover:bg-[#2B8699]/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#2B8699]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Our Vision</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To become a leading photography studio known for artistic 
                    excellence, innovation, and creating unforgettable visual experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative signature line */}
            <div 
              className="mt-8 pt-6 border-t border-gray-200"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <p className="text-sm md:text-lg text-gray-500 italic">
                "Where moments pause and pixels speak."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;