import Link from 'next/link';
import React from 'react';

const CustomButton = ({ children, pageProps }) => {
  return (
    <Link
      {...pageProps}
      className='bg-[#2a3235]  py-[16px] text-white rounded-[14px] w-full text-center cursor-pointer text-[14px] break-all sm:break-words overflow-hidden'
      href={'#'}
    >
      <p className='leading-[1.5] w-full font-medium text-[14px] px-[44px]'>
        {children}
      </p>
    </Link>
  );
};

export default CustomButton;
