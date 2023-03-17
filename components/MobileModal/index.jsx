import React, { useState } from 'react';
import {
  XMarkIcon,
  ShareIcon,
  ChevronRightIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

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

const ShareItem = ({ Icon, text, ...props }) => {
  return (
    <div
      {...props}
      className={'py-4 flex w-full justify-between items-center cursor-pointer'}
    >
      <div className='flex gap-5 items-center'>
        <Icon className='h-5 w-5' />
        <p className='font-bold'>{text}</p>
      </div>
      <ChevronRightIcon className='h-5 w-5' />
    </div>
  );
};

const LinkCopyFooter = () => {
  const websiteUrl = location.host;
  const [copyText, setCopyText] = useState('Copy');
  const copyTextStyle = copyText === 'Copy' ? '' : 'text-blue-800';
  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopyText('Copied!');
    setTimeout(() => setCopyText('Copy'), 1000);
  };
  return (
    <div
      className='w-full border-[1px] rounded-md border-gray-300 bg-gray-50 hover:bg-gray-100 flex items-center justify-between py-2 h-[58px] px-4 transition-all cursor-pointer'
      onClick={handleCopyLink}
    >
      {/* Icon */}
      <LinkIcon className='w-5 h-5' />
      {/* Link Text */}
      <p className='truncate max-w-56'>{`${location.host} `}</p>
      {/* Copy Button */}
      <p className={`w-[70px] text-center -mr-3 ${copyTextStyle}`}>
        {copyText}
      </p>
    </div>
  );
};

const SocialOptions = (props) => {
  return (
    <>
      <ShareItem Icon={ShareIcon} text={'Share on Facebook'} />
      <ShareItem Icon={ShareIcon} text={'Share on LinkedIn'} />
      <ShareItem Icon={ShareIcon} text={'Share on Twitter'} />
      <ShareItem Icon={ShareIcon} text={'Share via WhatsApp'} />
      <ShareItem Icon={ShareIcon} text={'Share via Email'} />
      <LinkCopyFooter />
    </>
  );
};

const MobileModal = ({ closeModal }) => {
  const [showSocialOptions, setShowSocialOptions] = useState(false);
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
        {!showSocialOptions && (
          <ShareItem
            Icon={ShareIcon}
            onClick={() => setShowSocialOptions(true)}
            text={'Share my Profile'}
          />
        )}
        {showSocialOptions && <SocialOptions />}
      </div>
    </div>
  );
};

export default MobileModal;
