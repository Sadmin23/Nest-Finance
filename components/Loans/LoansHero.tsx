'use client';

import CalculatorInput from "./CalculatorInput";
import Input from "./Input";
import InputSlider from "./InputSlider";
import Output from "./Output";

const LoansHero = (): JSX.Element => {
  return (
    <div className='bg-white mx-40 mt-12 mb-[70px] rounded-md'>
      <h1 className='text-xl font-semibold text-[#53389E] ml-8 py-6'>Calculate your monthly installment (EMI)</h1>
      <div className='border-t-2 flex'>
        <section className="p-8 space-y-4">
          <CalculatorInput type={1}/>
          <CalculatorInput type={3}/>
          <CalculatorInput type={2}/>
        </section>
      </div>
    </div>
  );
};

export default LoansHero;
