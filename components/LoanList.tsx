'use client';

import {  useState } from "react";
import LoanRow from "./LoanRow";
import SliderComponent from "./SliderComponent";
import SelectOption from "./SelectOption";
import SmallSearchIcon from "./Icons/SmallSearchIcon";
import Up from "./Icons/Up";
import Down from "./Icons/Down";
import FilterIcon from "./Icons/FilterIcon";

const LoanList = (): JSX.Element => {

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

  const bankArray = [""];

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
      <div className="ml-auto">
        <h1 className="text-[28px] font-semibold leading-[38px] text-[#1D2939]">Search your loan information</h1>
        <div className="flex mt-8 mb-12">
          <div className="relative w-[286px] flex items-center">
            <input
              className="h-11 w-full border-[0.5px] border-[#D4D4D4] rounded-md pl-12 pr-4 py-2 font-normal text-sm text-[#B3B3B3] placeholder-[#B3B3B3] placeholder-opacity-50"
              placeholder="Search your desired bank loans"
            />
            <SmallSearchIcon/>
          </div>
          <h1 className="leading-10 font-normal ml-auto">Showing</h1>
          <div className='bg-white border-[0.5px] border-[#B3B3B3] rounded-md text-[#53389E] p-2 mx-4 flex'>
            7
            <div className='flex-col'>
              <button className="block">
                  <Up colour="purple"/>
              </button>
              <button  className="block">
                  <Down colour="purple"/>
              </button>
            </div>
          </div>
          <div contentEditable={true} className="flex border-[0.5px] text-center text-sm leading-5 border-[#B3B3B3] rounded-md  text-[#B3B3B3] px-4 py-2 items-center">
              <FilterIcon right="2"/>
              Sort By
          </div>
        </div>
        <div className="space-y-9">
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
        </div>
      </div>
    </div>
  );
};

export default LoanList;