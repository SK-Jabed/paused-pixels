import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// Import images directly
import client1 from "../../assets/client-1.jpg";
import client2 from "../../assets/client-2.jpg";
import client3 from "../../assets/client-3.jpg";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/client-5.png";

const TestimonialsSection = ({
  autoRotateInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const testimonials = [
    {
      id: "testimonial-1",
      name: "Sarah Johnson",
      image: client1,
      role: "Portrait Photography Client",
      text: "Absolutely stunning work! The portraits captured the essence of our family perfectly. Every shot was beautifully composed and the lighting was magical.",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "Michael Rodriguez",
      image: client2,
      role: "Wedding Photography",
      text: "We couldn't have asked for a better photographer for our special day. The candid moments captured were priceless, and the attention to detail was exceptional.",
      rating: 5,
    },
    {
      id: "testimonial-3",
      name: "Priya Patel",
      image: client3,
      role: "Corporate Event Client",
      text: "Professional, punctual, and incredibly talented. The event photos exceeded our expectations and really captured the energy and atmosphere of our conference.",
      rating: 5,
    },
    {
      id: "testimonial-4",
      name: "David Kim",
      image: client4,
      role: "Commercial Photography",
      text: "Working with this team was a game-changer for our brand. The product photography elevated our entire marketing presence. Highly recommended!",
      rating: 5,
    },
    {
      id: "testimonial-5",
      name: "Emma Thompson",
      image: client5,
      role: "Fashion Photography",
      text: "Incredible eye for detail and composition. The fashion shoot was flawless, and the final images were exactly what we envisioned and more.",
      rating: 5,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const goToSlide = useCallback(
    (index) => {
      const newIndex = (index + testimonials.length) % testimonials.length;
      setActiveIndex(newIndex);
      setIsAutoRotating(false);
      // Resume auto-rotation after 10 seconds of inactivity
      setTimeout(() => setIsAutoRotating(true), 10000);
    },
    [testimonials.length],
  );

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    let intervalId;
    if (isAutoRotating) {
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, autoRotateInterval);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoRotating, autoRotateInterval, testimonials.length]);

  const handleMouseEnter = () => setIsAutoRotating(false);
  const handleMouseLeave = () => setIsAutoRotating(true);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section
      className="relative py-16 md:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#252355]/5 to-[#2B8699]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#2B8699]/5 to-[#252355]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#252355] to-[#2B8699] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#252355] to-[#2B8699] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients 
            have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative w-full max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fafafa] to-white shadow-xl border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-8 md:p-12"
                role="group"
                aria-roledescription="slide"
                aria-label={`${activeIndex + 1} of ${testimonials.length}`}
              >
                <div className="flex flex-col items-center text-center">
                  
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <FaQuoteLeft className="text-4xl text-[#2B8699] opacity-30" />
                  </div>

                  {/* Client Image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#252355] to-[#2B8699] rounded-full blur-md opacity-50"></div>
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/100?text=Client";
                        }}
                      />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="mb-6">
                    <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl italic">
                      "{testimonials[activeIndex].text}"
                    </p>
                  </blockquote>

                  {/* Client Info */}
                  <footer>
                    <cite className="not-italic">
                      <div className="font-bold text-xl text-gray-900 mb-1">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-[#2B8699] font-medium">
                        {testimonials[activeIndex].role}
                      </div>
                    </cite>
                  </footer>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-[#252355] hover:text-white hover:bg-gradient-to-r hover:from-[#252355] hover:to-[#2B8699] transition-all duration-300 border border-gray-200 z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-[#252355] hover:text-white hover:bg-gradient-to-r hover:from-[#252355] hover:to-[#2B8699] transition-all duration-300 border border-gray-200 z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div 
          className="flex justify-center items-center w-full mt-8 gap-3"
          role="tablist"
        >
          {testimonials.map((_, index) => (
            <button
              key={`indicator-${index}`}
              className={`transition-all duration-300 ${
                index === activeIndex
                  ? "w-10 h-2.5 bg-gradient-to-r from-[#252355] to-[#2B8699]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              } rounded-full`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === activeIndex}
              onClick={() => goToSlide(index)}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;