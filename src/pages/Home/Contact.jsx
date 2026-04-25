import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize AOS Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_yxvyo3u",
        "template_sgmr1ua",
        formData,
        "JutGtW8LXBsU_Pt6F"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setIsLoading(false);
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          // Hide success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setIsLoading(false);
        }
      );
  };

  const contactCards = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Sonargaon, Narayanganj, Bangladesh",
      color: "#252355",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      content: "+880 1990 572 387",
      color: "#2B8699",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "pixelspaused@gmail.com",
      color: "#252355",
      subContent: "We'll respond within 24 hours",
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61560066361826", color: "#1877F2" },
    { icon: FaInstagram, url: "https://www.instagram.com/paused.pixel/", color: "#E4405F" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@paused.pixels?_r=1&_t=ZS-95fy6XVJ90u", color: "#111111" },
    { icon: FaTwitter, url: "https://twitter.com", color: "#1DA1F2" },
    { icon: FaPinterestP, url: "https://pinterest.com", color: "#BD081C" },
  ];

  return (
    <section
      id="contact"
      className="relative py-14 md:py-16 lg:py-24 bg-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#252355]/5 to-[#2B8699]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#2B8699]/5 to-[#252355]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-[#252355] to-[#2B8699] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#252355] to-[#2B8699] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card Icon */}
              <div className="relative mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${card.color} 0%, #2B8699 100%)`,
                  }}
                >
                  <card.icon />
                </div>
                {/* Decorative dot */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#2B8699] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1">{card.content}</p>
              {card.subContent && (
                <p className="text-sm text-gray-500">{card.subContent}</p>
              )}

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#252355] to-[#2B8699] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Left Content & Right Form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Contact Info & Social Links */}
          <div data-aos="fade-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#252355] to-[#2B8699] bg-clip-text text-transparent">
                Connect
              </span>
            </h3>
            
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              I'm always excited to take on new projects and collaborate with 
              creative minds. Whether you have a specific vision in mind or need 
              guidance to bring your ideas to life, I'm here to help make it happen.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Feel free to reach out through the contact form, or connect with 
              me on social media. Let's create something extraordinary together!
            </p>

            {/* WhatsApp Quick Contact */}
            <div className="mb-8 p-5 bg-gradient-to-r from-[#252355]/5 to-[#2B8699]/5 rounded-2xl border-l-4 border-[#2B8699]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center text-white text-xl shadow-lg">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Quick Response</p>
                  <a
                    href="https://wa.me/8801990572387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-800 hover:text-[#25D366] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                Follow Us On Social Media
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-11 h-11 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100"
                    style={{
                      color: social.color,
                    }}
                  >
                    <social.icon className="text-xl group-hover:scale-110 transition-transform duration-300" />
                    {/* Hover background */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: social.color }}
                    ></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div data-aos="fade-left">
            <form
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#2B8699] focus:ring-2 focus:ring-[#2B8699]/20 transition-all duration-300 outline-none text-gray-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#2B8699] focus:ring-2 focus:ring-[#2B8699]/20 transition-all duration-300 outline-none text-gray-800"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#2B8699] focus:ring-2 focus:ring-[#2B8699]/20 transition-all duration-300 outline-none text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#2B8699] focus:ring-2 focus:ring-[#2B8699]/20 transition-all duration-300 outline-none text-gray-800"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#2B8699] focus:ring-2 focus:ring-[#2B8699]/20 transition-all duration-300 outline-none text-gray-800 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#252355] to-[#2B8699] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <LuSend className="text-lg" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-600 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;