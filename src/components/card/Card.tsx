import React from 'react';

interface CardProps {
  ImgComponent?: React.FC;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ ImgComponent = () => null, title, description, className }) => {
  return (
    <div
      className={`flex h-[30rem] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 ${className}`}>
      <ImgComponent />
      <div className='mt-auto w-full space-y-4 px-8 pb-8'>
        <h3 className='text-lg/none font-medium text-zinc-200'>{title}</h3>
        <p className='max-w-sm text-sm text-zinc-400/80'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
