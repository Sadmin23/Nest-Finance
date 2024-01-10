import React from 'react';
import InputSlider from './InputSlider';
import Input from './Input';
import Output from './Output';

const CalculatorInput = ({ type }: { type: number }) => {

let label, input_value=0, heading, output_value

if (type === 1){
    heading = "Loan Amount"
    input_value = 70000000
    label = "Monthly EMI"
    output_value = 85000

} else if (type === 3){
    heading = "Loan Duration"
    input_value = 60
    label = "Total Interest"
    output_value = 112500

} else if (type === 2){
    heading = "Rate of Interest (ROI)"
    input_value = 7.5
    label = "Total Interest"
    output_value = 812500

}


  return (
    <div className="flex items-start">
    <div className="flex items-start">
    <div className='w-64 pl-2 pt-2'>
        <h2>{heading}</h2>
        <InputSlider/>
      </div>
      <Input type={type} value={input_value}/>
    </div>
    <Output label="Monthly EMI" value={8500}/>
  </div>
  );
};

export default CalculatorInput;
