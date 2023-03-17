import React from 'react';

const ProfileSection = () => {
  return (
    <div className='flex flex-col items-center w-full h-full cursor-default'>
      {/* Image */}
      <div className='max-w-[96px] max-h-[96px]'>
        <img
          src={
            'https://d1fdloi71mui9q.cloudfront.net/aobYU4TDSXOOdof3MYND_9TvbS17m6tobN8lY'
          }
          className={
            'object-contain block rounded-full ring-2 ring-offset-2 ring-blue-600 hover:ring-blue-500 hover:scale-105 transition-all cursor-pointer'
          }
        />
      </div>
      {/* Headline tag */}
      <h1 className='font-bold text-[20px] mt-[16px] mx-[12px] max-w-full leading-[1.5] truncate '>
        @isakanderson
      </h1>
      {/* Description */}
      <p className='mt-[4px] text-center text-[14px] px-[40px] font-medium'>
        Welcome! Below are links to my favorite resources!
      </p>
    </div>
  );
};

export default ProfileSection;
