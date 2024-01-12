'use client';

import { useEffect, useState } from "react";
import CalculatorInput from "./CalculatorInput";
import PieChart from "./PieChart";
import PieChart3D from "./PieChart3D";

const LoansHero = (): JSX.Element => {
  const [loanAmount, setLoanAmount] = useState<number | number[]>(200000);
  const [loanDuration, setLoanDuration] = useState<number | number[]>(18);
  const [rateOfInterest, setRateOfInterest] = useState<number | number[]>(7.5);
  const [durationType, setDurationType] = useState(3);

  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);


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

  function roundToNearest500(value: number): number {
    return Math.round(value / 500) * 500;
  }

  useEffect(() => {
    console.log("Loan Amount: "+loanAmount+"\n"+"Loan Duration: "+loanDuration+"\n"+"Rate of Interest: "+rateOfInterest+"\n");
    const monthlyInterestRate = rateOfInterest / 12 / 100;
    const denominator = Math.pow(1 + monthlyInterestRate, loanDuration) - 1;
    const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanDuration) / denominator;
    setMonthlyEMI(roundToNearest500(emi))
    const totalPayments = emi * loanDuration;
    const totalInterest = totalPayments - loanAmount;
    setTotalInterest(roundToNearest500(totalInterest))
    const totalPayable = loanAmount + totalInterest;
    setTotalPayable(roundToNearest500(totalPayable))

  }, [loanAmount, loanDuration, rateOfInterest]);

  return (
    <div className='bg-white mx-40 mt-12 mb-[70px] rounded-md'>
      <h1 className='text-xl font-semibold text-[#53389E] ml-12 py-6'>Calculate your monthly installment (EMI)</h1>
      <div className='border-t-2 flex'>
        {/* <section className="pl-12 py-8 border space-y-4">
          <CalculatorInput type={1} value={loanAmount} output={monthlyEMI} onChange={changeDurationType} handleChange={handleLoanAmountChange}/>
          <CalculatorInput type={durationType} value={loanDuration} output={totalInterest} onChange={changeDurationType} handleChange={handleLoanDurationChange}/>
          <CalculatorInput type={2} value={rateOfInterest} output={totalPayable} onChange={changeDurationType} handleChange={handleRateOfInterestChange}/>
        </section> */}
        <PieChart3D/>
      </div>
    </div>
  );
};

export default LoansHero;
