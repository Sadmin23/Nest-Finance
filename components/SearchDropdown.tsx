import React, { useState } from 'react';
import Select from 'react-select';


interface Option {
value: string;
label: string;
}

type SearchDropdownProps = {
    option: readonly Option[];
    onChange: (selectedOption: Option) => void;
  };

  const SearchDropdown: React.FC<SearchDropdownProps> = ({ 
    option,
    onChange
  }) => {

    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleChange = (selectedOption: Option) => {
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
            borderWidth: 2,
            color: '#B3B3B3',
            height: 56,
            paddingRight: 16,
            paddingLeft: 16
          }),
        }}
        className="w-64"
        classNamePrefix="select"
        placeholder="District"
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