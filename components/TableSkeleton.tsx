'use client';

const TableSkeleton = ({ type }: { type: number }): JSX.Element => {

  let skeletonBranch = 

  <div key={0} className="flex animate-pulse border-b border-x border-[#D3D3D3] bg-white py-7">
    <div key={0} className="h-5 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-52 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-28 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-[272px] bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-28 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-28 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
  </div>

  let skeletonATM = 

  <div key={0} className="flex animate-pulse border-b border-x border-[#D3D3D3] bg-white py-7">
      <div key={0} className="h-5 w-[304px] bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
      <div key={0} className="h-5 w-48 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
      <div key={0} className="h-5 w-[304px] bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
      <div key={0} className="h-5 w-40 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
      <div key={0} className="h-5 w-40 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
  </div>

  let branchBottom = 
  
  <div key={0} className="flex animate-pulse border-b border-x rounded-b-md border-[#D3D3D3] bg-white py-7">
    <div key={0} className="h-5 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-52 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-28 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-[272px] bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-28 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
    <div key={0} className="h-5 w-28 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
  </div>

  let ATMBottom = 

  <div key={0} className="flex animate-pulse border-b border-x rounded-b-md border-[#D3D3D3] bg-white py-7">
      <div key={0} className="h-5 w-[304px] bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
      <div key={0} className="h-5 w-48 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
      <div key={0} className="h-5 w-[304px] bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
      <div key={0} className="h-5 w-40 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
      <div key={0} className="h-5 w-40 bg-gray-200 rounded-full dark:bg-gray-700 mx-2"></div>
  </div>

  return (
    <div className="">
        {
          Array.from({ length: 4 }).map((_, index) => (
              type ? skeletonBranch : skeletonATM
          ))
        }
        {
          type ? branchBottom : ATMBottom
        }

    </div>


  );
};

export default TableSkeleton;
