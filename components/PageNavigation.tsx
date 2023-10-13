'use client';

const PageNavigation = (): JSX.Element => {
  return (
    <div className='flex space-x-1 mr-40 my-16'>
        <button className='bg-[#E1E1E1] text-white ml-auto px-2 h-7'>Prev</button>
        <button className='bg-[#E1E1E1] text-white px-2 h-7'>First</button>
        <button className='bg-[#53389E] text-white w-[22px] px-2 h-7'>1</button>
        <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal w-[26px] px-2 h-7'>2</button>
        <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal w-[26px] px-2 h-7'>3</button>
        <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal w-[26px] px-2 h-7'>4</button>
        <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal w-[26px] px-2 h-7'>5</button>
        <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Next</button>
    </div>
  );
};

export default PageNavigation;