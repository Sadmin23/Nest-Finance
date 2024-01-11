'use client';

import { useState } from "react";
import CalculatorInput from "./CalculatorInput";
import PieChart from "./PieChart";

const LoansHero = (): JSX.Element => {

  const [durationType, setDurationType] = useState(3);

  const changeDurationType = (value: number) => {
    console.log(durationType);
    setDurationType(value);
  };

  return (
    <div className='bg-white mx-40 mt-12 mb-[70px] rounded-md'>
      <h1 className='text-xl font-semibold text-[#53389E] ml-12 py-6'>Calculate your monthly installment (EMI)</h1>
      <div className='border-t-2 flex'>
        <section className="pl-12 py-8 space-y-4">
          <CalculatorInput type={1} onChange={changeDurationType}/>
          <CalculatorInput type={durationType} onChange={changeDurationType}/>
          <CalculatorInput type={2} onChange={changeDurationType}/>
        </section>
        <PieChart/>
      </div>
    </div>
  );
};

export default LoansHero;
