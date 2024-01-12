import React from 'react';
import TakaPurple from '../Icons/TakaPurple';

const Output = ({ label, value }: { label: string, value: number }) => {
  return (
    <div className="w-48 h-[72px] ml-16 rounded-md border pl-7 border-[#8C7ABE]">
        <div className='flex items-center mt-2'>
            <TakaPurple/>
            <h1 className='text-xl ml-2 font-semibold text-[#53389E]'>
                {value}
            </h1>
        </div>
        <h2 className='text-[#1A1A1A] text-xs'>{label}</h2>
    </div>
  );
};

export default Output;
