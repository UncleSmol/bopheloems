import React from "react";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
};

export default HomePage;