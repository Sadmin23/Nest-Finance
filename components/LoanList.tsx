'use client';

import { useState } from "react";
import LoanRow from "./LoanRow";
import SliderComponent from "./SliderComponent";
import SelectOption from "./SelectOption";

const LoanList = (): JSX.Element => {

  const bankArray = ["Sonali Bank Limited", 
                    "Brac Bank Limited", 
                    "Al-Arafah Bank Limited",
                    "Agrani Bank Limited",
                    "Jamuna Bank Limited"
                    ];
  const loanArray = ["Home Loan", 
                    "Car Loan", 
                    "Personal Loan",
                    "Education Loan",
                    "Other Loan"
                    ];
  const durationArray = ["1.5 Years - 18 Month", 
                    "3 Years - 36 Month", 
                    "5 Years - 60 Month",
                    "8 Years - 96 Month",
                    "10 Years - 120 Month"
                    ];

  const [sliderValues, setSliderValues] = useState([0, 15000]);
  const [sliderValues2, setSliderValues2] = useState([0, 20]);


  const handleSliderChange = (values: [number, number]) => {
    setSliderValues(values);
  };
  const handleSliderChange2 = (values: [number, number]) => {
    setSliderValues2(values);
  };
  return (
    <div className="mx-40 my-20 flex">
      <div className="w-96 flex-col space-y-6">
        <SelectOption title="Select your bank" types={bankArray}/>
        <SelectOption title="Select Loan type" types={loanArray}/>
        <SliderComponent
          title="Loan Amount"
          min={0}
          max={20000}
          value={sliderValues}
          onChange={handleSliderChange}
        />
        <SelectOption title="Loan Duration" types={durationArray}/>
        <SliderComponent
          title="Rate of interest (ROI)"
          min={0}
          max={100}
          value={sliderValues2}
          onChange={handleSliderChange2}
        />
      </div>
      <div className="ml-auto space-y-9">
          <LoanRow/>
          <LoanRow/>
          <LoanRow/>
          <LoanRow/>
          <LoanRow/>
          <LoanRow/>
          <LoanRow/>
      </div>
    </div>
  );
};

export default LoanList;