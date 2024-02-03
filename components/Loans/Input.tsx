'use client';

import { MouseEventHandler } from "react";
import TakaWhite from "../Icons/TakaWhite";

interface InputProps {
  type: number;
  value: number | number[];
  onChange: (value: number) => MouseEventHandler<HTMLDivElement>;
}

const Input: React.FC<InputProps> = ({ type, value, onChange}) => {

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
  else if (type===3 || type === 4){

    const handleClickMonth = () => {
      if (type===4)
        onChange(3);
    }
    const handleClickYear = () => {
      if (type===3)
        onChange(4)
    };

    length = 'w-[84px]'

    let selected = 'text-white bg-[#53389E]'
    let unselected = 'text-[#B8B8B8] bg-[#EAEAEA]'

    children =
    <div className="flex h-11">
        <div onClick={handleClickMonth} className={`w-7 text-xs font-medium px-[3px] py-3 border-[#D3D3D3] border-y  ${type===3 ? selected : unselected}`}>
          MO
        </div>
        <div onClick={handleClickYear} className={`w-7 text-xs font-medium px-[6px] py-3 rounded-r-md border-[#D3D3D3] border-r border-y ${type===4 ? selected : unselected}`}>
          YR
        </div>
      </div>
  }

  return (
    <div className="h-11 flex">
    <div className={`${length} text-[#53389E] font-medium flex bg-white border-[#D3D3D3] border-y border-l rounded-l-md py-2 pl-2`}>
        {value}
    </div>
    {children}
  </div>
  );
};

export default Input;
