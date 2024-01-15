'use client';

import { number } from "zod";

type PageNavigationProps = {
  l: number;
  f: number;
  curPage: number;
  dataSize: number;
  entrySize: number;
  type: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  changePage: (n: number) => void;
};

const range = (start: number, end: number): number[] => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const PageNavigation: React.FC<PageNavigationProps> = ({ 
  l, 
  f, 
  curPage, 
  dataSize, 
  entrySize,
  type,
  handleNextPage,
  handlePrevPage,
  changePage
}) => {

  const siblingCount = 1;

  let pages: number[]

  let size = Math.ceil(dataSize/entrySize)

  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= size) {
    pages = range(1, size);
  }

  const leftSiblingIndex = Math.max(curPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    curPage + siblingCount,
    size
  );

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < size - 2;

  const firstPageIndex = 1;


  
  const lastPageIndex = size ? size : 1;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 2 + 2 * siblingCount;
    let leftRange = range(1, leftItemCount);

    pages = [...leftRange, -1, size];
  }
  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 2 + 2 * siblingCount;
    let rightRange = range(
      size - rightItemCount + 1,
      size
    );
    pages = [firstPageIndex, -1, ...rightRange];
  }
  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    pages = [firstPageIndex, -1, ...middleRange, -1, lastPageIndex];
  }     

/*END*/

  return (
    <div className="flex items-center">
      <h2 className="leading-5">Showing {l} to {f} of {dataSize} entries</h2>
      <div className='flex ml-auto rounded-[100px] '>
          <button onClick={handlePrevPage} className={`leading-normal px-5 h-11 bg-[#F0EBFF] rounded-l-[100px] ${(curPage === 1)? 'text-[#BCBCBC]' : 'text-[#53389E]'}`}>Prev</button>
          {pages.map((number, index) => (
            number === -1 ? (
              <div key={index} className="bg-[#F0EBFF] flex items-end pb-3 space-x-2">
                <div className="bg-[#F0EBFF]">.</div>
                <div className="bg-[#F0EBFF]">.</div>
                <div className="bg-[#F0EBFF]">.</div>
              </div>
            ) : (
              <button
                key={index}
                onClick={() => changePage(number)}
                className={`px-4 h-11 leading-normal ${number === curPage
                  ? 'bg-[#53389E] text-white'
                  : 'text-[#53389E] bg-[#F0EBFF]'}
                `}
              >
                {number}
              </button>
            )
          ))}

          <button onClick={handleNextPage} className={`bg-[#F0EBFF] leading-normal px-5 h-11 rounded-r-[100px] ${(curPage === lastPageIndex)? 'text-[#BCBCBC]' : 'text-[#53389E]'}`}>Next</button>
      </div>
    </div>
  );
};

export default PageNavigation;
