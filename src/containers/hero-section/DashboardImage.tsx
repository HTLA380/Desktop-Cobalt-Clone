'use client';

import { useEffect, useRef, useState } from 'react';
import StarFieldAnimation from './StarFieldAnimation';
import Image from 'next/image';

const DashBoardImage = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return;
      if (dashboardRef.current.offsetHeight - window.scrollY > dashboardRef.current.offsetHeight - 80) {
        setIsAnimationActive(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative'>
      <StarFieldAnimation />

      {/* dashboard image */}
      <div
        className='relative transition duration-700 rounded-md bg-zinc-950 ring-1 ring-white/10 lg:rounded-2xl'
        style={{ transform: isAnimationActive ? 'none' : 'scaleY(0.91)' }}>
        {/* Animated Cyan Border 1 */}
        <div className='absolute -top-px right-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64 z-10'>
          <div className='w-full h-px dashboard-border-animation-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0'></div>
        </div>

        <div
          ref={dashboardRef}
          className={`origin-center dashboard-img ${
            isAnimationActive ? 'dashboard-img-active' : 'dashboard-img-hidden'
          }`}>
          <Image
            priority={true}
            alt='App screenshot'
            width='4200'
            height='2490'
            src={'./assets/images/dashboard.png'}
            className='rounded-md lg:rounded-2xl'
          />
        </div>

        {/* Animated Cyan Border 2 */}
        <div className='absolute -bottom-2 left-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64'>
          <div className='w-full h-px dashboard-border-animation-2 bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0'></div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardImage;
