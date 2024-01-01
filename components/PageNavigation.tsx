'use client';

type PageNavigationProps = {
  l: number;
  f: number;
  curPage: number;
  dataSize: number;
  entrySize: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleFirst: () => void;
  handleLast: () => void;
  changePage: (n: number) => void;
};

const PageNavigation: React.FC<PageNavigationProps> = ({ 
  l, 
  f, 
  curPage, 
  dataSize, 
  entrySize, 
  handleNextPage,
  handlePrevPage,
  handleFirst,
  handleLast,
  changePage
}) => {

  let size = Math.ceil(dataSize/entrySize)

  const pageNumbers: number[] = Array.from({ length: size }, (_, index) => index + 1);  

  return (
    <div className="flex">
      <h2 className="leading-5">Showing {l} to {f} of {dataSize} entries</h2>
      <div className='flex space-x-1 ml-auto'>
          <button onClick={handleFirst} className='text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>First</button>
          <button onClick={handlePrevPage} className='text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Prev</button>
          {pageNumbers.map((number, index) => (
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
          ))}
          <button onClick={handleNextPage} className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Next</button>
          <button onClick={handleLast} className='text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Last</button>
      </div>
    </div>
  );
};

export default PageNavigation;
