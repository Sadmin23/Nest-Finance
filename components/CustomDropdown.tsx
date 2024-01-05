import React, { useState, useRef, useEffect } from 'react';
import FilterIcon from './Icons/FilterIcon';

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
        className="border-2 border-[#B3B3B3] h-14 rounded-xl w-60 py-4 pl-12 cursor-pointer text-[#B3B3B3]"
      >
        <FilterIcon/>
        {selectedOption ? selectedOption.label : 'Filter by bank type'}
      </div>
      {isOpen && (
        <ul className="absolute z-10 top-14 left-0 bg-white border-2 border-[#B3B3B3] rounded-xl w-60">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer hover:bg-[#53389E] hover:text-white h-14 rounded-xl font-medium pl-12 text-[#53389E] py-3"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;