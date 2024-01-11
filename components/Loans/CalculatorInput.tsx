import React, { useState } from 'react';
import InputSlider from './InputSlider';
import Input from './Input';
import Output from './Output';

const CalculatorInput = ({ type }: { type: number }) => {

  const [loanAmount, setLoanAmount] = useState<number | number[]>(70000000);
  const [loanDuration, setLoanDuration] = useState<number | number[]>(60);
  const [rateOfInterest, setRateOfInterest] = useState<number | number[]>(7.5);

  let label="", heading, output_value=0, alignment
  
  if (type === 1){
      heading = "Loan Amount"
      label = "Monthly EMI"
      alignment='items-start'
      output_value = 85000
  
  } else if (type === 3){
      heading = "Loan Duration"
      label = "Total Interest"
      alignment='items-center'
      output_value = 112500
  
  } else if (type === 2){
      heading = "Rate of Interest (ROI)"
      label = "Total Payable"
      alignment='items-end'
      output_value = 812500
  }
  
  const handleLoanAmountChange = (value: number | number[]) => {
    setLoanAmount(value);
  };
  
  const handleLoanDurationChange = (value: number | number[]) => {
    setLoanDuration(value);
  };
  
  const handleRateOfInterestChange = (value: number | number[]) => {
    setRateOfInterest(value);
  };

  return (
    <div className={`flex ${alignment}`}>
      <div className="flex">
        <div className='w-64 pl-2 pt-2'>
          <h2>{heading}</h2>
          {type === 1 && <InputSlider onChange={handleLoanAmountChange} />}
          {type === 3 && <InputSlider onChange={handleLoanDurationChange} />}
          {type === 2 && <InputSlider onChange={handleRateOfInterestChange} />}
          </div>
          <Input type={type} value={type === 1 ? loanAmount : type === 3 ? loanDuration : rateOfInterest} />
        </div>
      <Output label={label} value={output_value}/>
  </div>
  );
};

export default CalculatorInput;
