'use client';

import Dropdown from "./Icons/Dropdown";
import { useEffect, useState } from "react";
import Dropup from "./Icons/Dropup";
import TinySearchIcon from "./Icons/TinySearchIcon";

interface SelectOptionProps {
  types: string[];
  title: string;
}

const SelectOption = ({ types, title }: SelectOptionProps): JSX.Element => {

  let isBank = false

  if (title === "Select your bank")
    isBank = true

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
    <div className='bg-white rounded-md border border-[#d4d4d4]'>
        <div className="flex items-center mx-9 ">
          <h1 className="text-lg py-4 font-medium mr-auto">{title}</h1>
          <button onClick={handleButtonClick}>
            {isExpanded ? <Dropdown/> : <Dropup/>}
          </button>
        </div>
        {isExpanded && isBank && (
          <main>
            <div className="border-t-2 border-[#DFDFDF]"></div>
            <div className="relative w-[300px] my-4 flex items-center mx-auto">
              <input
                className="h-9 w-full border-[0.5px] border-[#53389E] rounded-md pl-11 pr-4 py-2 font-normal text-sm text-[#B3B3B3] placeholder-[#B3B3B3] placeholder-opacity-50"
                placeholder="Search bank"
                />
              <TinySearchIcon/>
            </div>
          </main>
        )}
        {isExpanded && (
            <main className="pb-3">
              <div className="border-t-2 border-[#DFDFDF] h-5"></div>
              <div className="ml-10 space-y-2 pb-2 h-40 overflow-y-auto">
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
