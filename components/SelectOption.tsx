'use client';

import Dropdown from "./Icons/Dropdown";
import RadioButton from "./Buttons/RadioButton";
import { useState } from "react";
import Dropup from "./Icons/Dropup";

interface SelectOptionProps {
  banks: string[];
  title: string;
}

const SelectOption = ({ banks, title }: SelectOptionProps): JSX.Element => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='bg-white rounded-md border-2 border-[#d4d4d4]'>
        <div className="flex items-center mx-9 ">
          <h1 className="text-lg py-4 font-medium mr-auto">{title}</h1>
          <button onClick={handleButtonClick}>
            {isExpanded ? <Dropup/> : <Dropdown/>}
          </button>
        </div>
        {isExpanded && (
          <main className="pb-3">
          <div className="border-t-2 border-[#DFDFDF] h-5"></div>
          {banks.map((bank, index) => (
            <RadioButton key={index} Text={bank} />
            ))}
          </main>
        )}
    </div>
  );
};

export default SelectOption;
