import React from 'react';

const SmallButton = ({ text }: { text: string }) => {
  return (
    <button className='h-12 min-w-min rounded-md bg-[#D6BBFB] py-1 px-4 text-[18px]'>
      {text}
    </button>
  );
};

export default SmallButton;
