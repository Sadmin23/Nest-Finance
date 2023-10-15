import React from 'react';

const OptionButton = ({ text }: { text: string }) => {
  return (
    <button className='h-7 min-w-min rounded-md bg-[#D6BBFB] text-[#1D2939] py-1 px-3 text-sm leading-5'>
      {text}
    </button>
  );
};

export default OptionButton;
