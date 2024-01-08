'use client';

import TakaWhite from "../Icons/TakaWhite";

const Input = ({ type, value }: { type: number, value: string }): JSX.Element => {

  let children, length

  if (type===1){
    length = 'w-28'
    children = 
      <div className="w-7 bg-[#53389E] py-3 rounded-r-md border-[#D3D3D3] border-r border-y">
        <TakaWhite/>
      </div>
  }
  else if (type===2){
    length = 'w-28'
    children =
    <div className="w-7 bg-[#53389E] py-2 px-[7px] text-white font-medium rounded-r-md border-[#D3D3D3] border-r border-y">
        %
    </div>
  }
  else if (type==3){
    length = 'w-[84px]'
    children =
    <div className="flex h-11">
        <div className="w-7 text-white text-xs font-medium px-[3px] bg-[#53389E] py-3 border-[#D3D3D3] border-y">
          MO
        </div>
        <div className="w-7 text-[#B8B8B8] text-xs font-medium px-[6px] bg-[#EAEAEA] py-3 rounded-r-md border-[#D3D3D3] border-r border-y">
          YR
        </div>
      </div>
  }

  return (
    <div className="ml-40 h-11 flex">
    <div className={`${length} text-[#53389E] font-medium flex bg-white border-[#D3D3D3] border-y border-l rounded-l-md py-2 pl-2`}>
        {value}
    </div>
    {children}
  </div>
  );
};

export default Input;
