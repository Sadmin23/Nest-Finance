import React from 'react';

const FilterTag = ({ text }: { text: string }) => {
  return (
    <button className='rounded-md bg-[#F0EBFF] py-1 px-2 text-[#1A1A1A] leading-3 text-xs font-normal'>
      {text}
    </button>
  );
};

export default FilterTag;
