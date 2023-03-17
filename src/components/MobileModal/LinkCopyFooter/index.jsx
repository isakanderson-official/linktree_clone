import { LinkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

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

export default LinkCopyFooter;
