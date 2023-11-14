'use client';

import Image from 'next/image';
import LinkButton from './LinkButton';

const LoanRow = (): JSX.Element => {

  return (
    <div className="bg-white mb-9 h-[200px] flex rounded-md border-2 border-[#EDEDED] py-5">
        <div className='w-[192px] border-r-2'>
          <Image
            src="/brand_assets/city.png"
            width={86}
            height={70}
            alt="brac"
            className='mx-auto'
            />
            <h2 className='text-[#1A1A1A] text-[18px] font-semibold text-center'>City Double Loan</h2>
          <Image
            src="/brand_assets/stars.png"
            width={90}
            height={70}
            alt="brac"
            className='mx-auto mt-[6px]'
          />
          <LinkButton/>
        </div>
        <div className='w-[140px] pl-6 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A] w-[65px]'>Total Amount</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>500,000 BDT</h1>
            <h1 className='text-xs leading-[14px] text-[#7B7B7B] mt-7 w-[76px]'>Minimum: BDT 5,00,000</h1>            
            <h1 className='text-xs leading-[14px] text-[#7B7B7B] mt-4 w-[93px]'>Minimum: BDT 5,00,00,000</h1>            
        </div>
        <div className='w-[110px] pl-6 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A] w-[61px]'>Interest Rate:</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>9 %</h1>
        </div>
        <div className='w-[118px] pl-6 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A] w-[65px]'>Loan Duration</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>5 Years</h1>
            <h1 className='text-xs leading-[14px] text-[#7B7B7B] mt-7 w-[63px]'>Minimum: 3 Years</h1>            
            <h1 className='text-xs leading-[14px] text-[#7B7B7B] mt-4 w-[66px]'>Minimum: 20 Years</h1>            
        </div>
        <div className='w-[110px] pl-6 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A] w-[61px]'>EMI</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>10,379 BDT</h1>
        </div>
        <div className='w-[117px] pl-6 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A] w-[66px]'>Total Payable</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>622,751 BDT</h1>
        </div>
        <div className='w-[214px] pl-6 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A] w-[66px]'>Fees</h1>
            <h3 className='text-[10px] font-semibold text-[#1A1A1A] mt-4'>Processing Fee:</h3>
            <h3 className='text-[10px] text-[#1A1A1A]'> 2% of the approved loan amount</h3>
            <h3 className='text-[10px] font-semibold text-[#1A1A1A] mt-1'>Early Adjacent Fee:</h3>
            <h3 className='text-[10px] text-[#1A1A1A]'> 2% of outstanding amount</h3>
            <h3 className='text-[10px] font-semibold text-[#1A1A1A] mt-1'>Partial Payment Fee:</h3>
            <h3 className='text-[10px] text-[#1A1A1A]'> 3% of the prepayment amount</h3>
            <h3 className='text-[10px] font-semibold text-[#1A1A1A] mt-1'>Penal Charge:</h3>
            <h3 className='text-[10px] text-[#1A1A1A]'> 2% on the arrears amount</h3>

        </div>
    </div>
  );
};

export default LoanRow;