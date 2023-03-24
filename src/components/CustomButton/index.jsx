import { ArrowLongRightIcon, ShareIcon } from '@heroicons/react/24/outline';
import React from 'react';

const CustomButton = ({ data }) => {
  const { title, tags, link, description, iconType, icon } = data;

  const titleFontSize = description ? 'text-[12px]' : 'text-[14px]';
  return (
    <a href={link || '#'} target={'_blank'}>
      <button className='bg-slate-900 text-white rounded-[14px] w-full h-[74px] cursor-pointer break-all sm:break-words hover:scale-105 transition-all flex group relative shadow-md hover:shadow-gray-400/90 p-2 gap-2'>
        {/* Icon / Image */}
        <div className='bg-white h-full w-auto aspect-square flex rounded-lg items-center justify-center'>
          <span className='text-2xl'>{icon}</span>
        </div>
        {/* Content box */}
        <div className='flex flex-col h-full w-full text-left'>
          {/* Title and Description Box */}
          <div className='flex flex-col grow justify-center self-stretch  h-full'>
            {/* Title */}
            <h3 className={`font-semibold ${titleFontSize} leading-0`}>
              {title}
            </h3>
            {/* Description */}
            {description && (
              <p className='text-[10px] break-normal leading-3 line-clamp-2'>
                {description}
              </p>
            )}
          </div>
          {/* Tags & Arrow*/}
          <div className={` flex justify-between items-end`}>
            <p className='text-[8px] leading-0 '>{tags.join(' - ')}</p>
            {/* <ArrowLongRightIcon className='h-[20px] w-[20px] absolute bottom-[2px] right-1' /> */}
          </div>
        </div>
      </button>
    </a>
  );
};

export default CustomButton;
