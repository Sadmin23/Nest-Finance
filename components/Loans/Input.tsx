'use client';

import Taka from "../Icons/Taka";

const Input = ({ value }: { value: string }): JSX.Element => {
  return (
    <div className="ml-40 h-11 flex">
    <div className="w-28 text-[#53389E] font-medium flex bg-white border-[#D3D3D3] border-y border-l rounded-l-md py-2 pl-2">
        {value}
    </div>
    <div className="w-7 bg-[#53389E] py-3 rounded-r-md border-[#D3D3D3] border-r border-y">
      <Taka/>
    </div>
  </div>
  );
};

export default Input;
