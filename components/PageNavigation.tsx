'use client';

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

  const siblingCount = type === 1 ? 3 : 1;

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
  const lastPageIndex = size;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = range(1, leftItemCount);

    pages = [...leftRange, -1, size];
  }
  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount;
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

  const pageNumbers: number[] = range(1,10); 

  return (
    <div className="flex">
      <h2 className="leading-5">Showing {l} to {f} of {dataSize} entries</h2>
      <div className='flex space-x-1 ml-auto'>
          <button onClick={handlePrevPage} className='text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Prev</button>
          {pages.map((number, index) => (
            number === -1 ? (
              <div key={index}>...</div>
            ) : (
              <button
                key={index}
                onClick={() => changePage(number)}
                className={number === curPage
                  ? 'bg-[#53389E] text-white px-2 h-7'
                  : 'bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'
                }
              >
                {number}
              </button>
            )
          ))}

          <button onClick={handleNextPage} className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Next</button>
      </div>
    </div>
  );
};

export default PageNavigation;
