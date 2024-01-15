'use client';

const TableSkeleton = (): JSX.Element => {

  let widths = [36,52,28,68,36,28,28]

  return (
    <div className="">
        {
          Array.from({ length: 4 }).map((_, index) => (
            <div key={0} className="flex animate-pulse border border-[#D3D3D3] bg-white py-7">
            {
                widths.map((width)=>(
                    <div key={0} className={`h-5 bg-gray-200 rounded-full  ${(width != 68) ? `w-${width}` : 'w-[272px]'} dark:bg-gray-700  mx-2`}></div>
                    ))
                }
            </div>
          ))
        }
        <div className="flex animate-pulse bg-white rounded-b-md border border-[#D3D3D3] py-7">
            {
                widths.map((width)=>(
                    <div key={0} className={`h-5 bg-gray-200 rounded-full  ${(width != 68) ? `w-${width}` : 'w-[272px]'} dark:bg-gray-700  mx-2`}></div>
                    ))
            }
        </div>
    </div>


  );
};

export default TableSkeleton;
