'use client';

const TableSkeleton = ({ widths }: { widths: number[] }): JSX.Element => {

  return (
    <div className="">
        {
          Array.from({ length: 4 }).map((_, index) => (
            <div key={0} className="flex animate-pulse border border-[#D3D3D3] bg-white py-7">
            {
                widths.map((width)=>(
                    <div key={0} className={`h-5 bg-gray-200 rounded-full  ${(width == 92) ? 'w-[368px]' : (width == 68) ? 'w-[272px]' : `w-${width}`} dark:bg-gray-700  mx-2`}></div>
                    ))
                }
            </div>
          ))
        }
        <div className="flex animate-pulse bg-white rounded-b-md border border-[#D3D3D3] py-7">
            {
              widths.map((width)=>(
                <div key={0} className={`h-5 bg-gray-200 rounded-full  ${(width == 92) ? 'w-[368px]' : (width == 68) ? 'w-[272px]' : `w-${width}`} dark:bg-gray-700  mx-2`}></div>
              ))
            }
        </div>
    </div>


  );
};

export default TableSkeleton;
