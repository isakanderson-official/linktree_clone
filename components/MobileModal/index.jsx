import React, { useState } from 'react';
import Header from './Header';
import SocialOptions from './SocialOptions';

const MobileModal = ({ closeModal }) => {
  const [showSocialOptions, setShowSocialOptions] = useState(false);

  const handleSocialToggle = () => setShowSocialOptions(true);
  return (
    // Background
    <div className='fixed w-full h-full bg-gray-700/70 z-50 flex items-end'>
      {/* Modal */}
      <div className='w-full h-auto bg-white rounded-t-2xl bottom-0 p-5'>
        {/* Header */}
        <Header
          onClose={closeModal}
          centerText={showSocialOptions ? 'Share my Website' : '@isakanderson'}
        />
        {/* Dynamic Social Options */}
        <SocialOptions
          toggleSocialOptions={handleSocialToggle}
          showSocialOptions={showSocialOptions}
        />
      </div>
    </div>
  );
};

export default MobileModal;
