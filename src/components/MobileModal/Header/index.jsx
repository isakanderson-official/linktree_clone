import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Header = ({ text, onClose }, props) => {
  return (
    <div className='flex items-center justify-between cursor-default'>
      <div />
      <h1 className='text-center font-bold'>{text}</h1>
      <div
        className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-all'
        onClick={onClose}
      >
        <XMarkIcon className={'w-5 h-5'} />
      </div>
    </div>
  );
};

export default Header;
