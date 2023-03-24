import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
export function SearchAndFilter({ originalData, setNewData }) {
  // When someone types in the search activate this function
  const handleInput = (input) => {
    const text = input.target.value?.toLowerCase();
    const filteredLinks = originalData.filter((link) => {
      const matchesTitle = link.title?.toLowerCase().includes(text);
      const matchesDescription = link.description?.toLowerCase().includes(text);
      const matchesTags = link.tags.join(' ')?.toLowerCase().includes(text);
      return matchesTitle || matchesDescription || matchesTags;
    });
    // Update our data
    setNewData(filteredLinks);
  };
  return (
    <div className='flex items-center mt-4 gap-2'>
      <div className='w-full flex items-center gap-2 bg-gray-100 rounded-md pl-2'>
        <MagnifyingGlassIcon className='h-6 w-6' />
        <input
          placeholder='Search for links here'
          className='w-full h-full bg-transparent p-2 outline-none'
          onChange={handleInput}
        />
      </div>
      <AdjustmentsHorizontalIcon className='w-6 h-6' />
    </div>
  );
}
