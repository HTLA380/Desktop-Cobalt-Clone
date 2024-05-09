import React from 'react';
import CobaltIcon from '@/components/svg/CobaltIcon';

interface AlertProps {
  time: string;
  contents: Array<string>;
  buttons?: Array<string>;
}

const Alert: React.FC<AlertProps> = ({ time, contents, buttons }) => {
  return (
    <li className='relative flex gap-x-2'>
      <div className='flex-auto select-none rounded-md bg-zinc-900 p-3 ring-1 ring-inset ring-zinc-400/10 ml-8'>
        <div className='flex items-center gap-2'>
          <div className='flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-400/10'>
            <CobaltIcon className='h-2.5 w-2.5' />
          </div>
          <div className='text-sm/5 text-zinc-500'>
            Cobalt • <span className='text-xs/5'>{time}</span>
          </div>
        </div>
        <div className='ml-7'>
          {contents?.map((content, idx) => (
            <p key={idx} className='mt-1.5 text-xs/5 text-zinc-500'>
              {content}
            </p>
          ))}
          {buttons && (
            <div className='mt-2 flex gap-2.5'>
              {buttons.map((button, idx) => (
                <button
                  key={idx}
                  className='flex items-center justify-center rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-300 transition hover:bg-zinc-800'>
                  {button}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Alert;
