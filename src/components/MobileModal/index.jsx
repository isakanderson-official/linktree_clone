import React, { useState } from 'react';
import Header from './Header';
import SocialOptions from './SocialOptions';

const MobileModal = ({ closeModal }) => {
  const [showSocialOptions, setShowSocialOptions] = useState(false);
  const handleSocialToggle = () => setShowSocialOptions(true);

  return (
    <>
      {/* Container */}
      <div className='fixed w-full h-full flex items-end md:items-center md:justify-center z-[100]'>
        {/* Modal */}
        <div className='w-full md:w-[384px] bg-white h-auto rounded-t-2xl md:rounded-2xl bottom-0 p-5 '>
          {/* Header */}
          <Header
            onClose={closeModal}
            text={showSocialOptions ? 'Share my Website' : '@isakanderson'}
          />
          {/* Dynamic Social Options */}
          <SocialOptions
            toggleSocialOptions={handleSocialToggle}
            showSocialOptions={showSocialOptions}
          />
        </div>
      </div>
      {/* Background */}
      <div
        className='fixed w-full h-full bg-gray-700/70 z-50 flex items-end'
        onClick={closeModal}
      />
    </>
  );
};

export default MobileModal;
