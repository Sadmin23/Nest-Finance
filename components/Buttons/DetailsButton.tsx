import React from 'react';

const DetailsButton = () => {
  return (
    <div className='rounded-md border-2 border-[#CAC1E1] text-[#53389E] bg-white text-xs flex px-4 py-2 font-medium mx-11 mt-6'>
        Details
        <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M5.25 9.75L9 13.5L12.75 9.75" stroke="#53389E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.25 4.5L9 8.25L12.75 4.5" stroke="#53389E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  );
};

export default DetailsButton;