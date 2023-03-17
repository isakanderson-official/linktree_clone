import React from 'react';
import Button from './Button';

const Header = ({ isShowing, onButtonClick }) => {
  const activeHeaderStyles = isShowing
    ? 'bg-[#ffffff80] backdrop-blur-[10px] border-[#ebeef1]'
    : ' border-[#0000ff00]';

  const activeHeaderItemStyles = isShowing ? '' : 'opacity-0';

  return (
    <>
      <header
        className={`fixed 
        w-[calc(100%-24px)] 
        md:max-w-3xl
        left-0 right-0 mx-auto my-[8px] py-[8px] px-[12px] z-10 top-0 flex flex-row-reverse items-center justify-between rounded-[72px] border-[1px] ${activeHeaderStyles}`}
        onClick={() => {
          'Header Clicked';
        }}
      >
        {/* Botton */}
        <Button isDark={isShowing} onClick={onButtonClick} />

        <div>
          <p className={`font-semibold ${activeHeaderItemStyles}`}>
            @isakanderson
          </p>
        </div>
        <div className='max-w-[44px] max-h-[44px]'>
          <img
            src={
              'https://d1fdloi71mui9q.cloudfront.net/aobYU4TDSXOOdof3MYND_9TvbS17m6tobN8lY'
            }
            className={`object-contain block rounded-full ${activeHeaderItemStyles} `}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
