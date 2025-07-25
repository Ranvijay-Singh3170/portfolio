import React from "react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import ContactCTA from "./sections/ContactCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="w-full h-screen">
      <div>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>
      <Services />
      <Experience />
      <Projects />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
