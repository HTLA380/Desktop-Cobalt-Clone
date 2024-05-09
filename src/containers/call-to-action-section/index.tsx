import Button from '@/components/button/Button';
import React from 'react';

const CallToActionSection = () => {
  return (
    <section className='relative mx-auto mt-16 max-w-full p-6 pb-12 pt-20 lg:px-8'>
      <div className='user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]'></div>

      <div className='relative'>
        <div className='absolute inset-x-0 top-10 -z-10 flex justify-center overflow-hidden blur-3xl'>
          <div
            className='aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-500 to-blue-800 opacity-20'
            style={{
              clipPath:
                'polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)',
            }}></div>
        </div>
        <div className='mx-auto max-w-xl text-center'>
          <h2 className='bg-gradient-to-br from-zinc-100 to-zinc-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl'>
            See where financial automation can take your business.
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg text-zinc-400/80'>
            The first financial tool you'll love. And the last one you'll ever need.
          </p>
          <div className='mt-12 flex items-center justify-center'>
            <Button content={'Join the waitlist'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
