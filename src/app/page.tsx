import Footer from '@/components/footer/Footer';
import CallToActionSection from '@/containers/call-to-action-section';
import GeniusSection from '@/containers/genius-section';
import HeroSection from '@/containers/hero-section';
import IntroSection from '@/containers/intro-section';
import ToolkitSection from '@/containers/toolkit-section';
import React from 'react';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ToolkitSection />
      <GeniusSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
};

export default Home;
