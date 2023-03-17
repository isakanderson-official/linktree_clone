import { ShareIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Button = ({ isDark, onClick }) => {
  const iconStyle = isDark ? 'text-white' : 'text-gray-800';
  const buttonStyle = isDark ? 'bg-black' : 'bg-slate-100';
  return (
    <button
      className={`w-[40px] h-[40px] hover:opacity-75 min-w-[40px] transition-all duration-[150ms] rounded-full flex items-center justify-center border-[1px] z-10
          ${buttonStyle}
          `}
      onClick={onClick}
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
  );
};

export default Button;
