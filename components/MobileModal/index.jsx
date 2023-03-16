import React, { useState } from 'react';
import {
  XMarkIcon,
  ShareIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const Header = (props) => {
  return (
    <div className='flex items-center justify-between' {...props}>
      <div />
      <h1 className='text-center font-bold p-4'>{props.centerText}</h1>
      <div className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-all'>
        <XMarkIcon onClick={props.onClose} className={'w-[16px] h-[16px]'} />
      </div>
    </div>
  );
};

const ShareItem = (props) => {
  return (
    <div
      {...props}
      className={'py-4 flex w-full justify-between items-center cursor-pointer'}
    >
      <div className='flex gap-5 items-center'>
        <ShareIcon className='h-5 w-5' />
        <p className='font-bold'>Share my profile</p>
      </div>
      <ChevronRightIcon className='h-5 w-5' />
    </div>
  );
};

const SocialOptions = (props) => {
  return <></>;
};

const MobileModal = ({ closeModal }) => {
  const [showSocialOptions, setShowSocialOptions] = useState(false);
  return (
    // Background
    <div className='fixed w-full h-full bg-gray-400/70 z-50 flex items-end'>
      {/* Modal */}
      <div className='w-full h-auto bg-white rounded-t-2xl bottom-0 p-5'>
        {/* Header */}
        <Header
          onClose={closeModal}
          centerText={showSocialOptions ? 'Share my profile' : '@isakanderson'}
        />
        {!showSocialOptions && (
          <ShareItem onClick={() => setShowSocialOptions(true)} />
        )}
        {showSocialOptions && <SocialOptions />}
      </div>
    </div>
  );
};

export default MobileModal;
