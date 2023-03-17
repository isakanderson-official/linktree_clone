import { ShareIcon } from '@heroicons/react/24/outline';
import React from 'react';

const CustomButton = ({ children, link }) => {
  return (
    <a href={link || '#'} target={'_blank'}>
      <button className='bg-slate-900 text-white rounded-[14px] w-full text-center cursor-pointer text-[14px] break-all sm:break-words overflow-hidden hover:scale-105 transition-all  flex items-center group relative shadow-md hover:shadow-gray-400/90'>
        <p className='leading-[1.5] w-full font-medium text-[14px] md:text-[16px] px-[44px] py-[16px]'>
          {children}
        </p>
        <div className='opacity-0 group-hover:opacity-100 absolute hover:bg-slate-700 transition-all rounded-full right-3 p-3'>
          <ShareIcon className='w-4 h-4' />
        </div>
      </button>
    </a>
  );
};

export default CustomButton;
