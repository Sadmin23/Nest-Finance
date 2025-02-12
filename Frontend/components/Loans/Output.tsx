import React from 'react';
import TakaPurple from '../Icons/TakaPurple';

const Output = ({ label, value }: { label: string, value: number }) => {

  const formattedNumber = Intl.NumberFormat("en-US").format(value);

  return (
    <div className="w-52 h-[72px] mx-auto mt-10 lg:mt-0 rounded-md border pl-2 border-[#8C7ABE]">
        <div className='flex items-center mt-2'>
            <TakaPurple/>
            <h1 className='text-xl ml-1 font-semibold text-[#53389E]'>
                {formattedNumber}
            </h1>
        </div>
        <h2 className='text-[#1A1A1A] text-xs'>{label}</h2>
    </div>
  );
};

export default Output;
