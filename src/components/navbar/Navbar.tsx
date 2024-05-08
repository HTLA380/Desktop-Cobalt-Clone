import React from 'react';
import Button from '../button/Button';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='mx-4'>
      <nav className='absolute inset-x-0 left-0 z-20 w-full'>
        <div className='flex items-center justify-center max-w-screen-xl px-4 py-5 mx-auto'>
          <div className='w-full'>
            <Image src={'./assets/images/logo.svg'} width='100' height='200' alt='cobalt logo' className='h-6' />
          </div>
          <div className='flex items-center justify-end w-full space-x-6 font-medium'>
            <a href='https://joincobalt.com/blog' target='_blank' className='text-sm text-secondary hover:text-white'>
              Blog
            </a>
            <Button content={'Join the waitlist'} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
