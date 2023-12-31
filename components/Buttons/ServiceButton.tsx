import React from 'react';

const ServiceButton = ({ text }: { text: string }) => {
  return (
    <button className='h-9 min-w-min rounded-md bg-[#53389E] text-white py-2 px-3 text-sm font-medium leading-5'>
      {text}
    </button>
  );
};

export default ServiceButton;
