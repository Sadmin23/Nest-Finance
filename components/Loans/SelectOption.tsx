'use client';

import { useEffect, useState } from "react";
import Dropdown from "../Icons/Dropdown";
import Dropup from "../Icons/Dropup";
import TinySearchIcon from "../Icons/TinySearchIcon";
import FilterTag from "../Buttons/FilterTag";
import { findShortName } from '../../app/data';

interface SelectOptionProps {
  types: string[];
  title: string;
  handleChange: (option: string, category: number) => void;
  checkBox: (bank: string, category: number) => boolean
}

const SelectOption = ({ types, title, handleChange, checkBox }: SelectOptionProps): JSX.Element => {

  let isBank = false
  let group = 0;

  if (title === "Select your bank"){
    isBank = true
    group = 1
  }
  else if (title === "Select Loan type")
    group = 2
  else if (title === "Loan Duration")
    group = 3

  const [data, setData] = useState<string[]>(types);
  const [filteredData, setFilteredData] = useState<string[]>(types);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(true)
  const [selectedBanks, setSelectedBanks] = useState<string[]>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/bankapi/bank/')
      .then((response) => response.json())
      .then((data: Array<{ name: string }>) => {
        if (isBank === true){
          setData(data.map((item) => item.name));
          setFilteredData(data.map((item) => item.name));
          setError(false)
        }
      })
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered)
  }, [searchValue]);

  const [isExpanded, setIsExpanded] = useState(true);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCheckbox = (option : string) => {
    if (selectedBanks.includes(option)) {
      setSelectedBanks(selectedBanks.filter((item) => item !== option));
    } else {
      setSelectedBanks([...selectedBanks, option]);
    }
  };  

  // useEffect(() => {
  //   console.log(selectedBanks);  
  // }, [selectedBanks]);

  let num = selectedBanks.length - 2

  return (
    <div className='bg-white rounded-md border border-[#d4d4d4]'>
        <div className="flex items-center mx-9 ">
          <h1 className="text-lg py-4 font-medium mr-auto">{title}</h1>
          <button onClick={handleButtonClick}>
            {isExpanded ? <Dropdown/> : <Dropup/>}
          </button>
        </div>
        {isExpanded && isBank && !error && (
          <main>
            <div className="border-t border-[#DFDFDF]"></div>
            <div className="relative w-[300px] my-4 flex items-center mx-auto">
              <input
                className="h-9 w-full border-[0.5px] border-[#53389E] rounded-md pl-11 pr-4 py-2 font-normal text-sm text-[#B3B3B3] placeholder-[#B3B3B3] placeholder-opacity-50"
                placeholder="Search bank"
                onChange={handleInputChange}            
              />
              <TinySearchIcon/>
            </div>
            {
              (selectedBanks.length !== 0) ? 
              (
                <div className="flex px-10 border-t border-[#DFDFDF] py-3">
                {selectedBanks.map((bank, index)=>
                  (index <= 1)?
                    <FilterTag key={index} type={1} text={findShortName(bank)} handleChange={handleChange} handleCheckbox={handleCheckbox}/> : ''
                )}
                {
                  (selectedBanks.length > 2)? <FilterTag type={2} text={`+${num} others`} handleChange={handleChange} handleCheckbox={handleCheckbox}/> : ''}
                </div>
              ) : ''
            } 
          </main>
        )}
        {isExpanded && (isBank && error ?                 
          <div className="text-center py-4 border-t text-gray-500">
            No bank information available
          </div> 
          :
          <main className="pb-3 pt-5 border-t border-[#DFDFDF]">
            <div className={`ml-10 space-y-3 pb-2 overflow-y-auto ${(group == 1 ) ? 'h-56' : 'h-44'}`}>
              {filteredData.map((type, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option${index + 1}`}
                    name={`option${index + 1}`}
                    className="mr-6 w-5 h-5 border-black border"
                    checked={checkBox(type, group)}
                    onChange={() => {handleChange(type, group); handleCheckbox(type)}}
                  />
                  <label htmlFor={`option${index + 1}`} className="leading-6 w-64">
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
