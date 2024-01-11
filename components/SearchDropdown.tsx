import React from 'react';
import Select, { components } from 'react-select'


interface Option {
value: string;
label: string;
}

type SearchDropdownProps = {
    option: readonly Option[];
    width: string;
    name: string;
    searchable: boolean;
    defaultOption: Option;
    onChange: (selectedOption: any) => void;
  };



  const SearchDropdown: React.FC<SearchDropdownProps> = ({ 
    option,
    width,
    name,
    searchable,
    defaultOption,
    onChange
  }) => {

    return (
    <>
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: '#53389E',
            borderRadius: 12,
            borderWidth: 1,
            color: '#B3B3B3',
            paddingRight: 16,
            maxHeight: 80,
            paddingLeft: 16,
            height: 56
          }),
        }}
        className={`w-${width}`}
        classNamePrefix="select"
        placeholder={name}
        isClearable={true}
        isSearchable={searchable}
        name="color"
        options={option}
        onChange={onChange}
        defaultValue={defaultOption.value!='' ? defaultOption : undefined}
      />
    </>
  );
};

export default SearchDropdown;