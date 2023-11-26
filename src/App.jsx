import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/hero/Hero";
import Intro from "./sections/Intro";
import Tookit from "./sections/toolkit/Toolkit";
import Genius from "./sections/Genius";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
import "./assets/css/animation.css";
const App = () => {
  return (
    <div className="w-full font-Inter">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Intro />
        <Tookit />
        <Genius />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
