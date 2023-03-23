import { ShareIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Button from './Button';

const Header = ({ isShowing, onButtonClick }) => {
  const activeHeaderStyles = isShowing
    ? 'bg-[#ffffff80] backdrop-blur-[10px] border-[#ebeef1]'
    : ' border-[#0000ff00]';
  const iconStyle = isShowing ? 'text-white' : 'text-gray-800';
  const buttonStyle = isShowing ? 'bg-black' : 'bg-slate-100';

  const activeHeaderItemStyles = isShowing ? '' : 'opacity-0';

  return (
    <>
      <header
        className={`fixed 
        w-[calc(100%-24px)] 
        md:max-w-3xl
        left-0 right-0 mx-auto my-[8px] py-[8px] px-[12px] z-10 top-0 flex flex-row-reverse items-center justify-between rounded-[72px] border-[1px] ${activeHeaderStyles}`}
      >
        {/* Botton */}
        <button
          className={`w-[40px] h-[40px] hover:opacity-75 min-w-[40px] transition-all duration-[150ms] rounded-full flex items-center justify-center border-[1px] z-10
          ${buttonStyle}
          `}
          onClick={onButtonClick}
        >
          <svg
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 122.88 29.96'
            className={`md:hidden w-4 h-4 ${iconStyle}`}
          >
            <path
              d='M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm92.93,0a15,15,0,1,1,15,15,15,15,0,0,1-15-15ZM46.46,15a15,15,0,1,1,15,15,15,15,0,0,1-15-15Z'
              fill='currentColor'
            />
          </svg>
          <ShareIcon className={`w-4 h-4 hidden md:flex ${iconStyle}`} />
        </button>

        <div>
          <p className={`font-semibold ${activeHeaderItemStyles}`}>
            Isak Anderson
          </p>
        </div>
        <div className='max-w-[44px] max-h-[44px]'>
          <img
            src={
              'https://d1fdloi71mui9q.cloudfront.net/aobYU4TDSXOOdof3MYND_9TvbS17m6tobN8lY'
            }
            className={`object-contain block rounded-full ${activeHeaderItemStyles} `}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
