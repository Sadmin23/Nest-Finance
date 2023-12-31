'use client';

import Dropdown from "./Icons/Dropdown";
import { useEffect, useState } from "react";
import Dropup from "./Icons/Dropup";

interface SelectOptionProps {
  types: string[];
  title: string;
}

const SelectOption = ({ types, title }: SelectOptionProps): JSX.Element => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    console.log("Selected Options:", selectedOptions);
  }, [selectedOptions]);

  return (
    <div className='bg-white rounded-md border-2 border-[#d4d4d4]'>
        <div className="flex items-center mx-9 ">
          <h1 className="text-lg py-4 font-medium mr-auto">{title}</h1>
          <button onClick={handleButtonClick}>
            {isExpanded ? <Dropdown/> : <Dropup/>}
          </button>
        </div>
        {isExpanded && (
          <main className="pb-3">
            <div className="border-t-2 border-[#DFDFDF] h-5"></div>
            <div className="ml-10 space-y-2 pb-2">
              {types.map((type, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option${index + 1}`}
                    name={`option${index + 1}`}
                    className="mr-6 w-5 h-5 border-black border"
                    checked={selectedOptions.includes(type)}
                    onChange={() => handleCheckboxChange(type)}
                />
                <label htmlFor={`option${index + 1}`} className="leading-6">
                  {type}
                </label>
                </div>
              ))}
            </div>
          </main>
        )}
    </div>
  );
};

export default SelectOption;
