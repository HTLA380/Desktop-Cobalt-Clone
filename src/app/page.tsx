import GeniusSection from '@/containers/genius-section';
import HeroSection from '@/containers/hero-section';
import IntroSection from '@/containers/intro-section';
import ToolkitSection from '@/containers/toolkit-section';
import React from 'react';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ToolkitSection />
      <GeniusSection />
    </div>
  );
};

export default Home;
