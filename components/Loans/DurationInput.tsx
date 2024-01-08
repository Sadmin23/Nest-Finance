'use client';

import Taka from "../Icons/Taka";

const DurationInput = ({ value }: { value: string }): JSX.Element => {
  return (
    <div className="ml-40 h-11 flex">
    <div className="w-[84px] text-[#53389E] font-medium flex bg-white border-[#D3D3D3] border-y border-l rounded-l-md py-2 pl-2">
        {value}
    </div>
    <div className="w-7 text-white text-xs font-medium px-[3px] bg-[#53389E] py-3 border-[#D3D3D3] border-y">
      MO
    </div>
    <div className="w-7 text-[#B8B8B8] text-xs font-medium px-[6px] bg-[#EAEAEA] py-3 rounded-r-md border-[#D3D3D3] border-r border-y">
      YR
    </div>
  </div>
  );
};

export default DurationInput;
