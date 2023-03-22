import { ShareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import LinkCopyFooter from '../LinkCopyFooter';
import ShareItem from '../ShareItem';

const SocialOptions = ({ showSocialOptions, toggleSocialOptions }) => {
  return (
    <div className=''>
      {!showSocialOptions && (
        <ShareItem
          Icon={ShareIcon}
          onClick={toggleSocialOptions}
          text={'Share my Profile'}
        />
      )}
      {showSocialOptions && (
        <>
          <div className='mb-2'>
            <ShareItem Icon={ShareIcon} text={'Share on Facebook'} />
            <ShareItem Icon={ShareIcon} text={'Share on LinkedIn'} />
            <ShareItem Icon={ShareIcon} text={'Share on Twitter'} />
            <ShareItem Icon={ShareIcon} text={'Share via WhatsApp'} />
            <ShareItem Icon={ShareIcon} text={'Share via Email'} />
          </div>
          <LinkCopyFooter className={''} />
        </>
      )}
    </div>
  );
};

export default SocialOptions;
