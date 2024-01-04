'use client';

import { useEffect, useState, useRef } from "react";
import BankInfoCard from "./BankInfoCard";
import SearchIcon from "./Icons/SearchIcon";
import FilterIcon from "./Icons/FilterIcon";
import { Dropdown } from 'primereact/dropdown';
        
interface Option {
  value: string;
  label: string;
}

const CustomDropdown: React.FC<{ options: Option[]; onSelect: (value: string) => void }> = ({
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div
        onClick={toggleDropdown}
        className="border-2 border-[#B3B3B3] h-14 rounded-xl w-60 py-4 px-4 cursor-pointer"
      >
        {selectedOption ? selectedOption.label : 'Filter by bank type'}
      </div>
      {isOpen && (
        <ul className="absolute z-10 top-14 left-0 bg-white border-2 border-[#B3B3B3] rounded-xl w-60 py-1 px-4">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer hover:bg-gray-200 py-2"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const BankInfoWrapper = (): JSX.Element => {

    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(true)
    const [filter, setFilter] = useState('');
    const [api, setApi] = useState('http://127.0.0.1:8000/bankapi/bank/');

    const options = [
      { value: '', label: 'Filter by bank type' },
      { value: 'Public+Bank', label: 'Public Bank' },
      { value: 'Private+Bank', label: 'Private Bank' },
    ];

    useEffect(() => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setError(false)
        })
        .catch(() => setError(true));
    }, [api]);
    
    const itemsPerRow = 3;
    const numberOfRows = Math.ceil(filteredData.length / itemsPerRow);

    useEffect(() => {
        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filtered);
      }, [searchValue, data]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    };

    const handleChangeFilter = (value: string)=> {
      const newFilter = value;
      setFilter(newFilter);
      setApi(newFilter ? `http://127.0.0.1:8000/bankapi/bank/?type=${newFilter}` : 'http://127.0.0.1:8000/bankapi/bank/');
    };
    
    return (
      <main className="flex-col">
        <div className='mx-40 mb-12'>
          <div className='border-t-2 flex pt-9'>
            <div className="flex items-center relative">
                <input
                    className="border-2 border-[#B3B3B3] h-14 rounded-xl w-[376px] py-4 pl-[72px]"
                    placeholder="Search your desire bank"
                    onChange={handleInputChange}            
                />
                <SearchIcon/>
            </div>
            <div className="ml-auto">
              <CustomDropdown options={options} onSelect={handleChangeFilter} />
            </div>
          </div>
        </div>
        <div className="flex-col space-y-9 mb-12">
          {Array.from({ length: numberOfRows }, (_, rowIndex) => (
              <div key={rowIndex} className="flex mx-40 space-x-9">
              {filteredData
                .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                .map((bank, index) => (
                    <BankInfoCard
                    key={index}
                    name={bank.name}
                    url={bank.image_url}
                    type={bank.type}
                    category={bank.category}
                    origin={bank.origin}
                    />
                    ))}
            </div>
          ))}
        </div>
      </main>  
    );
};

export default BankInfoWrapper;
