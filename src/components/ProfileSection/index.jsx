import React from 'react';

const ProfileSection = () => {
  return (
    <div className='flex items-center gap-4 w-full h-[100px] cursor-default p-1'>
      {/* Image */}

      <img
        src={
          'https://d1fdloi71mui9q.cloudfront.net/aobYU4TDSXOOdof3MYND_9TvbS17m6tobN8lY'
        }
        className={
          'object-contain w-[100px] h-[100px] rounded-full ring-2 ring-offset-2 ring-blue-600 hover:ring-blue-500 hover:scale-105 transition-all cursor-pointer'
        }
      />

      <div>
        {/* Headline tag */}
        <h1 className='font-bold text-12'>Isak Anderson</h1>
        {/* Description */}
        <p className='text-[11px] font-medium line-clamp-5'>
          Welcome to my links page. Below I have all the links to products /
          services that I recommend. Feel free to use the search feature below
          to quickly find what you are looking for. Enjoy 😀
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
