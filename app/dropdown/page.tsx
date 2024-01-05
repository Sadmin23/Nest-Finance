'use client'
// Import necessary libraries and components
import React from 'react';
import Select from 'react-select';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
}

interface Option {
  value: string;
  label: string;
}

const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean'},
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red'},
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

const Dropdown = () => {
  const handleChange = (selectedOption: ColourOption | null) => {
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
    }
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
        options={colourOptions}
        onChange={handleChange} // Handle the change event
      />
    </>
  );
};

export default Dropdown;