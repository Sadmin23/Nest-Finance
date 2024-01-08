'use client';

import Taka from "./Icons/Taka";

const LoansHero = (): JSX.Element => {
  return (
    <div className='bg-white mx-40 mt-12 mb-[70px] rounded-md'>
      <h1 className='text-xl font-semibold text-[#53389E] ml-8 py-6'>Calculate your monthly installment (EMI)</h1>
      <div className='border-t-2 flex'>
        <section className="p-8 space-y-4">
          <div className="flex items-start">
            <div className="flex items-start">
              <h2>Loan amount</h2>
              <div className="w-36 h-11 flex bg-[#53389e] border-[#D3D3D3] border rounded-md ml-40">
                <div className="w-28 bg-white rounded-md">
                  7,00,00,000
                </div>
                  <Taka/>
              </div>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
          <div className="flex items-center">
            <div className="flex items-start">
              <h2>Loan amount</h2>
              <div className="w-32 h-11 border-[#D3D3D3] border rounded-md ml-40"></div>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
          <div className="flex items-end">
            <div className="flex items-start">
              <h2>Loan amount</h2>
              <div className="w-32 h-11 border-[#D3D3D3] border rounded-md ml-40"></div>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoansHero;
