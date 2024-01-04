import React, { useState, useRef, useEffect } from 'react';

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

export default CustomDropdown;