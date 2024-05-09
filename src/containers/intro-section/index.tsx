import React from 'react';
import GradientText from '@/components/text/GradientText';

const IntroSection = () => {
  return (
    <section className='py-24 px-8 w-full max-w-screen-xl mx-auto'>
      <div className='flex justify-between items-start gap-4 md:gap-2 flex-col md:flex-row'>
        <GradientText className='md:w-1/2 pr-12'>Who said finance has to be boring?</GradientText>
        <p className='text-primary/80 text-lg flex-1'>
          With Cobalt, managing your business finances is effortless, empowering, and anything but boring. Our intuitive
          platform brings clarity to your cash flow, simplifies your financial decision-making, and puts the power of
          advanced financial management right at your fingertips.{' '}
          <span className='text-white'>Say no to spreadsheets and tools designed in the 80s.</span>
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
