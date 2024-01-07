import React from 'react';
import Select from 'react-select';


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
            borderColor: '#B3B3B3',
            borderRadius: 12,
            borderWidth: 2,
            color: '#B3B3B3',
            paddingRight: 16,
            paddingLeft: 16
          }),
        }}
        className={`w-${width}`}
        classNamePrefix="select"
        placeholder={name}
        isClearable={true}
        isSearchable={searchable}
        name="color"
        options={option}
        isMulti
        onChange={onChange}
        defaultValue={defaultOption.value!='' ? defaultOption : undefined}
      />
    </>
  );
};

export default SearchDropdown;