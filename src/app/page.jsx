'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MobileModal from '../components/MobileModal';
import ProfileSection from '../components/ProfileSection';
import LinksSection from '../components/LinksSection';
import useScrolling from '../hooks/useScrolling.js';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const [showMobileModal, setShowMobileModal] = useState(false);

  const scrollTop = useScrolling();
  const showHeader = scrollTop > 45;

  return (
    <>
      {/* Header Top Bar */}
      <Header
        isShowing={showHeader}
        onButtonClick={() => setShowMobileModal(true)}
      />
      {showMobileModal && (
        <MobileModal closeModal={() => setShowMobileModal(false)} />
      )}

      {/* Page Container */}
      <div className='flex flex-col items-center overflow-x-hidden w-full h-full min-h-[100lvh] antialiased pt-[64px] px-[16px] pb-[32px] z-0'>
        {/* Content Box */}
        <main className='max-w-[680px] w-full h-full mx-auto'>
          {/* PROFILE SECTION */}
          <ProfileSection />

          {/* SEARCH SECTION */}
          <div className='flex items-center mt-4 gap-2'>
            <div className='w-full flex items-center gap-2 bg-gray-100 rounded-md pl-2'>
              <MagnifyingGlassIcon className='h-6 w-6' />
              <input
                placeholder='Search for links here'
                className='w-full h-full bg-transparent p-2 outline-none'
              />
            </div>
            <AdjustmentsHorizontalIcon className='w-6 h-6' />
          </div>

          {/* LINKS SECTION */}
          <LinksSection />
        </main>
      </div>
    </>
  );
};

export default HomePage;

{
  /* 


</div>

// {/* LINKS SECTION 
<div className='flex flex-col w-full  max-w-[680px] mx-auto gap-4 mt-[32px]'>

</div> 
*/
}
