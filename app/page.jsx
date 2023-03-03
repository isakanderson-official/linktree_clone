import React from 'react';
import CustomButton from '../components/CustomButton';

const HomePage = () => {
  return (
    <>
      {/* Base Styles */}
      <div className='flex flex-col items-center overflow-x-hidden w-full h-full min-h-[100lvh] antialiased'>
        {/* Container */}
        <div className='flex flex-1 flex-col justify-between pt-[64px] px-[16px] pb-[32px] h-full w-full '>
          {/* Content Box */}
          <div className='max-w-[680px] w-full h-full mx-auto'>
            {/* PROFILE SECTION */}
            <div className='flex flex-col items-center w-full h-full'>
              {/* Image */}
              <div className='max-w-[96px] max-h-[96px]'>
                <img
                  src={
                    'https://d1fdloi71mui9q.cloudfront.net/aobYU4TDSXOOdof3MYND_9TvbS17m6tobN8lY'
                  }
                  className={'object-contain block rounded-full'}
                />
              </div>
              {/* Headline tag */}
              <h1 className='font-bold text-[20px] mt-[16px] mx-[12px] max-w-full leading-[1.5] truncate'>
                @isakanderson
              </h1>
              {/* Description */}
              <p className='mt-[4px] text-center text-[14px] px-[40px] font-medium'>
                Welcome! Below are links to my favorite resources!
              </p>
            </div>
            {/* LINKS SECTION */}
            <div className='mt-[32px] w-full flex flex-col gap-4'>
              <CustomButton>My Recomended Tech</CustomButton>
              <CustomButton>Instagram</CustomButton>
              <CustomButton>Youtube</CustomButton>
              <CustomButton>My Air Fryer!!</CustomButton>
            </div>
          </div>
          {/* <div className=' w-[96px] h-[96px] rounded-full overflow-hidden mx-[12px]'></div> */}
        </div>
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
