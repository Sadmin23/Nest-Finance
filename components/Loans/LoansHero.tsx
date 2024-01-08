'use client';

import DurationInput from "./DurationInput";
import Input from "./Input";

const LoansHero = (): JSX.Element => {
  return (
    <div className='bg-white mx-40 mt-12 mb-[70px] rounded-md'>
      <h1 className='text-xl font-semibold text-[#53389E] ml-8 py-6'>Calculate your monthly installment (EMI)</h1>
      <div className='border-t-2 flex'>
        <section className="p-8 space-y-4">
          <div className="flex items-start">
            <div className="flex items-start">
              <h2>Loan amount</h2>
              <Input value="7,00,00,000"/>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
          <div className="flex items-center">
            <div className="flex items-start">
              <h2>Loan amount</h2>
            <DurationInput value="60"/>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
          <div className="flex items-end">
            <div className="flex items-start">
              <h2>Loan amount</h2>
              <Input value="7.5%"/>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoansHero;
