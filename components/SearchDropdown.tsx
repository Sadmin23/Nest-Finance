import React, { useState } from 'react';
import Select from 'react-select';


interface Option {
value: string;
label: string;
}

type SearchDropdownProps = {
    option: readonly Option[];
    onChange: (selectedOption: Option | null) => void;
  };

  const SearchDropdown: React.FC<SearchDropdownProps> = ({ 
    option,
    onChange
  }) => {

    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleChange = (selectedOption: Option | null) => {
      setSelectedOption(selectedOption);
      onChange(selectedOption);
    };

    return (
    <>
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: '#B3B3B3',
            borderRadius: 12,
            color: '#B3B3B3'
          }),
        }}
        className="w-60 h-14"
        classNamePrefix="select"
        placeholder="Filter"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={option}
        onChange={onChange}
      />
    </>
  );
};

export default SearchDropdown;