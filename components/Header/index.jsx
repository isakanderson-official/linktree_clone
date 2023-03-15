import { Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import DotsSvg from '../DotsSvg';

const Button = ({ isDark }) => {
  const buttonBgStyles = isDark
    ? 'bg-black border-black'
    : 'bg-[#f0f0f0] border-[#e3e3e3]';

  const buttonDotsStyles = isDark ? 'text-white' : 'text-black';

  return (
    <button
      className={`w-[40px] h-[40px]  hover:opacity-75 transition-all duration-[150ms] rounded-full flex items-center justify-center border-[1px] ${buttonBgStyles}`}
    >
      <DotsSvg className={`align-middle ${buttonDotsStyles}`} />
    </button>
  );
};

const Header = ({ isShowing }) => {
  const activeHeaderStyles = isShowing
    ? 'bg-[#ffffff80] backdrop-blur-[10px] border-[#ebeef1]'
    : ' border-[#0000ff00]';

  const activeHeaderItemStyles = isShowing ? '' : 'opacity-0';

  return (
    <>
      {/* <Transition
        as={Fragment}
        show={isShowing}
        enter='transition-opacity duration-150'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      > */}
      <div
        className={`fixed w-[calc(100%-24px)] left-0 right-0 mx-auto my-[8px] py-[8px] px-[12px] z-10 top-0 flex flex-row-reverse items-center justify-between rounded-[72px] border-[1px] ${activeHeaderStyles}`}
      >
        {/* Botton */}
        <Button isDark={isShowing} />
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
      </div>
      {/* </Transition> */}
    </>
  );
};

export default Header;
