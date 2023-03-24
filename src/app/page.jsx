'use client';
import { SearchAndFilter } from '../components/SearchAndFilter';

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MobileModal from '../components/MobileModal';
import ProfileSection from '../components/ProfileSection';
import LinksSection from '../components/LinksSection';
import useScrolling from '../hooks/useScrolling.js';
import linksFile from '../../links';
import PopoverOptions from '../components/FilterOptions';

const HomePage = () => {
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [links, setLinks] = useState(linksFile);
  const scrollTop = useScrolling();
  const showHeader = scrollTop > 45;

  useEffect(() => {}, []);

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
          <SearchAndFilter originalData={linksFile} setNewData={setLinks} />

          {/* LINKS SECTION */}
          <LinksSection data={links} />
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
