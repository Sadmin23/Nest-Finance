'use client';

import RadioButton from "./RadioButton";

interface SelectOptionProps {
  banks: string[];
  title: string;
}

const SelectOption = ({ banks, title }: SelectOptionProps): JSX.Element => {
  return (
    <div className='bg-white rounded-md border-2 border-[#d4d4d4] pb-5'>
        <h1 className="text-lg font-medium pl-10 py-5 border-b-2 border-[#d4d4d4]">{title}</h1>
        {banks.map((bank, index) => (
        <RadioButton key={index} Text={bank} />
      ))}
    </div>
  );
};

export default SelectOption;
