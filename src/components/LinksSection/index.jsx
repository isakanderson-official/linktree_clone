import React from 'react';
import CustomButton from '../CustomButton';
import links from '../../../links';

const LinksSection = () => {
  return (
    <div className='mt-[32px] w-full flex flex-col gap-4'>
      {links.map((link) => {
        return <CustomButton key={link.title} data={link} />;
      })}

      {/* <CustomButton>Instagram</CustomButton>
      <CustomButton>Youtube</CustomButton>
      <CustomButton>My Air Fryer!!</CustomButton> */}
    </div>
  );
};

export default LinksSection;
