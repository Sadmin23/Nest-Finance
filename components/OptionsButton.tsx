import React from 'react';

const OptionsButton = ({ text }: { text: string }) => {
  return (
    <button className='h-7 min-w-min rounded-md bg-[#F6F2FF] text-[#1D2939] py-1 px-3 text-sm leading-5 border-2 border-[#D2C1FF]'>
      {text}
    </button>
  );
};

export default OptionsButton;
