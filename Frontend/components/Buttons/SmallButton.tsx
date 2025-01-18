import React from 'react';

const SmallButton = ({ text }: { text: string }) => {
  return (
    <button className='h-8 min-w-min rounded-md bg-[#D6BBFB] py-1 px-4 text-[#101010] leading-6'>
      {text}
    </button>
  );
};

export default SmallButton;
