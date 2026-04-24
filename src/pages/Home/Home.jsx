import React from 'react';
import About from './About';
import ProjectsSection from './Projects';
import ContactSection from './Contact';
import Banner from './Banner';
import Photographer from './Photographer';
import TestimonialsSection from './Testimonial';
import Services from './Services';
import Portfolio from './Portfolio';

const Home = () => {
    return (
      <div>
        <Banner />
        <Photographer />
        <About />
        <Services />
        {/* <ProjectsSection /> */}
        <Portfolio />
        <ContactSection />
        <TestimonialsSection />
      </div>
    );
};

export default Home;