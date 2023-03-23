import { ShareIcon } from '@heroicons/react/24/outline';
import React from 'react';

const CustomButton = ({ data }) => {
  const { title, tags, link, description, iconType, icon } = data;
  return (
    <a href={link || '#'} target={'_blank'}>
      <button className='bg-slate-900 text-white rounded-[14px] w-full h-[74px] cursor-pointer break-all sm:break-words hover:scale-105 transition-all flex group relative shadow-md hover:shadow-gray-400/90 p-2 gap-2'>
        {/* Icon / Image */}
        <div className='bg-white h-full w-auto aspect-square flex rounded-lg items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='-35.20005 -41.33325 305.0671 247.9995'
          >
            <path
              d='M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85'
              fill='red'
            />
            <path d='M93.333 117.559l61.333-34.89-61.333-34.894z' fill='#fff' />
          </svg>
        </div>
        {/* Content box */}
        <div className='flex-1 flex-col h-full text-left w-[200px]  border-gray-200'>
          {/* Title */}
          <h3 className='font-semibold text-[12px] leading-0'>{title}</h3>
          {/* Description */}
          <p className='text-[10px] break-normal line-clamp-2'>{description}</p>
          {/* Tags */}
          <p className='text-[8px] leading-0'>{tags.join(' - ')}</p>
        </div>
      </button>
    </a>
  );
};

export default CustomButton;
