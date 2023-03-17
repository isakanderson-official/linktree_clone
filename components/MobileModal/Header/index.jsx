import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Header = (props) => {
  return (
    <div
      className='flex items-center justify-between cursor-default'
      {...props}
    >
      <div />
      <h1 className='text-center font-bold p-4'>{props.centerText}</h1>
      <div className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-all'>
        <XMarkIcon onClick={props.onClose} className={'w-[16px] h-[16px]'} />
      </div>
    </div>
  );
};

export default Header;
