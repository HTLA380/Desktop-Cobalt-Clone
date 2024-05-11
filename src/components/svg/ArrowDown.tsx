import React from 'react';

interface ArrowDownInterface {
  className?: string;
}

const ArrowDown: React.FC<ArrowDownInterface> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M12 5v14'></path>
      <path d='m19 12-7 7-7-7'></path>
    </svg>
  );
};

export default ArrowDown;
