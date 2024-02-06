import React, { MouseEventHandler, useEffect, useState } from 'react';
import InputSlider from './InputSlider';
import Input from './Input';
import Output from './Output';

interface CalculatorInputProps {
  type: number;
  value: number;
  output: number;
  onChange: (value: number) => MouseEventHandler<HTMLDivElement>;
  handleChange: (value: number) => void;
}

const CalculatorInput: React.FC<CalculatorInputProps> = ({ type, value, output, onChange, handleChange}) => {

  useEffect(() => {
    if (type === 3) {
      handleChange(18)
    } else if (type === 4) {
      handleChange(3);
    }
  }, [type]);

  let label="", heading, alignment

  if (type === 1){
      heading = "Loan Amount"
      label = "Monthly EMI"
      alignment='items-start'
  } else if (type === 3 || type === 4){
      heading = "Loan Duration"
      label = "Total Interest"
      alignment='items-center'
  } else if (type === 2){
      heading = "Rate of Interest (ROI)"
      label = "Total Payable"
      alignment='items-end'
  }

  return (
    <div className={`md:flex space-x-[6vw] lg:space-x-[12vw] xl:space-x-[2vw] ${alignment}`}>
      <div className='w-64 pl-2 pt-2'>
        <h2>{heading}</h2>
        {type === 1 && <InputSlider type={type} value={value} onChange={handleChange} />}
        {(type === 3 || type === 4) && <InputSlider type={type} value={value} onChange={handleChange} />}
        {type === 2 && <InputSlider type={type} value={value} onChange={handleChange} />}
      </div>
      <Input 
          type={type} 
          onChange={onChange} 
          value={value}
      />
      <Output label={label} value={output}/>
  </div>
  );
};

export default CalculatorInput;
