'use client';

import { useEffect, useState } from "react";
import CalculatorInput from "./CalculatorInput";
import PieChart from "./PieChart";

const LoansHero = (): JSX.Element => {
  const [loanAmount, setLoanAmount] = useState<number | number[]>(200000);
  const [loanDuration, setLoanDuration] = useState<number | number[]>(18);
  const [rateOfInterest, setRateOfInterest] = useState<number | number[]>(7.5);
  const [durationType, setDurationType] = useState(3);

  const changeDurationType = (value: number) => {
    console.log(durationType);
    setDurationType(value);
  };

  const handleLoanAmountChange = (value: number | number[]) => {
    const newValue = Math.max(50000, value);
    setLoanAmount(newValue);
  };

  const handleLoanDurationChange = (value: number | number[]) => {
    let min = 0
    
    if (durationType === 3 ) min = 6
    else if (durationType === 4) min = 1

    const newValue = Math.max(min, value);    
    setLoanDuration(newValue);
  };

  const handleRateOfInterestChange = (value: number | number[]) => {
    const newValue = Math.max(2.5, value);
    setRateOfInterest(newValue);
  };

  useEffect(() => {
    console.log("Loan Amount: "+loanAmount+"\n"+"Loan Duration: "+loanDuration+"\n"+"Rate of Interest: "+rateOfInterest+"\n");
  }, [loanAmount, loanDuration, rateOfInterest]);

  return (
    <div className='bg-white mx-40 mt-12 mb-[70px] rounded-md'>
      <h1 className='text-xl font-semibold text-[#53389E] ml-12 py-6'>Calculate your monthly installment (EMI)</h1>
      <div className='border-t-2 flex'>
        <section className="pl-12 py-8 space-y-4">
          <CalculatorInput type={1} value={loanAmount} onChange={changeDurationType} handleChange={handleLoanAmountChange}/>
          <CalculatorInput type={durationType} value={loanDuration} onChange={changeDurationType} handleChange={handleLoanDurationChange}/>
          <CalculatorInput type={2} value={rateOfInterest} onChange={changeDurationType} handleChange={handleRateOfInterestChange}/>
        </section>
        <PieChart/>
      </div>
    </div>
  );
};

export default LoansHero;
