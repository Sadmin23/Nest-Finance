'use client';

import { useEffect } from "react";

const PageNavigation = ({ l, f, curPage, dataSize, entrySize }: { l: number, f:number, curPage: number, dataSize: number, entrySize: number }): JSX.Element => {

  let size = Math.ceil(dataSize/entrySize)

  const pageNumbers: number[] = Array.from({ length: size }, (_, index) => index + 1);  

  return (
    <div className="flex mx-40 mt-9 mb-32">
      <h2 className="leading-5">Showing {l} to {f} of {dataSize} entries</h2>
      <div className='flex space-x-1 ml-auto'>
      <button className='text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Prev</button>
                <button className='text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>First</button>
                {pageNumbers.map((number, index) => (
                  <button
                    key={index}
                    className={number === curPage
                      ? 'bg-[#53389E] text-white px-2 h-7'
                      : 'bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'
                    }
                  >
                    {number}
                  </button>
                ))}
      </div>
    </div>
  );
};

export default PageNavigation;
