import React from 'react';
import GridSvg from './GridSvg';
import DashBoardImage from './DashboardImage';
import Content from './Content';

const HeroSection = () => {
  return (
    <section className='relative pt-14 transform-gpu isolate'>
      <div className='absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]'></div>
      <GridSvg
        className={
          'absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]'
        }
      />
      <div className='w-full max-w-screen-xl px-8 pt-32 pb-40 mx-auto text-center'>
        <Content />
        <div className='pt-16'>
          <DashBoardImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
