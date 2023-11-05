'use client';

const PageNavigation = ({ n, m }: { n: number, m: number }): JSX.Element => {

  let x = 10*(n-1)+1
  let y = 10*(n)

  return (
    <div className="flex mx-40 mt-9 mb-32">
      <h2 className="leading-5">Showing {x} to {y} of {m} entries</h2>
      <div className='flex space-x-1 ml-auto'>
          <button className='bg-[#E1E1E1] text-white ml-auto px-2 h-7'>Prev</button>
          <button className='bg-[#E1E1E1] text-white px-2 h-7'>First</button>
          <button className='bg-[#53389E] text-white w-[22px] px-2 h-7'>1</button>
          <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal w-[26px] px-1 h-7'>2</button>
          <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal w-[26px] px-1 h-7'>3</button>
          <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal w-[26px] px-1 h-7'>4</button>
          <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal w-[26px] px-1 h-7'>5</button>
          <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Next</button>
      </div>
    </div>
  );
};

export default PageNavigation;