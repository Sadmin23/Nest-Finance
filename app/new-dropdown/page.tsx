'use client'
import SearchDropdown from '@/components/SearchDropdown';
// Import necessary libraries and components
import React from 'react';

export interface ColourOption {
value: string;
label: string;
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

const NewDropdown = () => {
    const handleFilterChange = (selectedOption: Option | null) => {
        if (selectedOption) {
          console.log('Selected Option Value:', selectedOption.value);
        }
    };

  return (
    <div>
        <SearchDropdown option={colourOptions} onChange={handleFilterChange} />
    </div>
  );
};

export default NewDropdown;