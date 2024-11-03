"use client";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

const ServiceHome = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <section>
        <section>
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>

        <section id="faq">
          <Faq />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceHome;
