'use client';

import Input from "./Input";
import InputSlider from "./InputSlider";
import Output from "./Output";

const LoansHero = (): JSX.Element => {
  return (
    <div className='bg-white mx-40 mt-12 mb-[70px] rounded-md'>
      <h1 className='text-xl font-semibold text-[#53389E] ml-8 py-6'>Calculate your monthly installment (EMI)</h1>
      <div className='border-t-2 flex'>
        <section className="p-8 space-y-4">
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="">
                <h2>Loan amount</h2>
                <InputSlider/>
              </div>
              <Input type={1} value="7,00,00,000"/>
            </div>
            <Output label="Monthly EMI" value={8500}/>
          </div>
          <div className="flex items-center">
            <div className="flex items-start">
              <div>
                <h2>Loan Duration</h2>
                <InputSlider/>                
              </div>
              <Input type={3} value="60"/>
            </div>
            <Output label="Total Interest" value={112500}/>
          </div>
          <div className="flex items-end">
            <div className="flex items-start">
              <div>
                <h2>Loan amount</h2>
                <InputSlider/>
              </div>
              <Input type={2} value="7.5%"/>
            </div>
            <Output label="Total Payable" value={812500}/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoansHero;
