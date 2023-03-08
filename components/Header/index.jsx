import { Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import DotsSvg from '../DotsSvg';

const Button = () => {
  return (
    <button className='w-[40px] h-[40px] bg-[#f0f0f0] dark:bg-black hover:bg-[#ebebeb] transition-all duration-[150ms] rounded-full flex items-center justify-center border-[1px] border-[#e3e3e3] dark:border-black'>
      <DotsSvg className='align-middle dark:text-white' />
    </button>
  );
};

const Header = ({ isShowing }) => {
  return (
    <>
      <Transition
        as={Fragment}
        show={isShowing}
        enter='transition-opacity  duration-150'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity  duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='fixed w-[calc(100%-24px)] left-0 right-0 mx-auto my-[8px] py-[8px] px-[12px] z-10 top-0 flex flex-row-reverse items-center justify-between bg-[#ffffff80] rounded-[72px] backdrop-blur-[10px] border-[1px] border-[#ebeef1]'>
          {/* Botton */}
          <Button />
          <div>
            <p className='font-semibold'>@isakanderson</p>
          </div>
          <div className='max-w-[44px] max-h-[44px]'>
            <img
              src={
                'https://d1fdloi71mui9q.cloudfront.net/aobYU4TDSXOOdof3MYND_9TvbS17m6tobN8lY'
              }
              className={'object-contain block rounded-full'}
            />
          </div>
        </div>
      </Transition>
      <div className='fixed w-[calc(100%-24px)] left-0 right-0 mx-auto my-[8px] py-[8px] px-[12px] z-10 top-0 flex flex-row-reverse items-center justify-between bg-[#ffffff80] rounded-[72px] backdrop-blur-[10px] border-[1px] border-[#ebeef1]'>
        <Button />
      </div>
    </>
  );
};

export default Header;
