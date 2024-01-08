'use client';

import Taka from "../Icons/Taka";

const LoansHero = (): JSX.Element => {
  return (
    <div className='bg-white mx-40 mt-12 mb-[70px] rounded-md'>
      <h1 className='text-xl font-semibold text-[#53389E] ml-8 py-6'>Calculate your monthly installment (EMI)</h1>
      <div className='border-t-2 flex'>
        <section className="p-8 space-y-4">
          <div className="flex items-start">
            <div className="flex items-start">
              <h2>Loan amount</h2>
              <div className="ml-40 h-11 flex">
                <div className="w-28 text-[#53389E] font-medium flex bg-white border-[#D3D3D3] border-y border-l rounded-l-md py-2 pl-2">
                    7,00,00,000
                </div>
                <div className="w-7 bg-[#53389E] py-3 rounded-r-md border-[#D3D3D3] border-r border-y">
                  <Taka/>
                </div>
              </div>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
          <div className="flex items-center">
            <div className="flex items-start">
              <h2>Loan amount</h2>
              <div className="w-[140px] h-11 border-[#D3D3D3] border rounded-md ml-40"></div>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
          <div className="flex items-end">
            <div className="flex items-start">
              <h2>Loan amount</h2>
              <div className="ml-40 h-11 flex">
                <div className="w-28 text-[#53389E] font-medium flex bg-white border-[#D3D3D3] border-y border-l rounded-l-md py-2 pl-2">
                    7.5%
                </div>
                <div className="w-7 bg-[#53389E] py-3 rounded-r-md border-[#D3D3D3] border-r border-y">
                  <Taka/>
                </div>
              </div>
            </div>
            <div className="w-48 h-[72px] ml-16 rounded-md border border-[#8C7ABE]"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoansHero;
