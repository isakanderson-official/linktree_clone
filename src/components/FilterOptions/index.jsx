import { Popover, Transition } from '@headlessui/react';
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';

const FilterOptions = ({ tags }) => {
  const section = {
    id: 'category',
    name: 'Category',
    options: tags,
  };

  const sectionIdx = 1;
  return (
    <Popover
      as='div'
      id={`desktop-menu-1`}
      className='relative inline-block text-left'
    >
      <div>
        <Popover.Button className='group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
          {/* Icon here */}
          <AdjustmentsHorizontalIcon className='w-6 h-6 cursor-pointer' />
          {sectionIdx === 0 ? (
            <span className='ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700'>
              1
            </span>
          ) : null}
          <ChevronDownIcon
            className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
            aria-hidden='true'
          />
        </Popover.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Popover.Panel className='absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <form className='space-y-4'>
            {section.options.map((option, optionIdx) => (
              <div key={option} className='flex items-center'>
                <input
                  id={`filter-${section.id}-${optionIdx}`}
                  name={`${section.id}[]`}
                  defaultValue={option}
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                />
                <label
                  htmlFor={`filter-${section.id}-${optionIdx}`}
                  className='ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900'
                >
                  {option}
                </label>
              </div>
            ))}
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default FilterOptions;
