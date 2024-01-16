import React from 'react';
import Cross from '../SVG/Cross';

const FilterTag = ({ type, text }: { type : number, text: string }) => {
  const isRightmost = type === 2;

  return (
    <button className={`rounded-md flex bg-[#F0EBFF] py-1 px-2 text-[#1A1A1A] leading-3 text-xs font-normal ${isRightmost ? 'ml-auto' : 'mr-1'}`}>
      {text}
      <Cross/>
    </button>
  );
};

export default FilterTag;