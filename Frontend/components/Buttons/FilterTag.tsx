import React from 'react';
import Cross from '../SVG/Cross';
import { findLongName } from '@/app/data';

interface SelectOptionProps {
  type: number;
  text: string;
  handleChange: (option: string, category: number) => void;
  handleCheckbox: (option: string) => void
}

const FilterTag = ({ type, text, handleChange, handleCheckbox }: SelectOptionProps): JSX.Element => {
  const isRightmost = type === 2;

  const longName = findLongName(text)

  return (
    <div className={`rounded-md flex bg-[#F0EBFF] py-1 px-2 text-[#1A1A1A] leading-3 text-xs font-normal ${isRightmost ? 'ml-auto' : 'mr-1'}`}>
      {text}
      {(type ===1) ? 
        <button onClick={() => {handleChange(longName, 1); handleCheckbox(longName)}}>
          <Cross/> 
        </button>
        : ''}
    </div>
  );
};

export default FilterTag;