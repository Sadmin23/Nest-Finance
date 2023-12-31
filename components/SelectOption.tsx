'use client';

import Dropdown from "./Icons/Dropdown";
import RadioButton from "./Buttons/RadioButton";

interface SelectOptionProps {
  banks: string[];
  title: string;
}

const SelectOption = ({ banks, title }: SelectOptionProps): JSX.Element => {
  return (
    <div className='bg-white rounded-md border-2 border-[#d4d4d4] pb-3'>
        <div className="flex border-b-2 border-[#d4d4d4] items-center mx-9 ">
          <h1 className="text-lg py-4 font-medium mr-auto">{title}</h1>
          <Dropdown/>
        </div>
        <div className="h-5"></div>
        {banks.map((bank, index) => (
        <RadioButton key={index} Text={bank} />
      ))}
    </div>
  );
};

export default SelectOption;
